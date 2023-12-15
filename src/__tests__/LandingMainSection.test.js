import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingMainSection from '../components/LandingSections/LandingMainSection';

test('renders LandingMainSection with correct content', () => {
  render(<LandingMainSection />);

  // Check if the main title is present
  const mainTitle = screen.getByText(/Missing Grade Report System/i);
  expect(mainTitle).toBeInTheDocument();

//   // Check if format small text is present
//   const formatSmallText = screen.getByText(/System function/i);
//   expect(formatSmallText).toBeInTheDocument();

//   // Check if format head text is present
//   const formatHeadText = screen.getByText(/Missing Grades Report System/i);
//   expect(formatHeadText).toBeInTheDocument();

});

// Add more tests as needed to cover other aspects of your component
