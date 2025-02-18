import { render, screen } from '@testing-library/react';
import App from './App';

// Skip outdated test
test.skip('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i); // This is not needed anymore, since the "learn react" text doesn't exist
  expect(linkElement).toBeInTheDocument();
});

// Corrected tests
test('renders Bingo Game title', async () => {
  render(<App />);
  const titleElement = await screen.findByText(/Bingo Game/i);  // Looking for Bingo Game title
  expect(titleElement).toBeInTheDocument();
});

test('renders players and bingo numbers', async () => {
  render(<App />);
  const playersTitle = await screen.findByText(/Players:/i); // Looking for the "Players:" text
  const bingoNumbersTitle = await screen.findByText(/Bingo Numbers:/i); // Looking for the "Bingo Numbers:" text
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});
