import React from 'react';
import { render, screen } from '@testing-library/react';
import MyFooter from './MyFooter';

describe('MyFooter Component', () => {
  test('renders footer with current year and social media icons', () => {
    render(<MyFooter />);
    
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`© ${currentYear} University of Ghana`));
    expect(footerText).toBeInTheDocument();

    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  });
});
