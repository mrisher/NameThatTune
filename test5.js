const qLower = 'radiohead creep';
const qWords = qLower.split(/\s+/).filter(w => w.length > 0);

const getScore = (track) => {
  const title = track.trackName.toLowerCase();
  const artist = track.artistName.toLowerCase();

  let score = 0;

  if (title === qLower) score += 100;
  if (title.includes(qLower)) score += 50;
  if (`${title} ${artist}` === qLower || `${artist} ${title}` === qLower) score += 200;

  let titleMatchWords = 0;
  let artistMatchWords = 0;

  for (const w of qWords) {
    if (title.includes(w)) titleMatchWords++;
    if (artist.includes(w)) artistMatchWords++;
  }

  if (titleMatchWords > 0 && artistMatchWords > 0) score += 30;

  score += (titleMatchWords * 10);
  score += (artistMatchWords * 5);

  if (qWords.length > 0 && title === qWords[0]) score += 20;

  return score;
}

const tracks = [
  { trackName: "Creep (Acoustic)", artistName: "Radiohead" },
  { trackName: "Karma Police", artistName: "Radiohead" },
  { trackName: "No Surprises", artistName: "Radiohead" }
];

const mapped = tracks.map(t => ({...t, score: getScore(t)}));
console.log(mapped.sort((a,b) => b.score - a.score).map(t => `${t.trackName} - ${t.artistName} (Score: ${t.score})`));
