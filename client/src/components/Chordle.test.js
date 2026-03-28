import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chordle from './Chordle';

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

describe('Chordle Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls handlePlay when buttons are clicked', async () => {
    render(<Chordle />);
    
    const buttons = ['A', 'B', 'C', 'D'];
    for (const label of buttons) {
      const button = screen.getByText(label);
      fireEvent.click(button);
      
      expect(mockPlay).toHaveBeenCalled();
      mockPlay.mockClear();
    }
  });

  test('calls handleSelect when select boxes are clicked', async () => {
    render(<Chordle />);
    
    const selectBoxes = screen.getAllByText('', { selector: '.chordle-select-box' });
    expect(selectBoxes.length).toBe(4);
    
    fireEvent.click(selectBoxes[0]);
    
    await waitFor(() => {
      expect(screen.getByText('✔')).toBeInTheDocument();
    });
  });
});
