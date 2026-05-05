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

  test('collapses same-titled tracks across artists, keeping iTunes\' first entry', () => {
    const fetched = [
      { trackId: 'a', trackName: 'Sing', artistName: 'Ed Sheeran' },
      { trackId: 'b', trackName: 'Sing', artistName: 'Travis' },
    ];
    const out = processSearchResults(fetched, 'sing');
    expect(out.map(t => t.trackId)).toEqual(['a']);
  });

  test('collapses near-duplicate titles across artists (parens stripped) so spammy uploads do not crowd out other songs', () => {
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

  test('injects the correctTrack synthetically when the query matches and iTunes did not return it', () => {
    const fetched = [
      { trackId: '1', trackName: 'Super Mario (Trap Remix)', artistName: 'Trap Remix Guys' },
      { trackId: '2', trackName: 'Super Mario Land', artistName: 'Funny Minions Guys' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'super mario', correctTrack);
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
    const out = processSearchResults(fetched, 'super mario', correctTrack);
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
    const out = processSearchResults(fetched, 'super mario', correctTrack);
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
    const out = processSearchResults(fetched, 'super mario', correctTrack);
    expect(out).toHaveLength(MAX_RESULTS);
    expect(out[0].trackId).toBe('koji');
    expect(out[0].isSynthetic).toBeUndefined();
    expect(out[0].previewUrl).toBe(koji.previewUrl);
    expect(out[0].artworkUrl100).toBe(koji.artworkUrl100);
    expect(out.filter(t => t.isSynthetic)).toHaveLength(0);
  });

  test('does not inject when the query does not match the correct track', () => {
    const fetched = [
      { trackId: '1', trackName: 'Vogue', artistName: 'Madonna' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'vogue', correctTrack);
    expect(out.filter(t => t.isSynthetic)).toHaveLength(0);
  });
});
