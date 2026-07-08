const express = require('express');
const path = require('path');
const fs = require('fs');
const { Firestore } = require('@google-cloud/firestore');
const { Database } = require('duckdb-async');
const seedrandom = require('seedrandom');
const { execSync, exec } = require('child_process');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

const AGGREGATES_PATH = 'billboard_aggregates.parquet';

let db;
async function initDb() {
  try {
    // If db already exists, we are re-initializing (e.g. after background update)
    if (db) {
      await db.run("DROP TABLE IF EXISTS billboard_aggregates");
    } else {
      db = await Database.create(':memory:');
      // Load community extensions for advanced fuzzy search
      await db.run("INSTALL rapidfuzz FROM community; LOAD rapidfuzz;");
    }

    // Load the parquet file into a table once at startup to improve query speed
    // Check /tmp first for background updates, then fallback to bundled file
    const localPath = fs.existsSync(path.join('/tmp', AGGREGATES_PATH))
      ? path.join('/tmp', AGGREGATES_PATH)
      : path.join(__dirname, AGGREGATES_PATH);

    await db.run(`CREATE TABLE billboard_aggregates AS SELECT * FROM '${localPath}'`);
    console.log(`Database initialized and Parquet data loaded from ${localPath} into memory.`);
  } catch (err) {
    console.error("Failed to initialize database:", err);
  }
}
initDb();

function getHistory() {
  try {
    const configContent = fs.readFileSync(path.join(__dirname, 'client/src/config.js'), 'utf8');
    // Simple regex to extract artistName and songTitle from rawSongs array
    const matches = [...configContent.matchAll(/"songTitle":\s*"([^"]+)",\s*"artistName":\s*"([^"]+)"/g)];
    return matches.slice(-28).map(m => ({
      title: Buffer.from(m[1], 'base64').toString(),
      artist: Buffer.from(m[2], 'base64').toString()
    }));
  } catch (e) {
    console.error("Error reading history from config:", e);
    return [];
  }
}

async function fetchItunesUrl(artist, title) {
  const query = `${artist} ${title}`;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=5&media=music`;
  try {
    const res = execSync(`curl -s "${url}"`).toString();
    const data = JSON.parse(res);
    if (data.results && data.results.length > 0) {
      // Lexical matching: pick the one with the shortest name as a proxy for "cleanest"
      const bestMatch = data.results.sort((a, b) => a.trackName.length - b.trackName.length)[0];
      return { audioUrl: bestMatch.previewUrl, trackId: bestMatch.trackId };
    }
  } catch (e) {
    console.error("iTunes fetch failed:", e);
  }
  return null;
}

const firestore = new Firestore({
  ignoreUndefinedProperties: true,
  databaseId: 'dudle'
});

// Serve static files from the React app, but don't serve index.html statically
app.use(express.static(path.join(__dirname, 'client/build'), {
  index: false,
  setHeaders: (res, path) => {
    // Prevent caching of index.html and image assets to ensure scrapers see latest OG tags/images
    if (path.endsWith('index.html') || path.endsWith('.png') || path.endsWith('.ico')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

const serveIndex = (req, res) => {
  const indexPath = path.join(__dirname, 'client/build', 'index.html');
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(500).end();
    }

    const host = req.get('host') || 'localhost:8080';
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const origin = `${protocol}://${host}`;

    // Inject the absolute origin into OpenGraph tags and add a cache-buster
    let injectedHtml = htmlData;

    if (req.path.startsWith('/nudle')) {
      injectedHtml = injectedHtml
        .replace(/content="Dudle"/g, 'content="Nudle"')
        .replace(/<title>Dudle<\/title>/g, '<title>Nudle</title>')
        .replace(/content="Guess the band, quick as you can"/g, 'content="FFTN"')
        .replace(/content="%PUBLIC_URL%\/dudle\.png"/g, `content="${origin}/wild_things.jpg"`);
    } else if (req.path.startsWith('/connectunes')) {
      injectedHtml = injectedHtml
        .replace(/content="Dudle"/g, 'content="ConnecTunes"')
        .replace(/<title>Dudle<\/title>/g, '<title>ConnecTunes</title>')
        .replace(/content="Guess the band, quick as you can"/g, 'content="Find the 2 songs that share a word in their title!"');
    }

    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.send(injectedHtml);
  });
};

