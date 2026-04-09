const isVariant = (name) => {
  const lowerName = name.toLowerCase();
  return lowerName.includes('(acoustic)') ||
          lowerName.includes('(live)') ||
          lowerName.includes('cover') ||
          lowerName.includes('remix') ||
          lowerName.includes('instrumental') ||
          lowerName.includes('karaoke') ||
          lowerName.includes('version');
};

const fetchedResults = [
  { trackName: 'Creep (Acoustic)', artistName: 'Radiohead' },
  { trackName: 'Karma Police', artistName: 'Radiohead' }
];

const filteredResults = fetchedResults.filter(track => {
  if (isVariant(track.trackName)) {
    const hasOriginal = fetchedResults.some(t =>
      t.artistName === track.artistName &&
      !isVariant(t.trackName) &&
      track.trackName.toLowerCase().includes(t.trackName.toLowerCase())
    );
    if (hasOriginal) {
      return false; // exclude variant
    }
  }
  return true;
});

console.log(filteredResults);
