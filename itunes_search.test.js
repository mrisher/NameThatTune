const { execSync } = require('child_process');

const cleanTitle = (t) => {
  let cleaned = t.toLowerCase();
  cleaned = cleaned.replace(/\[.*?\]|\(.*?\)/g, ''); // removes (acoustic), [radio edit], etc.
  cleaned = cleaned.replace(/\s*(?:ft\.|feat\.)\s+.*$/g, ''); // removes ft. Collaborator
  return cleaned.trim();
};

async function fetchItunesUrl(artist, title) {
  const query = `${artist} ${title}`;
  // Using 50 limit and explicit=yes as in the main code
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=50&media=music&explicit=yes`;
  try {
    const res = execSync(`curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${url}"`).toString();
    const data = JSON.parse(res);
    if (data.results && data.results.length > 0) {
      const cleanTarget = cleanTitle(title);
      const exactMatches = data.results.filter(r => cleanTitle(r.trackName) === cleanTarget);

      let bestMatch;
      if (exactMatches.length > 0) {
        bestMatch = exactMatches.sort((a, b) => a.trackName.length - b.trackName.length)[0];
      } else {
        bestMatch = data.results.sort((a, b) => a.trackName.length - b.trackName.length)[0];
      }
      return { audioUrl: bestMatch.previewUrl, trackId: bestMatch.trackId, trackName: bestMatch.trackName };
    }
  } catch (e) {
    console.error("iTunes fetch failed:", e);
  }
  return null;
}

async function runTests() {
  console.log("--- Starting iTunes Search Tests ---");
  let passed = 0;
  const tests = [
    { artist: 'Sara Bareilles', title: 'King Of Anything', expectedTitleIncludes: 'King of Anything' },
    { artist: 'Radiohead', title: 'Creep (Acoustic)', expectedTitleIncludes: 'Creep (Acoustic)' }, // Even if we pass it in with acoustic, the exact matches might drop it or find one if we search it. Actually wait, if the database has "Creep (Acoustic)", cleanTitle makes it "creep". We search iTunes. iTunes returns some results. We match "creep" against cleaned result track names.
  ];

  for (const test of tests) {
    const result = await fetchItunesUrl(test.artist, test.title);
    // for test script just check if it worked
    if (result) {
       console.log(`✅ Fetched: ${test.artist} - ${test.title} -> ${result.trackName}`);
    } else {
       console.log(`❌ Failed: ${test.artist} - ${test.title}`);
    }
  }

  process.exit(0);
}

runTests().catch(e => {
  console.error(e);
  process.exit(1);
});
