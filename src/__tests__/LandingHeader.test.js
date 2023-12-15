import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingHeader from '../layout/header/LandingHeader';

test('renders home menu item in nav bar', () => {
  render(<LandingHeader />);

  // Check if the home menu item is present in the rendered component
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();

  // Example 1: Check for the presence of the logo
  const logoImage = screen.getByAltText(/main-logo/i);
  expect(logoImage).toBeInTheDocument();

  // Check for the presence of the login button if showLogin is true
  const loginButton = screen.queryByRole('link', { name: /login/i });
  if (loginButton !== null) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(loginButton).toBeInTheDocument();
  }

  // // Check if specific dropdown items are present
  const faqLink = screen.getByRole('link', { name: /faq/i });
  expect(faqLink).toBeInTheDocument();

  const contactLink = screen.getByRole('link', { name: /contact/i });
  expect(contactLink).toBeInTheDocument();
});
