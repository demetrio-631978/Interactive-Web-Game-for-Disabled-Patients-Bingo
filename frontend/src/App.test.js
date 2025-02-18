import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bingo Game title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bingo Game/i);  // Check for Bingo Game title
  expect(linkElement).toBeInTheDocument();
});

test('renders players and bingo numbers', () => {
  render(<App />);
  const playersTitle = screen.getByText(/Players:/i);
  const bingoNumbersTitle = screen.getByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});
