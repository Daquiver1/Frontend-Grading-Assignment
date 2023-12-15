import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home.js'
import Contact from './Contact.js';
import GradeReport from './GradeReport.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders')