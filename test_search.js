const https = require('https');

function fetchSearch(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=50&explicit=yes`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function getCleanName(name) {
  return name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*\[[^]]*\]/g, '')
    .split(' - ')[0]
    .split(': ')[0]
    .trim();
}

function normalizeStr(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, '')
    .replace(/ing\b/gi, 'in')
    .replace(/\s+/g, ' ')
    .trim();
}

function getScore(track, query) {
    const qNorm = normalizeStr(query);
    const qWordsNorm = qNorm.split(/\s+/).filter(w => w.length > 0);
    const titleNorm = normalizeStr(track.trackName);
    const artistNorm = normalizeStr(track.artistName);
    const cleanTitleNorm = normalizeStr(getCleanName(track.trackName));

    let score = 0;

    if (titleNorm === qNorm) score += 100;
    if (artistNorm === qNorm) score += 100;
    if (cleanTitleNorm === qNorm && titleNorm !== qNorm) score += 100;

    if (titleNorm.includes(qNorm)) score += 50;
    if (artistNorm.includes(qNorm)) score += 50;

    if (`${titleNorm} ${artistNorm}` === qNorm || `${artistNorm} ${titleNorm}` === qNorm) score += 200;

    if (`${cleanTitleNorm} ${artistNorm}` === qNorm || `${artistNorm} ${cleanTitleNorm}` === qNorm) {
      score += 150;
    }

    let titleMatchWords = 0;
    let artistMatchWords = 0;

    for (const w of qWordsNorm) {
      const regex = new RegExp(`\\b${w}\\b`, 'i');
      if (regex.test(titleNorm)) titleMatchWords++;
      if (regex.test(artistNorm)) artistMatchWords++;
    }

    if (titleMatchWords > 0 && artistMatchWords > 0) score += 30;

    score += (titleMatchWords * 10);
    score += (artistMatchWords * 10);

    if (qWordsNorm.includes(cleanTitleNorm)) score += 20;
    if (qWordsNorm.includes(artistNorm) && qWordsNorm.length === 1) score += 20;

    return score;
}

async function run() {
  const query = "mario bros";
  const data = await fetchSearch(query);
  const fetchedResults = data.results || [];

  const groups = new Map();
  fetchedResults.forEach(track => {
    const cleanName = getCleanName(track.trackName).toLowerCase();
    const key = `${track.artistName.toLowerCase()}|${cleanName}`;

    if (!groups.has(key)) {
      groups.set(key, track);
    } else {
      const currentTrack = groups.get(key);
      const isVariant = (name) => {
        const cn = getCleanName(name).toLowerCase();
        return name.toLowerCase().trim() !== cn;
      };
      if (isVariant(currentTrack.trackName) && !isVariant(track.trackName)) {
        groups.set(key, track);
      }
    }
  });

  const filteredResults = Array.from(groups.values());

  // OLD LOGIC
  const scoresMap = new Map();
  filteredResults.forEach(track => scoresMap.set(track, getScore(track, query)));
  const oldSorted = [...filteredResults].sort((a, b) => {
    const scoreA = scoresMap.get(a);
    const scoreB = scoresMap.get(b);
    if (scoreA !== scoreB) return scoreB - scoreA;
    return 0; // Stable sort
  });

  // NEW LOGIC: strictly iTunes default ordering (which is just the order in filteredResults, since it preserves the first seen)
  const newSorted = filteredResults;

  console.log("=== OLD LOGIC (Heuristics) ===");
  oldSorted.slice(0, 10).forEach(t => console.log(`[Score: ${scoresMap.get(t)}] ${t.trackName} by ${t.artistName}`));

  console.log("\n=== NEW LOGIC (iTunes Popularity) ===");
  newSorted.slice(0, 10).forEach(t => console.log(`${t.trackName} by ${t.artistName}`));
}

run();
