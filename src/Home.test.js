// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  it('renders the component correctly', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(
      screen.getByText(
        'The Student Grade Report System is a platform designed to streamline and enhance the management and communication of academic performance. This system serves as a centralized hub for students, parents, and educators, providing real-time access to crucial information related to student grades, assessments, and overall academic progress.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('navigates to the login page when "Get Started" button is clicked', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    screen.getByText('Get Started').click();
    expect(window.location.pathname).toBe('/login');
  });
});