app.get('/', serveIndex);

app.get('/api/stats', async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: "date is required" });
    }

    const docRef = firestore.collection('daily_stats').doc(date);
    const doc = await docRef.get();

    let stats = { scores: {}, winners: [] };
    if (doc.exists) {
      stats.scores = doc.data().scores || {};
    }

    const winnersQuery = await docRef.collection('winners').orderBy('score').get();
    if (!winnersQuery.empty) {
      stats.winners = winnersQuery.docs.map(d => {
        const data = d.data();
        return { name: data.name || "Anonymous", score: data.score };
      });
    }

    res.json(stats);
  } catch (err) {
    console.error("Error fetching stats:", err);
    // If it's a GCP Auth/Project ID error (common in local dev without credentials), return empty stats gracefully
    if (err.message && err.message.includes("Unable to detect a Project Id")) {
       return res.json({ scores: {} });
    }
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

app.get('/api/daily', async (req, res) => {
  try {
    const { date, forceCold } = req.query; // YYYY-MM-DD
    if (!date) return res.status(400).json({ error: "date is required" });

    // Phase 4: Background Update Check
    let lastUpdate = 0;
    const updateRef = firestore.collection('app_metadata').doc('billboard_update');
    try {
      const updateDoc = await updateRef.get();
      if (updateDoc.exists) {
        lastUpdate = updateDoc.data().timestamp || 0;
      }
    } catch (e) {
      console.warn("Failed to fetch last update from Firestore:", e.message);
    }

    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - lastUpdate > SEVEN_DAYS) {
      console.log("Triggering background billboard update...");
      // Save timestamp to Firestore immediately to prevent concurrent triggers
      await updateRef.set({ timestamp: Date.now() }, { merge: true }).catch(e => {
        console.error("Failed to save update timestamp to Firestore:", e);
      });

      // Run in background
      exec('python3 process_billboard.py', (err) => {
        if (err) console.error("Background update failed:", err);
        else {
          console.log("Background update successful. Re-initializing database...");
          initDb();
        }
      });
    }

    // Seeded PRNG for song selection
    const rng = seedrandom(date);
    const history = getHistory(); // Seed cooldown with last 4 weeks of config

    // Determine today's target obscurity based on distribution or override
    let targetObscurity;
    const obscurityOverride = parseInt(req.query.obscurity);
    if (obscurityOverride >= 1 && obscurityOverride <= 5) {
      targetObscurity = obscurityOverride;
      console.log(`Using target obscurity override: ${targetObscurity}`);
    } else {
      // 40% L1 (Mega), 40% L2 (Major), 10% L3 (Moderate), 5% L4 (Lesser), 5% L5 (Deep Cut)
      const roll = rng();
      if (roll < 0.40) targetObscurity = 1;
      else if (roll < 0.80) targetObscurity = 2;
      else if (roll < 0.90) targetObscurity = 3;
      else if (roll < 0.95) targetObscurity = 4;
      else targetObscurity = 5;
    }

    // Fetch all candidates from the loaded table that match target obscurity
    const candidates = await db.all(
      `SELECT artist, song_title, obscurity, highest_rank, weeks_on_chart, peak_year FROM billboard_aggregates WHERE obscurity = ?`,
      targetObscurity
    );

    if (candidates.length === 0) {
        return res.status(500).json({ error: "No candidates found for target obscurity" });
    }

    // Calibrated Weighted Selection Logic
    const weightedCandidates = candidates.map(c => {
      let weight = 1.0;
      const peak = Number(c.highest_rank);
      const weeks = Number(c.weeks_on_chart);
      const year = Number(c.peak_year);

      // Major Hits Boost
      if (peak <= 10) weight *= 4.0;
      else if (peak <= 20) weight *= 2.0;

      // Longevity Boost (Proxy for Radio Popularity)
      if (weeks >= 20) weight *= 3.0;
      else if (weeks >= 10) weight *= 1.5;

      // Era Preference (Sweet Spot 1980-2005)
      if (year >= 1980 && year <= 2005) weight *= 1.5;

      return { ...c, weight };
    });

    const totalWeight = weightedCandidates.reduce((acc, c) => acc + c.weight, 0);

    let selected;
    let attempts = 0;
    while (attempts < 100) {
      let roll = rng() * totalWeight;
      for (const c of weightedCandidates) {
        roll -= c.weight;
        if (roll <= 0) {
          selected = c;
          break;
        }
      }

      const inHistory = history.some(h => h.title === selected.song_title && h.artist === selected.artist);
      if (!inHistory) break;
      attempts++;
    }

    // Phase 3: Firestore-based iTunes population
    // Use a hash of artist|title as document ID
    let audioUrl = "";
    let isCold = forceCold === '1';
    try {
      const cacheId = Buffer.from(`${selected.artist}|${selected.song_title}`).toString('hex');
      const cacheRef = firestore.collection('song_cache').doc(cacheId);
      const cacheDoc = await cacheRef.get();

      if (cacheDoc.exists && !isCold) {
        audioUrl = cacheDoc.data().audioUrl;
      } else {
        isCold = true; // Cache miss or forced
        console.log(`Fetching iTunes URL for ${selected.artist} - ${selected.song_title}`);
        const itunes = await fetchItunesUrl(selected.artist, selected.song_title);
        if (itunes) {
          audioUrl = itunes.audioUrl;
          if (forceCold !== '1') {
            await cacheRef.set({
              artist: selected.artist,
              songTitle: selected.song_title,
              audioUrl: itunes.audioUrl,
              itunesTrackId: itunes.itunesTrackId,
              timestamp: Date.now()
            }).catch(e => console.error("Failed to save to Firestore cache:", e));
          }
        }
      }
    } catch (e) {
      console.warn("Firestore cache access failed (likely local dev):", e.message);
      isCold = true;
      // Fallback for local dev: fetch from iTunes but don't worry about caching
      const itunes = await fetchItunesUrl(selected.artist, selected.song_title);
      if (itunes) {
        audioUrl = itunes.audioUrl;
      }
    }

    const toNum = (val) => typeof val === 'bigint' ? Number(val) : val;

    res.json({
      day: date,
      songTitle: selected.song_title,
      artistName: selected.artist,
      audioUrl: audioUrl,
      obscurity: toNum(selected.obscurity),
      peak: toNum(selected.highest_rank),
      weeks: toNum(selected.weeks_on_chart),
      year: toNum(selected.peak_year),
      offset: 0,
      isCold: isCold
    });
  } catch (err) {
    console.error("Daily song failed:", err);
    res.status(500).json({ error: "Failed to generate daily song" });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({ error: "Database not ready" });
    }
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: "query is required" });
    }

    // Multi-word search logic:
    // 1. Split query into words
    // 2. Each word must match either artist or track (AND logic)
    // 3. Score based on full query similarity
    const words = q.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 0);
    const cleanQ = words.join(' ');

    if (words.length === 0) return res.json([]);

    const whereClause = words.map(w => `(artistName ILIKE '%${w}%' OR trackName ILIKE '%${w}%')`).join(' AND ');

    let results = await db.all(
      `SELECT artist as artistName, song_title as trackName, total_points,
          greatest(
            rapidfuzz_ratio(regexp_replace(lower(artistName), '[^a-z0-9\\s]', '', 'g'), ?),
            rapidfuzz_ratio(regexp_replace(lower(trackName), '[^a-z0-9\\s]', '', 'g'), ?),
            rapidfuzz_token_sort_ratio(regexp_replace(lower(artistName), '[^a-z0-9\\s]', '', 'g'), ?),
            rapidfuzz_token_sort_ratio(regexp_replace(lower(trackName), '[^a-z0-9\\s]', '', 'g'), ?)
          ) as score
       FROM billboard_aggregates
       WHERE ${whereClause}
       ORDER BY score DESC, total_points DESC
       LIMIT 5`,
      cleanQ, cleanQ, cleanQ, cleanQ
    );

    // Convert BigInts to Numbers for JSON serialization
    results = results.map(row => {
      const newRow = { ...row };
      for (const key in newRow) {
        if (typeof newRow[key] === 'bigint') {
          newRow[key] = Number(newRow[key]);
        }
      }
      return newRow;
    });

    res.json(results);
  } catch (err) {
    console.error("Error during search:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

app.post('/api/stats', async (req, res) => {
  try {
    const { date, score, wrongGuesses, uuid, name } = req.body;

    if (!date) {
      return res.status(400).json({ error: "date is required" });
    }

    const docRef = firestore.collection('daily_stats').doc(date);

    // Update daily stats document
    let dailyUpdates = { scores: {} };
    if (score !== undefined) {
       dailyUpdates.scores[score] = Firestore.FieldValue.increment(1);
    }

    // Record this winner so we can list "winners yesterday"
    if (uuid && score !== undefined && score !== "X") {
        try {
            await docRef.collection('winners').doc(uuid).set({
                name: name || "Anonymous",
                score,
                timestamp: Date.now()
            }, { merge: true });
        } catch (e) {
            console.error("Error recording winner:", e);
        }
    }

    if (score !== undefined) {
        await docRef.set(dailyUpdates, { merge: true });
    }

    // Increment wrong guesses
    if (wrongGuesses && Array.isArray(wrongGuesses)) {
      const uniqueWrongGuesses = [...new Set(wrongGuesses)];
      const batch = firestore.batch();
      const wrongGuessesCollection = docRef.collection('wrong_guesses');

      uniqueWrongGuesses.forEach((guess) => {
        // use a sanitized version of the string as the ID to avoid illegal characters
        const safeId = guess.replace(/[/]/g, '_');
        const guessRef = wrongGuessesCollection.doc(safeId);

        batch.set(guessRef, {
          guess: guess,
          count: Firestore.FieldValue.increment(1)
        }, { merge: true });
      });

      await batch.commit();
    }

    // Save individual user play
    if (uuid) {
      const userRef = firestore.collection('users').doc(uuid);
      const userPlayRef = userRef.collection('plays').doc(date);
      await userRef.set({
        name: name || "Anonymous",
        lastPlayed: date
      }, { merge: true });
      await userPlayRef.set({
        date,
        score,
        wrongGuesses
      }, { merge: true });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Error saving stats:", err);
    if (err.message && err.message.includes("Unable to detect a Project Id")) {
       return res.json({ success: true, warning: "Local dev mock: stats not saved" });
    }
    res.status(500).json({ error: "Failed to save stats" });
  }
});

app.put('/api/user', async (req, res) => {
  try {
    const { uuid, name } = req.body;
    if (!uuid || !name) {
      return res.status(400).json({ error: "uuid and name are required" });
    }

    const userRef = firestore.collection('users').doc(uuid);
    await userRef.set({ name }, { merge: true });
    res.json({ success: true });
  } catch (err) {
    console.error("Error updating user:", err);
    if (err.message && err.message.includes("Unable to detect a Project Id")) {
       return res.json({ success: true, warning: "Local dev mock: user not updated" });
    }
    res.status(500).json({ error: "Failed to update user" });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  if (req.path.startsWith('/static/')) {
    return res.status(404).send('Not found');
  }
  serveIndex(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
