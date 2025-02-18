import { render, screen } from '@testing-library/react';
import App from './App';

// Skipped outdated test
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // This no longer exists in App.js
  expect(linkElement).toBeInTheDocument();
});

// Test for Bingo Game title
test('renders Bingo Game title', async () => {
  render(<App />);
  const titleElement = await screen.findByText(/Bingo Game/i);
  expect(titleElement).toBeInTheDocument();
});

// Test for players and bingo numbers
test('renders players and bingo numbers', async () => {
  render(<App />);
  const playersTitle = await screen.findByText(/Players:/i);
  const bingoNumbersTitle = await screen.findByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});
