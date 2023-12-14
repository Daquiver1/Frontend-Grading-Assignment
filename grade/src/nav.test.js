import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './MyNavbar';

describe('MyNavbar Component', () => {
  test('renders navbar with correct links', () => {
    render(
      <Router>
        <MyNavbar />
      </Router>
    );

    expect(screen.getByText('Missing Grade Reporting System')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Grade Report')).toBeInTheDocument();
    expect(screen.getByText('Missing Grade Form')).toBeInTheDocument();
    expect(screen.getByText('Instructor Contact')).toBeInTheDocument();
    expect(screen.getByText('Help and Support')).toBeInTheDocument();
  });

  test('renders login link as active when on the login page', () => {
    render(
      <Router>
        <MyNavbar />
      </Router>
    );
    const loginLink = screen.getByText('Login');
    expect(loginLink).toHaveClass('active');
  });
});
