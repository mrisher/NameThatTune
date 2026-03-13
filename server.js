const express = require('express');
const path = require('path');
const fs = require('fs');
const { Firestore } = require('@google-cloud/firestore');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

const firestore = new Firestore({
  ignoreUndefinedProperties: true
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
    const injectedHtml = htmlData.replace(/"\/dudle\.png"/g, `"${origin}/dudle.png?v=1"`);
    
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

    let stats = { scores: {} };
    if (doc.exists) {
      stats.scores = doc.data().scores || {};
    }

    // Get the most common wrong guess
    const wrongGuessesQuery = await docRef.collection('wrong_guesses')
      .orderBy('count', 'desc')
      .limit(1)
      .get();

    if (!wrongGuessesQuery.empty) {
      const topGuessDoc = wrongGuessesQuery.docs[0];
      stats.mostCommonWrongGuess = topGuessDoc.data();
    }

    if (doc.exists && doc.data().fastestWin) {
      const fastestWinData = doc.data().fastestWin;
      stats.fastestWin = fastestWinData;

      // Attempt to look up current name from users collection
      if (fastestWinData.uuid) {
        try {
          const userDoc = await firestore.collection('users').doc(fastestWinData.uuid).get();
          if (userDoc.exists) {
             stats.fastestWin.name = userDoc.data().name || "Anonymous";
          }
        } catch (e) {
          console.error("Error looking up fastest win user:", e);
        }
      }
    }

    res.json(stats);
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
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

    // Check if best/first win and update if necessary using a transaction
    if (score !== undefined && score !== "X") {
        try {
            await firestore.runTransaction(async (t) => {
                const doc = await t.get(docRef);
                const data = doc.data() || {};

                // If there's no fastestWin yet, or this score is strictly lower (better) than the current best.
                // By doing strictly lower (<), the *first* person to get the score will keep it.
                if (!data.fastestWin || score < data.fastestWin.score) {
                    t.set(docRef, { fastestWin: { uuid, score, timestamp: Date.now() } }, { merge: true });
                }
            });
        } catch (e) {
            console.error("Error updating fastest win transaction:", e);
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
