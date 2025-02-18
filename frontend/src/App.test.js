import { render, screen } from '@testing-library/react';
import App from './App';

// Test to check for Bingo Game title
test('renders Bingo Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bingo Game/i);  // Check for Bingo Game title
  expect(titleElement).toBeInTheDocument();
});

// Additional test to verify players and bingo numbers are rendered
test('renders players and bingo numbers', () => {
  render(<App />);
  const playersTitle = screen.getByText(/Players:/i);
  const bingoNumbersTitle = screen.getByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});


