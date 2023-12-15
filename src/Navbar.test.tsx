// Navbar.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

// Helper function to render Navbar within the Router context
const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<Router>{component}</Router>),
  };
};

describe('Navbar', () => {
  test('renders Navbar with collapsed menu', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('MGRS')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
    expect(screen.queryByText('Student Login')).not.toBeVisible();
  });

  test('can toggle navigation collapse', () => {
    renderWithRouter(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: '' });
    fireEvent.click(toggleButton);
    expect(screen.getByText('Student Login')).toBeVisible();
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Student Login')).not.toBeVisible();
  });

  test('contains links to all pages', () => {
    renderWithRouter(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: '' });
    fireEvent.click(toggleButton); // to expand the navbar for visibility

    expect(screen.getByText('Student Login')).toHaveAttribute('href', '/login');
    expect(screen.getByText('Contact Instructors')).toHaveAttribute('href', '/contact-instructors');
    expect(screen.getByText('Dashboard')).toHaveAttribute('href', '/dashboard');
    expect(screen.getByText('Grade Report')).toHaveAttribute('href', '/grade-report');
    expect(screen.getByText('Missing Grade Report')).toHaveAttribute('href', '/report-missing-grade');
    expect(screen.getByText('Contact Support')).toHaveAttribute('href', '/help-support');
  });
});