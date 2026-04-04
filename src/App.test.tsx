import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name', () => {
  render(<App />);
  const brandElement = screen.getByText(/VORTEX/i);
  expect(brandElement).toBeInTheDocument();
});
