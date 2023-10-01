import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/No of cakes/i);
  expect(linkElement).toBeInTheDocument();
});
