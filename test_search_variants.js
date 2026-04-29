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

async function runForQuery(query) {
  const data = await fetchSearch(query);
  let fetchedResults = data.results || [];

  const correctTrack = {
    songTitle: "Super Mario Bros. Theme",
    artistName: "Koji Kondo"
  };

  const qLower = query.toLowerCase().trim();
  const qWords = qLower.split(/\s+/).filter(w => w.length > 0);

  const correctTitleLower = correctTrack.songTitle.toLowerCase();
  const correctArtistLower = correctTrack.artistName.toLowerCase();

  const matchesCorrect = qWords.some(w => correctTitleLower.includes(w) || correctArtistLower.includes(w));

  if (matchesCorrect) {
    const syntheticTrack = {
      trackId: `synthetic-${Date.now()}`,
      trackName: correctTrack.songTitle,
      artistName: correctTrack.artistName,
      isSynthetic: true
    };

    const alreadyExists = fetchedResults.some(t =>
      t.trackName.toLowerCase() === correctTitleLower &&
      t.artistName.toLowerCase() === correctArtistLower
    );

    if (!alreadyExists) {
      fetchedResults.push(syntheticTrack);
    }
  }

  const groups = new Map();
  fetchedResults.forEach(track => {
    const cleanName = getCleanName(track.trackName).toLowerCase();
    const key = `${track.artistName.toLowerCase()}|${cleanName}`;

    if (!groups.has(key)) {
      groups.set(key, track);
    } else {
      const currentTrack = groups.get(key);
      if (track.isSynthetic) {
          groups.set(key, track);
      } else {
          const isVariant = (name) => {
            const cn = getCleanName(name).toLowerCase();
            return name.toLowerCase().trim() !== cn;
          };
          if (!currentTrack.isSynthetic && isVariant(currentTrack.trackName) && !isVariant(track.trackName)) {
            groups.set(key, track);
          }
      }
    }
  });

  const filteredResults = Array.from(groups.values());

  const scoresMap = new Map();
  filteredResults.forEach(track => scoresMap.set(track, getScore(track, query)));
  const oldSorted = [...filteredResults].sort((a, b) => {
    const scoreA = scoresMap.get(a);
    const scoreB = scoresMap.get(b);
    if (scoreA !== scoreB) return scoreB - scoreA;
    return 0; // Stable sort
  });

  console.log(`\n=== QUERY: "${query}" (CURRENT CODE OUTPUT) ===`);
  oldSorted.slice(0, 5).forEach(t => console.log(`[Score: ${scoresMap.get(t)}] ${t.trackName} by ${t.artistName} (Synthetic: ${t.isSynthetic || false})`));
}

async function runAll() {
  await runForQuery("Mario");
  await runForQuery("Mario bros");
  await runForQuery("super Mario bros");
  await runForQuery("super Mario");
}

runAll();
