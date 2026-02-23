import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heardle clone', () => {
  render(<App />);
  const linkElement = screen.getByText(/Heardle Clone/i);
  expect(linkElement).toBeInTheDocument();
});
