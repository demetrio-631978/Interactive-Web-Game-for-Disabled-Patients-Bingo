import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bingo Game title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bingo Game/i); // Check for "Bingo Game" text
  expect(linkElement).toBeInTheDocument();
});

test('renders players and bingo numbers', () => {
  render(<App />);
  const playersElement = screen.getByText(/Players:/i); // Check for "Players:" text
  expect(playersElement).toBeInTheDocument();

  const bingoNumbersElement = screen.getByText(/Bingo Numbers:/i); // Check for "Bingo Numbers:" text
  expect(bingoNumbersElement).toBeInTheDocument();
});
