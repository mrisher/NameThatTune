import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import NudleGame from './NudleGame';

const mockMovies = [
  { trackName: "Wild Things", artistName: "1998" },
  { trackName: "Where the Wild Things Are", artistName: "2009" },
  { trackName: "Toy Story", artistName: "1995" },
  { trackName: "Armageddon", artistName: "1998" }
];

let mockWebampState = {
  media: { status: 'STOPPED', timeElapsed: 0, length: 30 }
};

let mockActiveSubscriber = null;

jest.mock('webamp', () => {
  class MockWebamp {
    constructor() {
      this.store = {
        subscribe: jest.fn((cb) => {
          mockActiveSubscriber = cb;
          return jest.fn();
        }),
        getState: jest.fn(() => mockWebampState),
      };
      this.skinIsLoaded = jest.fn(() => Promise.resolve());
      this.seekToTime = jest.fn();
      this.pause = jest.fn(() => {
        mockWebampState.media.status = 'STOPPED';
        if (mockActiveSubscriber) mockActiveSubscriber();
      });
      this.renderWhenReady = jest.fn();
      this.dispose = jest.fn();
      this.setTracksToPlay = jest.fn();
    }
  }
  return MockWebamp;
});

describe('NudleGame Component', () => {
  let originalFetch;

  beforeAll(() => {
    originalFetch = window.fetch;
  });

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation((url) => {
      if (url.includes('nudle_movies.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies)
        });
      }
      return Promise.reject(new Error('not found'));
    });
    localStorage.clear();
    mockWebampState = { media: { status: 'STOPPED', timeElapsed: 0, length: 30 } };
    mockActiveSubscriber = null;
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  test('renders NUDLE header and initial empty playlist', async () => {
    render(<NudleGame />);
    
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NUDLE' })).toBeInTheDocument();
    });
    expect(screen.getByText('Sight Level: 🔍')).toBeInTheDocument();
    
    // Check initial slots exist
    expect(screen.getByText('1. ⬜ ------------------')).toBeInTheDocument();
    expect(screen.getByText('6. ⬜ ------------------')).toBeInTheDocument();
  });

  test('opens and closes the crop viewer modal on Play trigger', async () => {
    render(<NudleGame />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NUDLE' })).toBeInTheDocument();
    });

    // Simulate Webamp starting playback (Round 1 = 1s duration)
    act(() => {
      mockWebampState = { media: { status: 'PLAYING', timeElapsed: 0, length: 30 } };
      if (mockActiveSubscriber) mockActiveSubscriber();
    });

    // Crop viewer modal should now be open
    expect(screen.getByText('NUDLE CROP VIEWER')).toBeInTheDocument();
    expect(screen.getByText('CLOSING IN 1s')).toBeInTheDocument();

    // Advance playback time elapsed to 1s to trigger auto-pause inside subscription
    act(() => {
      mockWebampState = { media: { status: 'PLAYING', timeElapsed: 1.0, length: 30 } };
      if (mockActiveSubscriber) mockActiveSubscriber();
    });

    // Modal should close!
    await waitFor(() => {
      expect(screen.queryByText('NUDLE CROP VIEWER')).not.toBeInTheDocument();
    });
  });

  test('displays progressive hints and uses up guess slots when Hint is clicked', async () => {
    render(<NudleGame />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NUDLE' })).toBeInTheDocument();
    });

    const hintBtn = screen.getByRole('button', { name: 'HINT' });
    fireEvent.click(hintBtn);

    // Hint modal should be open showing first hint (wrapped in waitFor to allow async Webamp setup ticks to settle)
    await waitFor(() => {
      expect(screen.getByText('NUDLE HINT')).toBeInTheDocument();
      expect(screen.getByText('Released in 1998.')).toBeInTheDocument();
    });

    // Playlist slot 1 should show the hint skip entry
    expect(screen.getByText(/1\.\s+⏩\s+Hint Revealed/i)).toBeInTheDocument();
    expect(screen.getByText('Hint')).toBeInTheDocument();

    // Close hint modal
    const closeBtn = screen.getByRole('button', { name: 'CLOSE' });
    fireEvent.click(closeBtn);
    expect(screen.queryByText('NUDLE HINT')).not.toBeInTheDocument();

    // Click Hint again to unlock second hint
    fireEvent.click(hintBtn);
    await waitFor(() => {
      expect(screen.queryByText('Released in 1998.')).not.toBeInTheDocument();
      expect(screen.getByText('Genres: Crime, Drama, Mystery, Thriller.')).toBeInTheDocument();
    });

    // Playlist slot 2 should now show the second hint skip entry
    expect(screen.getByText(/2\.\s+⏩\s+Hint Revealed/i)).toBeInTheDocument();
  });

  test('fuzzy-searches movies and processes guess submission', async () => {
    render(<NudleGame />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NUDLE' })).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText('Guess the movie...');
    
    // Type query to trigger fuzzy search (needs 2+ chars)
    fireEvent.change(input, { target: { value: 'Wild' } });

    // Wait for search results
    await waitFor(() => {
      expect(screen.getByText('Wild Things')).toBeInTheDocument();
      expect(screen.getByText('Where the Wild Things Are')).toBeInTheDocument();
    });

    // Select incorrect movie first (title match word, wrong year)
    const wrongMovie = screen.getByText('Where the Wild Things Are');
    fireEvent.click(wrongMovie);

    // Playlist slot 1 should now show the incorrect guess (yellow)
    await waitFor(() => {
      expect(screen.getByText(/1\.\s+🟨\s+Where the Wild Things Are/i)).toBeInTheDocument();
      expect(screen.getByText('2009')).toBeInTheDocument();
    });

    // Select year-only match movie (Armageddon 1998)
    fireEvent.change(input, { target: { value: 'Arma' } });
    await waitFor(() => {
      expect(screen.getByText('Armageddon')).toBeInTheDocument();
    });
    const yearOnlyMovie = screen.getByText('Armageddon');
    fireEvent.click(yearOnlyMovie);

    // Playlist slot 2 should now show the incorrect guess (red)
    await waitFor(() => {
      expect(screen.getByText(/2\.\s+🟥\s+Armageddon/i)).toBeInTheDocument();
      expect(screen.getByText('1998')).toBeInTheDocument();
    });

    // Guess the correct movie
    fireEvent.change(input, { target: { value: 'Wild' } });
    await waitFor(() => {
      expect(screen.getByText('Wild Things')).toBeInTheDocument();
    });

    const correctMovie = screen.getByText('Wild Things');
    fireEvent.click(correctMovie);

    // Game should be won and show the full movie text
    await waitFor(() => {
      expect(screen.getAllByText('*** SENSE OF SIGHT WON! ***')[0]).toBeInTheDocument();
      expect(screen.getAllByText("TODAY'S FILM: WILD THINGS (1998)")[0]).toBeInTheDocument();
    });
  });

  test('handles skipping a round', async () => {
    render(<NudleGame />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'NUDLE' })).toBeInTheDocument();
    });

    const skipBtn = screen.getByRole('button', { name: 'SKIP (+1 Round)' });
    fireEvent.click(skipBtn);

    await waitFor(() => {
      expect(screen.getByText(/1\.\s+⏩\s+Skipped/i)).toBeInTheDocument();
    });
  });
});
