const getCleanName = (name) => {
  return name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*\[[^]]*\]/g, '')
    .split(' - ')[0]
    .split(': ')[0]
    .trim();
};

const normalizeTitle = (name) => getCleanName(name).toLowerCase();

const isVariant = (name) => name.toLowerCase().trim() !== normalizeTitle(name);

export const ITUNES_SEARCH_URL = (query) =>
  `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=50&explicit=yes`;

export const MAX_RESULTS = 5;

export function processSearchResults(fetchedResults, query, correctTrack) {
  const qWords = query.toLowerCase().trim().split(/\s+/).filter(w => w.length > 0);
  let results = Array.isArray(fetchedResults) ? [...fetchedResults] : [];

  let correctTitle = null;
  let correctArtist = null;
  let matchesCorrect = false;
  if (correctTrack && correctTrack.songTitle && correctTrack.artistName) {
    correctTitle = normalizeTitle(correctTrack.songTitle);
    correctArtist = correctTrack.artistName.toLowerCase();
    // AND across query words: every typed word must appear in the title or
    // artist. Loose OR matching let one-word overlaps in long queries (e.g.
    // "i love pirate ships" hitting "pirate") promote unrelated answers.
    matchesCorrect = qWords.length > 0 && qWords.every(w =>
      correctTrack.songTitle.toLowerCase().includes(w) ||
      correctArtist.includes(w)
    );

    // Filter entries whose normalized title matches the correct answer:
    //  - Drop lookalikes (same title, wrong artist) — e.g. Klaus Badelt's
    //    "He's a Pirate" cover when the answer is by Hans Zimmer.
    //  - When the query doesn't actually name the answer, drop the correct
    //    entry too — otherwise iTunes' organic ranking can leak it as a
    //    free hint (e.g. searching "pirates of the caribbean" surfacing
    //    "He's a Pirate" at slot 1).
    results = results.filter(t => {
      const titleMatches = normalizeTitle(t.trackName) === correctTitle;
      if (!titleMatches) return true;
      const artistMatches = t.artistName.toLowerCase() === correctArtist;
      return matchesCorrect && artistMatches;
    });
  }

  // Within a single artist, prefer the variant-free entry over a remix/acoustic version.
  const groups = new Map();
  results.forEach(track => {
    const key = `${track.artistName.toLowerCase()}|${normalizeTitle(track.trackName)}`;
    if (!groups.has(key)) {
      groups.set(key, track);
      return;
    }
    const currentTrack = groups.get(key);
    if (!isVariant(track.trackName) && isVariant(currentTrack.trackName)) {
      groups.set(key, track);
    }
  });
  results = Array.from(groups.values());

  // Across artists, collapse only when 3+ entries share the same normalized
  // title — that's the spammy-uploader pattern (random accounts re-posting
  // "Mario Brothers Theme"). At 2 we keep both, since same-titled songs by
  // distinct legit artists are common (Adele's "Hello" vs Lionel Richie's).
  const titleCounts = new Map();
  results.forEach(t => {
    const k = normalizeTitle(t.trackName);
    titleCounts.set(k, (titleCounts.get(k) || 0) + 1);
  });
  const seenSpammyTitles = new Set();
  results = results.filter(t => {
    const k = normalizeTitle(t.trackName);
    if ((titleCounts.get(k) || 0) < 3) return true;
    if (seenSpammyTitles.has(k)) return false;
    seenSpammyTitles.add(k);
    return true;
  });

  // Promote / synthesize the correct track when the query genuinely targets it.
  if (correctTrack && correctTrack.songTitle && correctTrack.artistName && matchesCorrect) {
    const idx = results.findIndex(t =>
      normalizeTitle(t.trackName) === correctTitle &&
      t.artistName.toLowerCase() === correctArtist
    );
    if (idx !== -1) {
      const [exact] = results.splice(idx, 1);
      results.unshift(exact);
    } else {
      results.unshift({
        trackId: `synthetic-${Date.now()}`,
        trackName: correctTrack.songTitle,
        artistName: correctTrack.artistName,
        isSynthetic: true,
      });
    }
  }

  return results.slice(0, MAX_RESULTS);
}
