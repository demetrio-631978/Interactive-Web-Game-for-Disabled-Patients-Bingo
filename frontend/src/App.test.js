import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bingo Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bingo Game/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Players and Bingo Numbers', () => {
  render(<App />);
  const playersTitle = screen.getByText(/Players:/i);
  const bingoNumbersTitle = screen.getByText(/Bingo Numbers:/i);
  expect(playersTitle).toBeInTheDocument();
  expect(bingoNumbersTitle).toBeInTheDocument();
});
