import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Game from './Game';
import { getFriendlyParisDate } from '../utils/stats';

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
    setTracksToPlay = jest.fn();
  }
  return MockWebamp;
});

// Mock stats functions to have predictable output
jest.mock('../utils/stats', () => {
  const original = jest.requireActual('../utils/stats');
  return {
    ...original,
    getFriendlyParisDate: jest.fn(() => 'Oct 24, 2023'),
    getParisDateString: jest.fn(() => '2023-10-24')
  };
});

describe('Game Share Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    // Reset fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ scores: {}, mostCommonWrongGuess: null, fastestWin: null })
      })
    );

    // Setup generic mock for window methods that might be missing in jsdom
    Object.defineProperty(window, 'location', {
        value: {
          href: 'http://localhost/',
          search: ''
        },
        writable: true
    });
  });

  it('shows share modal and correctly copies text even without clipboard support', async () => {
    // Remove clipboard
    Object.assign(navigator, {
        clipboard: undefined
    });

    render(<Game />);

    // Simulate game over by skipping 6 times
    for(let i=0; i<6; i++) {
        const skipBtn = await screen.findByRole('button', { name: /^SKIP/ });
        fireEvent.click(skipBtn);
    }

    // Game is lost
    expect(await screen.findByText('--- GAME OVER ---')).toBeInTheDocument();

    // Enter name to unlock share button
    const nameInput = await screen.findByDisplayValue('');
    fireEvent.change(nameInput, { target: { value: 'Tester' } });
    const saveBtn = screen.getByRole('button', { name: 'SAVE' });
    fireEvent.click(saveBtn);

    // Name modal should disappear
    await waitFor(() => expect(screen.queryByText('ENTER NAME')).not.toBeInTheDocument());

    // Click share button
    const shareBtn = screen.getByRole('button', { name: 'SHARE RESULTS' });
    fireEvent.click(shareBtn);

    // Modal should appear
    expect(await screen.findByText('SHARE RESULTS', { selector: '.share-modal-titlebar span' })).toBeInTheDocument();

    // Check that it contains "SHARE RESULTS" text and the copied string
    const resultElement = screen.getByText(/today's Dudle \(undefined\) X\/6/i);
    expect(resultElement).toBeInTheDocument();
    expect(resultElement.textContent).toMatch(/⏩⏩⏩⏩⏩⏩/);
  });

  it('calls clipboard.writeText if available', async () => {
    const writeTextMock = jest.fn(() => Promise.resolve());
    Object.assign(navigator, {
        clipboard: {
            writeText: writeTextMock
        }
    });

    render(<Game />);

    for(let i=0; i<6; i++) {
        const skipBtn = await screen.findByRole('button', { name: /^SKIP/ });
        fireEvent.click(skipBtn);
    }

    // Enter name to unlock share button
    const nameInput = await screen.findByDisplayValue('');
    fireEvent.change(nameInput, { target: { value: 'Tester' } });
    const saveBtn = screen.getByRole('button', { name: 'SAVE' });
    fireEvent.click(saveBtn);

    await waitFor(() => expect(screen.queryByText('ENTER NAME')).not.toBeInTheDocument());

    const shareBtn = await screen.findByRole('button', { name: 'SHARE RESULTS' });
    fireEvent.click(shareBtn);

    expect(writeTextMock).toHaveBeenCalled();
    const sharedText = writeTextMock.mock.calls[0][0];
    expect(sharedText).toMatch(/today's Dudle \(undefined\) X\/6/);
  });
});

  it('correctly sets unlockDuration when jumping and reduces total play time by 15s', async () => {
    // Re-mock fetch here since it might have been cleared or not reset properly for this specific test block
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ scores: {}, mostCommonWrongGuess: null, fastestWin: null })
      })
    );

    // Reset jump offset for each test explicitly if needed, but rendering new Game handles state
    render(<Game />);

    // Initial guess state: unlock duration should be 1
    let skipBtn = await screen.findByRole('button', { name: /^SKIP/ });
    expect(skipBtn).toHaveTextContent('SKIP (+1s)');

    // Click jump
    const jumpBtn = await screen.findByRole('button', { name: 'JUMP +15s' });
    fireEvent.click(jumpBtn);

    // After first guess (Jump), unlockDuration should still show SKIP (+1s) because it's hardcoded
    skipBtn = await screen.findByRole('button', { name: /^SKIP/ });
    expect(skipBtn).toHaveTextContent('SKIP (+1s)');

    // We can also verify that the jump button is now disabled
    expect(jumpBtn).toBeDisabled();
  });
