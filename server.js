const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;

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
