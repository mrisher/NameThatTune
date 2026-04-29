import { processSearchResults, MAX_RESULTS } from './searchLogic';

describe('processSearchResults', () => {
  test('preserves iTunes order and caps at MAX_RESULTS', () => {
    const fetched = [
      { trackId: '1', trackName: 'A', artistName: 'X' },
      { trackId: '2', trackName: 'B', artistName: 'X' },
      { trackId: '3', trackName: 'C', artistName: 'X' },
      { trackId: '4', trackName: 'D', artistName: 'X' },
      { trackId: '5', trackName: 'E', artistName: 'X' },
      { trackId: '6', trackName: 'F', artistName: 'X' },
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

  test('does not collapse same-titled tracks from different artists', () => {
    const fetched = [
      { trackId: 'a', trackName: 'Sing', artistName: 'Ed Sheeran' },
      { trackId: 'b', trackName: 'Sing', artistName: 'Travis' },
    ];
    const out = processSearchResults(fetched, 'sing');
    expect(out.map(t => t.trackId)).toEqual(['a', 'b']);
  });

  test('injects the correctTrack synthetically when the query matches and iTunes did not return it', () => {
    const fetched = [
      { trackId: '1', trackName: 'Super Mario (Trap Remix)', artistName: 'Trap Remix Guys' },
      { trackId: '2', trackName: 'Super Mario (Minions Remix)', artistName: 'Funny Minions Guys' },
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
      { trackId: '2', trackName: 'Super Mario (Minions Remix)', artistName: 'Funny Minions Guys' },
      { trackId: '3', trackName: 'Super Mario', artistName: 'Pianos Music' },
      { trackId: '4', trackName: 'Super Mario', artistName: 'Mario Jay Bee' },
      { trackId: '5', trackName: 'Super Mario', artistName: 'Super 8 Bit Era' },
      { trackId: '6', trackName: 'Mario Theme', artistName: 'Filler' },
    ];
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'super mario', correctTrack);
    expect(out).toHaveLength(MAX_RESULTS);
    const koji = out.find(t => t.artistName === 'Koji Kondo');
    expect(koji).toBeDefined();
    expect(koji.isSynthetic).toBe(true);
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
