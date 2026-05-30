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
const LAST_UPDATE_FILE = 'last_update.json';

let db;
async function initDb() {
  try {
    db = await Database.create(':memory:');
    // Load the parquet file into a table once at startup to improve query speed
    // This reduces the 'cold start' overhead of reading the file for every request
    await db.run(`CREATE TABLE billboard_aggregates AS SELECT * FROM '${AGGREGATES_PATH}'`);
    console.log("Database initialized and Parquet data loaded into memory.");
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
    // let injectedHtml = htmlData.replace(/"\/dudle\.png"/g, `"${origin}/dudle.png?v=1"`);
    let injectedHtml = htmlData;
    
    /* 
    // Dynamically adjust OpenGraph tags for different routes
    if (req.path.startsWith('/connectunes')) {
      injectedHtml = injectedHtml
        .replace(/content="Dudle"/g, 'content="ConnecTunes"')
        .replace(/<title>Dudle<\/title>/g, '<title>ConnecTunes</title>')
        .replace(/content="Guess the band, quick as you can"/g, 'content="Find the 2 songs that share a word in their title!"');
    }
    */
    
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
    if (fs.existsSync(LAST_UPDATE_FILE)) {
      lastUpdate = JSON.parse(fs.readFileSync(LAST_UPDATE_FILE)).timestamp;
    }
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - lastUpdate > SEVEN_DAYS) {
      console.log("Triggering background billboard update...");
      fs.writeFileSync(LAST_UPDATE_FILE, JSON.stringify({ timestamp: Date.now() }));
      // Run in background
      exec('python3 process_billboard.py', (err) => {
        if (err) console.error("Background update failed:", err);
        else console.log("Background update successful.");
      });
    }

    // Seeded PRNG for song selection
    const rng = seedrandom(date);
    const history = getHistory(); // Seed cooldown with last 4 weeks of config
    
    // Fetch all Q2 candidates from the loaded table
    const candidates = await db.all(
      `SELECT artist, song_title FROM billboard_aggregates WHERE popularity_quartile = 2`
    );

    if (candidates.length === 0) {
        return res.status(500).json({ error: "No candidates found in database" });
    }

    let selected;
    let attempts = 0;
    while (attempts < 100) {
      const idx = Math.floor(rng() * candidates.length);
      selected = candidates[idx];
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

    res.json({
      day: date,
      songTitle: selected.song_title,
      artistName: selected.artist,
      audioUrl: audioUrl,
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

    // Use DuckDB to search the loaded table
    // We prioritize by total_points to show the most famous versions first
    let results = await db.all(
      `SELECT artist as artistName, song_title as trackName, total_points 
       FROM billboard_aggregates 
       WHERE artistName ILIKE ? OR trackName ILIKE ? 
       ORDER BY total_points DESC 
       LIMIT 5`,
      `%${q}%`, `%${q}%`
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
