import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('webamp', () => {
  class MockWebamp {
    constructor() {
      this.store = {
        subscribe: jest.fn(() => () => {}),
        getState: jest.fn(() => ({
          media: { status: 'STOPPED', timeElapsed: 0 }
        })),
        dispatch: jest.fn()
      };
    }
    renderWhenReady = jest.fn().mockResolvedValue(null);
    dispose = jest.fn();
    skinIsLoaded = jest.fn().mockResolvedValue(null);
    seekToTime = jest.fn();
    stop = jest.fn();
  }
  return MockWebamp;
});

test('renders winamp playlist', async () => {
  // Mock fetch locally for this test
  global.fetch = jest.fn((url) => {
    if (url.includes('/api/daily')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          day: '2026-05-26',
          songTitle: 'Mock Song',
          artistName: 'Mock Artist',
          audioUrl: 'https://example.com/mock.m4a',
          offset: 0
        })
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ scores: {}, winners: [] })
    });
  });

  render(<App />);
  const linkElements = await screen.findAllByText(/GUESSES/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
