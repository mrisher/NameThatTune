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

test('renders winamp playlist', () => {
  // Use a mock route environment or just test App mounts since it handles its own routing
  render(<App />);
  const linkElements = screen.getAllByText(/GUESSES/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
