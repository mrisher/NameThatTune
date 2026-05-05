import { processSearchResults, MAX_RESULTS } from './searchLogic';

describe('processSearchResults', () => {
  test('preserves iTunes order and caps at MAX_RESULTS', () => {
    const fetched = [
      { trackId: '1', trackName: 'Alpha', artistName: 'X' },
      { trackId: '2', trackName: 'Bravo', artistName: 'X' },
      { trackId: '3', trackName: 'Charlie', artistName: 'X' },
      { trackId: '4', trackName: 'Delta', artistName: 'X' },
      { trackId: '5', trackName: 'Echo', artistName: 'X' },
      { trackId: '6', trackName: 'Foxtrot', artistName: 'X' },
    ];
    const out = processSearchResults(fetched, 'anything');
    expect(out).toHaveLength(MAX_RESULTS);
    expect(out.map(t => t.trackId)).toEqual(['1', '2', '3', '4', '5']);
  });

  test('keeps the original variant-free track when an original and a variant come from the same artist', () => {
    const fetched = [
      { trackId: 'v', trackName: 'Song (Acoustic)', artistName: 'Artist' },
      { trackId: 'o', trackName: 'Song', artistName: 'Artist' },
    ];
    const out = processSearchResults(fetched, 'song');
    expect(out).toHaveLength(1);
    expect(out[0].trackId).toBe('o');
  });

  test('preserves two same-titled tracks from different artists (Adele\'s "Hello" vs Lionel Richie\'s)', () => {
    const fetched = [
      { trackId: 'adele', trackName: 'Hello', artistName: 'Adele' },
      { trackId: 'lionel', trackName: 'Hello', artistName: 'Lionel Richie' },
    ];
    const out = processSearchResults(fetched, 'hello');
    expect(out.map(t => t.trackId)).toEqual(['adele', 'lionel']);
  });

  test('collapses 3+ near-duplicate titles across artists (spammy uploader pattern), keeping iTunes\' first entry', () => {
    const fetched = [
      { trackId: 'a', trackName: 'Mario Brothers Theme', artistName: 'Uploader A' },
      { trackId: 'b', trackName: 'Mario Brothers Theme (Remix)', artistName: 'Uploader B' },
      { trackId: 'c', trackName: 'Mario Brothers Theme', artistName: 'Uploader C' },
      { trackId: 'd', trackName: 'Super Mario Galaxy', artistName: 'Uploader D' },
    ];
    const out = processSearchResults(fetched, 'mario');
    expect(out.map(t => t.trackId)).toEqual(['a', 'd']);
  });

  test('drops lookalike covers when correctTrack is set (same title, wrong artist)', () => {
    const fetched = [
      { trackId: 'klaus', trackName: "He's a Pirate", artistName: 'Klaus Badelt' },
      { trackId: 'cover', trackName: "He's a Pirate (Cover)", artistName: 'Random Joe' },
      { trackId: 'hans', trackName: "He's a Pirate", artistName: 'Hans Zimmer' },
      { trackId: 'unrelated', trackName: 'Davy Jones Theme', artistName: 'Hans Zimmer' },
    ];
    const correctTrack = { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' };
    const out = processSearchResults(fetched, "he's a pirate", correctTrack);
    expect(out.find(t => t.trackId === 'klaus')).toBeUndefined();
    expect(out.find(t => t.trackId === 'cover')).toBeUndefined();
    expect(out[0].trackId).toBe('hans');
    expect(out.find(t => t.trackId === 'unrelated')).toBeDefined();
  });

  test('drops the correct track entirely when the query does not name it (no unfair hints)', () => {
    const fetched = [
      { trackId: 'hans', trackName: "He's a Pirate", artistName: 'Hans Zimmer' },
      { trackId: 'theme', trackName: 'Pirates of the Caribbean Suite', artistName: 'Hans Zimmer' },
      { trackId: 'davy', trackName: 'Davy Jones', artistName: 'Hans Zimmer' },
    ];
    const correctTrack = { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' };
    const out = processSearchResults(fetched, 'pirates of the caribbean', correctTrack);
    expect(out.find(t => t.trackId === 'hans')).toBeUndefined();
    expect(out.find(t => t.trackId === 'theme')).toBeDefined();
    expect(out.find(t => t.trackId === 'davy')).toBeDefined();
  });

  test('still surfaces the correct track when the query actually names it', () => {
    const fetched = [
      { trackId: 'hans', trackName: "He's a Pirate", artistName: 'Hans Zimmer' },
      { trackId: 'theme', trackName: 'Pirates of the Caribbean Suite', artistName: 'Hans Zimmer' },
    ];
    const correctTrack = { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' };
    const out = processSearchResults(fetched, "he's a pirate", correctTrack);
    expect(out[0].trackId).toBe('hans');
  });

  test('injects the correctTrack synthetically when the query covers the answer (full artist) and iTunes did not return it', () => {
    const fetched = [
      { trackId: '1', trackName: 'Super Mario (Trap Remix)', artistName: 'Trap Remix Guys' },
      { trackId: '2', trackName: 'Super Mario Land', artistName: 'Funny Minions Guys' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'koji kondo', correctTrack);
    const synthetic = out.find(t => t.isSynthetic);
    expect(synthetic).toBeDefined();
    expect(synthetic.trackName).toBe('Super Mario Bros. Theme');
    expect(synthetic.artistName).toBe('Koji Kondo');
  });

  test('does not inject a synthetic track when iTunes already returned the correct track', () => {
    const fetched = [
      { trackId: '1', trackName: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'koji kondo', correctTrack);
    expect(out.filter(t => t.isSynthetic)).toHaveLength(0);
    expect(out).toHaveLength(1);
  });

  test('synthetic correctTrack survives the MAX_RESULTS cap even when iTunes returns enough unique results to fill it', () => {
    const fetched = [
      { trackId: '1', trackName: 'Super Mario (Trap Remix)', artistName: 'Trap Remix Guys' },
      { trackId: '2', trackName: 'Super Mario Land', artistName: 'Funny Minions Guys' },
      { trackId: '3', trackName: 'Super Mario Galaxy', artistName: 'Pianos Music' },
      { trackId: '4', trackName: 'Mario Kart Theme', artistName: 'Mario Jay Bee' },
      { trackId: '5', trackName: 'Super Mario 64', artistName: 'Super 8 Bit Era' },
      { trackId: '6', trackName: 'Mario Underwater', artistName: 'Filler' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'koji kondo', correctTrack);
    expect(out).toHaveLength(MAX_RESULTS);
    expect(out[0].artistName).toBe('Koji Kondo');
    expect(out[0].isSynthetic).toBe(true);
  });

  test('promotes the correct track to position 0 when iTunes returned it past the slice cap', () => {
    const koji = {
      trackId: 'koji',
      trackName: 'Super Mario Bros. Theme',
      artistName: 'Koji Kondo',
      previewUrl: 'https://example.com/koji.m4a',
      artworkUrl100: 'https://example.com/koji.jpg',
    };
    const fetched = [
      { trackId: '1', trackName: 'Super Mario (Trap Remix)', artistName: 'Trap Remix Guys' },
      { trackId: '2', trackName: 'Super Mario Land', artistName: 'Funny Minions Guys' },
      { trackId: '3', trackName: 'Super Mario Galaxy', artistName: 'Pianos Music' },
      { trackId: '4', trackName: 'Mario Kart Theme', artistName: 'Mario Jay Bee' },
      { trackId: '5', trackName: 'Super Mario 64', artistName: 'Super 8 Bit Era' },
      { trackId: '6', trackName: 'Mario Underwater', artistName: 'Filler' },
      koji,
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'koji kondo', correctTrack);
    expect(out).toHaveLength(MAX_RESULTS);
    expect(out[0].trackId).toBe('koji');
    expect(out[0].isSynthetic).toBeUndefined();
    expect(out[0].previewUrl).toBe(koji.previewUrl);
    expect(out[0].artworkUrl100).toBe(koji.artworkUrl100);
    expect(out.filter(t => t.isSynthetic)).toHaveLength(0);
  });

  test('a 2+ meaningful-word query whose words all match title/artist tokens promotes the answer ("super mario kondo")', () => {
    const fetched = [];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'super mario kondo', correctTrack);
    expect(out[0]).toMatchObject({
      trackName: 'Super Mario Bros. Theme',
      artistName: 'Koji Kondo',
      isSynthetic: true,
    });
  });

  test('a single distinctive query word does NOT promote a multi-word answer ("Mario" alone is not enough for "Super Mario Bros. Theme")', () => {
    const fetched = [];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'Mario', correctTrack);
    expect(out.find(t => t.isSynthetic)).toBeUndefined();
  });

  test('a single short query word does NOT promote a multi-word answer ("go" alone is not enough for "Go West")', () => {
    const correctTrack = { songTitle: 'Go West', artistName: 'Pet Shop Boys' };
    const out = processSearchResults([], 'go', correctTrack);
    expect(out.find(t => t.isSynthetic)).toBeUndefined();
  });

  test('does not inject when the query does not match the correct track', () => {
    const fetched = [
      { trackId: '1', trackName: 'Vogue', artistName: 'Madonna' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'vogue', correctTrack);
    expect(out.filter(t => t.isSynthetic)).toHaveLength(0);
  });

  test('requires every query word to match (AND), not just any (OR), so loose overlap does not promote the answer', () => {
    const fetched = [
      { trackId: 'a', trackName: 'Sailing the Open Sea', artistName: 'Some Artist' },
    ];
    const correctTrack = { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' };
    // "pirate" (and "i") appear as substrings inside "he's a pirate", but the
    // overall query is unrelated to the answer. Under OR matching this would
    // promote the synthetic answer; under AND it must not.
    const out = processSearchResults(fetched, 'i love pirate ships', correctTrack);
    expect(out.find(t => t.isSynthetic)).toBeUndefined();
    expect(out.map(t => t.trackId)).toEqual(['a']);
  });

  test('ignores short stopword-length tokens during matching but falls back when the entire query is short', () => {
    const correctTrack = { songTitle: 'Go', artistName: 'Travis' };

    // "i" and "a" alone shouldn't make a query "match" — they substring-match
    // almost every title. Even though "go" is short, with no longer words in
    // the query we still apply it and promote the answer.
    const shortQuery = processSearchResults([], 'go', correctTrack);
    expect(shortQuery[0]).toMatchObject({ trackName: 'Go', artistName: 'Travis', isSynthetic: true });

    // "i a the" is all short tokens — no meaningful words in title/artist.
    const stopwordsOnly = processSearchResults([], 'i a the', correctTrack);
    expect(stopwordsOnly.find(t => t.isSynthetic)).toBeUndefined();
  });
});
