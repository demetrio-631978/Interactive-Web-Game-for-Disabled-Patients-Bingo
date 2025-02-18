// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App.js';  // Add the .js extension

test('renders Bingo Game title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bingo Game/i); 
  expect(linkElement).toBeInTheDocument();
});
