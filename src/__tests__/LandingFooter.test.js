import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingFooter from '../layout/footer/LandingFooter';

test('renders copyright text', () => {
  render(<LandingFooter />);

  // Check if copyright text is present
  const copyrightText = screen.getByText(/© \d{4} Royalty. All Rights Reserved/i);
  expect(copyrightText).toBeInTheDocument();
});
