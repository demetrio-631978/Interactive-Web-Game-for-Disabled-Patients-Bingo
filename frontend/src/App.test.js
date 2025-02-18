import { render, screen } from '@testing-library/react';
import App from './App';

// Skipping the outdated test
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test for Bingo Game title
test('renders Bingo Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bingo Game/i);
  expect(titleElement).toBeInTheDocument();
});

// Test for players and bingo numbers
test('renders players and bingo numbers', () => {
  render(<App />);
  const playersTitle = screen.getByText(/Players:/i);
  const bingoNumbersTitle = screen.getByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});
