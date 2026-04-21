import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

const mockResults = [
  { trackId: '1', trackName: 'Madonna', artistName: 'Drake' },
  { trackId: '2', trackName: 'Like a Virgin', artistName: 'Madonna' },
  { trackId: '3', trackName: 'Vogue', artistName: 'Madonna' },
  { trackId: '4', trackName: "Stayin' Alive", artistName: 'Bee Gees' },
  { trackId: '5', trackName: 'Staying Alive', artistName: 'Cursed Cover Band' },
  { trackId: '6', trackName: 'I wanna dance with somebody (who loves me)', artistName: 'Whitney Houston' },
  { trackId: '7', trackName: 'I wanna dance with somebody', artistName: 'Cover Band' },
  { trackId: '8', trackName: 'Sing', artistName: 'Ed Sheeran' },
];

describe('Search Component Ranking', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [...mockResults] }),
      })
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const setupAndSearch = async (query) => {
    render(<Search onSelect={() => {}} />);
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

  test('prioritizes exact artist matches similar to exact title matches', async () => {
    const results = await setupAndSearch('Madonna');
    expect(results[0]).toBe('Madonna by Drake');
    expect(results[1]).toBe('Like a Virgin by Madonna');
    expect(results[2]).toBe('Vogue by Madonna');
  });

  test('treats "staying" and "stayin" equally and preserves stable sort', async () => {
    const results = await setupAndSearch('Staying Alive');
    expect(results[0]).toBe("Stayin' Alive by Bee Gees");
    expect(results[1]).toBe('Staying Alive by Cursed Cover Band');
  });

  test('strips parentheticals to allow originals to compete with exact cover matches', async () => {
    // Both score 200. Because we use stable sort, the original list order determines the tiebreaker.
    // In our mockResults, Whitney is idx 5 and Cover Band is idx 6, so Whitney stays ahead.
    const results = await setupAndSearch('I wanna dance with somebody');
    expect(results[0]).toBe('I wanna dance with somebody (who loves me) by Whitney Houston');
    expect(results[1]).toBe('I wanna dance with somebody by Cover Band');
  });

  test('lossy "ing" normalization correctly matches root words like Sing', async () => {
    const results = await setupAndSearch('Sing');
    expect(results[0]).toBe('Sing by Ed Sheeran');
  });
});
