import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InstructorContact from './InstructorContact';

test('renders instructor contact page with instructor list', () => {
  render(<InstructorContact />);

  const instructorContactHeading = screen.getByText(/Instructor Contact/i);
  expect(instructorContactHeading).toBeInTheDocument();

  const instructorName = screen.getByText(/John Venn/i);
  expect(instructorName).toBeInTheDocument();
});

test('displays selected instructor contact details', () => {
  render(<InstructorContact />);

  fireEvent.click(screen.getByText(/John Venn/i));

  const instructorDetails = screen.getByText(/Name: John Venn/i);
  expect(instructorDetails).toBeInTheDocument();
});

test('sends simulated email to selected instructor', () => {
  render(<InstructorContact />);

  fireEvent.click(screen.getByText(/John Venn/i));

  fireEvent.click(screen.getByText(/Send Simulated Email/i));

  const alertMessage = screen.getByText(/Email sent to John Venn/i);
  expect(alertMessage).toBeInTheDocument();
});

test('shows an alert if no instructor is selected when sending email', () => {
  render(<InstructorContact />);

  fireEvent.click(screen.getByText(/Send Simulated Email/i));

  const alertMessage = screen.getByText(/Please select an instructor to send an email/i);
  expect(alertMessage).toBeInTheDocument();
});


