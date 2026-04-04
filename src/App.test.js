import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React Components App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Counter component', () => {
  render(<App />);
  const counterHeading = screen.getByText(/Counter Component/i);
  expect(counterHeading).toBeInTheDocument();
});

test('renders Controlled Form component', () => {
  render(<App />);
  const formHeading = screen.getByText(/Controlled Form Component/i);
  expect(formHeading).toBeInTheDocument();
});
