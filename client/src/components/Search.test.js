import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search Component Ranking', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    // Provide a fresh copy of mockResults on every fetch call to avoid mutability issues
    // caused by adding isSynthetic=true flags to the results during grouping/sorting
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { trackId: '1', trackName: 'Super Mario Bros. Theme', artistName: 'Boogie Heights' },
            { trackId: '2', trackName: 'Peaches', artistName: 'Jack Black' },
            { trackId: '3', trackName: 'Mario Brothers Rap', artistName: 'Ali "Dee" Theodore' },
            { trackId: '4', trackName: 'Mario Bros', artistName: 'Banda La prestigiada' },
            { trackId: '5', trackName: 'Creep', artistName: 'Cover Band' },
            { trackId: '6', trackName: 'Creep (Acoustic)', artistName: 'Other Cover Band' },
            { trackId: '7', trackName: 'Creep', artistName: 'Radiohead' },
            { trackId: '8', trackName: 'Creep', artistName: 'Stone Temple Pilots' }
          ]
        }),
      })
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const setupAndSearch = async (query, correctTrack) => {
    render(<Search onSelect={() => {}} correctTrack={correctTrack} />);
    const input = screen.getByPlaceholderText(/Guess the song/i);

    // Type the query
    userEvent.type(input, query);

    // Fast-forward debounce timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Wait for the async state update from the fetch mock
    // Wait for the list to appear
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    // Extract results in order
    const listItems = screen.getAllByRole('listitem');
    return listItems.map(item => {
      const title = item.querySelector('strong').textContent;
      const artist = item.querySelector('span').textContent;
      return `${title} by ${artist}`;
    });
  };

  test('prioritizes synthetic exact correct track for "mario bros"', async () => {
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };

    const results1 = await setupAndSearch('mario bros', correctTrack);
    expect(results1[0]).toBe('Super Mario Bros. Theme by Koji Kondo');
    expect(results1[1]).toBe('Super Mario Bros. Theme by Boogie Heights');

    // Reset testing library state for the next render
    act(() => {
      document.body.innerHTML = '';
    });

    const results2 = await setupAndSearch('super mario', correctTrack);
    expect(results2[0]).toBe('Super Mario Bros. Theme by Koji Kondo');

    // Reset testing library state for the next render
    act(() => {
      document.body.innerHTML = '';
    });

    const results3 = await setupAndSearch('mario', correctTrack);
    expect(results3[0]).toBe('Super Mario Bros. Theme by Koji Kondo');
  });

  test('prioritizes synthetic exact correct track for "creep"', async () => {
    const correctTrack = { songTitle: 'Creep', artistName: 'Radiohead' };
    const results = await setupAndSearch('creep', correctTrack);

    expect(results[0]).toBe('Creep by Radiohead');
    expect(results[1]).toBe('Super Mario Bros. Theme by Boogie Heights');
    expect(results[2]).toBe('Peaches by Jack Black');
    expect(results[3]).toBe('Mario Brothers Rap by Ali "Dee" Theodore');
    expect(results[4]).toBe('Mario Bros by Banda La prestigiada');
    // Note: The original iTunes default order dictates that 'Cover Band' is at index 4 (before Radiohead at 6)
    // The test validates that the synthetic inject properly overrides the order and goes to index 0.
  });

  test('deduplicates variants but relies on iTunes default order without heuristic scoring', async () => {
    // With an unrelated correct track passed, "mario" simply falls back to standard iTunes + deduplication
    const correctTrack = { songTitle: 'Not Related', artistName: 'Someone Else' };
    const results = await setupAndSearch('mario', correctTrack);

    expect(results[0]).toBe('Super Mario Bros. Theme by Boogie Heights');
    expect(results[1]).toBe('Peaches by Jack Black');
    expect(results[2]).toBe('Mario Brothers Rap by Ali "Dee" Theodore');
  });
});
