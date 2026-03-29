import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ConnecTunes from './ConnecTunes';

// Mock Audio
const mockPlay = jest.fn().mockImplementation(() => Promise.resolve());
const mockPause = jest.fn();

class MockAudio {
  constructor() {
    this.src = '';
    this.currentTime = 0;
  }
  play() {
    return mockPlay();
  }
  pause() {
    return mockPause();
  }
}

window.Audio = MockAudio;

describe('ConnecTunes Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls handlePlay and increments count when play resolves', async () => {
    render(<ConnecTunes />);
    
    // Play button A
    const buttonA = screen.getByText('A');
    fireEvent.click(buttonA);

    expect(mockPlay).toHaveBeenCalled();

    // Let the promise resolve
    await waitFor(() => {
      // the dot indicator should be shown
      // It renders a div inside the button with absolute positioning
      const dotContainers = buttonA.querySelectorAll('div[style*="position: absolute"]');
      expect(dotContainers.length).toBe(1);
    });

    mockPlay.mockClear();
  });

  test('calls handlePlay but does not increment count when play rejects', async () => {
    const originalPlay = mockPlay.getMockImplementation();
    mockPlay.mockImplementationOnce(() => Promise.reject(new Error('play failed')));

    // Mock console.error to avoid spamming test output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<ConnecTunes />);

    const buttonB = screen.getByText('B');
    fireEvent.click(buttonB);

    expect(mockPlay).toHaveBeenCalled();

    // Give some time for the catch block to run
    await new Promise(resolve => setTimeout(resolve, 0));

    // no dot should be rendered
    const dotContainers = buttonB.querySelectorAll('div[style*="position: absolute"]');
    expect(dotContainers.length).toBe(0);

    mockPlay.mockImplementation(originalPlay);
    consoleSpy.mockRestore();
    mockPlay.mockClear();
  });

  test('calls handleSelect when select boxes are clicked', async () => {
    render(<ConnecTunes />);
    
    const selectBoxes = screen.getAllByText('', { selector: '.connectunes-select-box' });
    expect(selectBoxes.length).toBe(4);
    
    fireEvent.click(selectBoxes[0]);
    
    await waitFor(() => {
      expect(screen.getByText('✔')).toBeInTheDocument();
    });
  });
});
