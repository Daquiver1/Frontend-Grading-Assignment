// MyFooter.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyFooter from './MyFooter';

test('renders footer with copyright text and social media icons', () => {
  render(<MyFooter />);

  // Check if the component renders
  const copyrightText = screen.getByText(/© \d{4} University of Ghana/i);
  expect(copyrightText).toBeInTheDocument();

  // Check if social media icons are rendered
  const facebookIcon = screen.getByTestId('facebook-icon');
  const twitterIcon = screen.getByTestId('twitter-icon');
  const linkedInIcon = screen.getByTestId('linkedin-icon');

  expect(facebookIcon).toBeInTheDocument();
  expect(twitterIcon).toBeInTheDocument();
  expect(linkedInIcon).toBeInTheDocument();
});
