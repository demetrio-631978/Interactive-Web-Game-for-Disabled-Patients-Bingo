import { render, screen } from '@testing-library/react';
import App from './App';

// Update the test to check for Bingo Game title instead of "learn react"
test('renders Bingo Game title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bingo Game/i);  // Check for Bingo Game title
  expect(linkElement).toBeInTheDocument();
});

// Additional test to verify players and bingo numbers are rendered
test('renders players and bingo numbers', () => {
  render(<App />);
  const playersTitle = screen.getByText(/Players:/i);
  const bingoNumbersTitle = screen.getByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});

