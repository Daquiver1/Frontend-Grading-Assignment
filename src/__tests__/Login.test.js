import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../src/pages/Login';

test('renders Login component with form elements', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Check if the heading is present
  const heading = screen.getByText(/Missing Grade Report System/i);
  expect(heading).toBeInTheDocument();

  // Check if the form elements are present
  const studentIdInput = screen.getByLabelText(/Student ID/i);
  expect(studentIdInput).toBeInTheDocument();

  const pinInput = screen.getByLabelText(/PIN/i);
  expect(pinInput).toBeInTheDocument();

  const signInButton = screen.getByRole('button', { name: /Sign In/i });
  expect(signInButton).toBeInTheDocument();
});
