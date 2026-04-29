const getCleanName = (name) => {
  return name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*\[[^]]*\]/g, '')
    .split(' - ')[0]
    .split(': ')[0]
    .trim();
};

const isVariant = (name) => {
  const cleanName = getCleanName(name).toLowerCase();
  return name.toLowerCase().trim() !== cleanName;
};

export const ITUNES_SEARCH_URL = (query) =>
  `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=50&explicit=yes`;

export const MAX_RESULTS = 5;

export function processSearchResults(fetchedResults, query, correctTrack) {
  const qWords = query.toLowerCase().trim().split(/\s+/).filter(w => w.length > 0);
  let results = Array.isArray(fetchedResults) ? [...fetchedResults] : [];

  if (correctTrack && correctTrack.songTitle && correctTrack.artistName) {
    const correctTitleLower = correctTrack.songTitle.toLowerCase();
    const correctArtistLower = correctTrack.artistName.toLowerCase();
    const matchesCorrect = qWords.some(w =>
      correctTitleLower.includes(w) || correctArtistLower.includes(w)
    );

    if (matchesCorrect) {
      const alreadyExists = results.some(t =>
        t.trackName.toLowerCase() === correctTitleLower &&
        t.artistName.toLowerCase() === correctArtistLower
      );
      if (!alreadyExists) {
        // Prepend so the guaranteed-correct track survives the slice cap below.
        results.unshift({
          trackId: `synthetic-${Date.now()}`,
          trackName: correctTrack.songTitle,
          artistName: correctTrack.artistName,
          isSynthetic: true,
        });
      }
    }
  }

  const groups = new Map();
  results.forEach(track => {
    const cleanName = getCleanName(track.trackName).toLowerCase();
    const key = `${track.artistName.toLowerCase()}|${cleanName}`;

    if (!groups.has(key)) {
      groups.set(key, track);
      return;
    }
    const currentTrack = groups.get(key);
    if (track.isSynthetic) {
      groups.set(key, track);
    } else if (!currentTrack.isSynthetic && isVariant(currentTrack.trackName) && !isVariant(track.trackName)) {
      groups.set(key, track);
    }
  });

  return Array.from(groups.values()).slice(0, MAX_RESULTS);
}
