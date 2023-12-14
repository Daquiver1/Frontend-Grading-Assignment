import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);

  // Check if the welcome message is present in the rendered component
  const welcomeMessage = screen.getByText(/Welcome to the Missing Grade Reporting System/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders key features', () => {
  render(<App />);

  // Check if key features are present in the rendered component
  const keyFeaturesHeading = screen.getByText(/Key Features/i);
  expect(keyFeaturesHeading).toBeInTheDocument();

  const keyFeatureListItems = screen.getAllByRole('listitem');
  expect(keyFeatureListItems.length).toBeGreaterThan(0);
});

// Add more tests based on your components and their functionalities
