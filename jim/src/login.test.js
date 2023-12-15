// Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form and handles login with validation', () => {
  render(<Login />);

  // Check if the component renders
  const pageTitle = screen.getByText('Student Login');
  expect(pageTitle).toBeInTheDocument();

  // Check if input fields are rendered
  const studentIdInput = screen.getByLabelText('Student ID');
  const pinInput = screen.getByLabelText('PIN');
  expect(studentIdInput).toBeInTheDocument();
  expect(pinInput).toBeInTheDocument();

  // Check if login button is rendered
  const loginButton = screen.getByText('Login');
  expect(loginButton).toBeInTheDocument();

  // Attempt login with invalid student ID
  fireEvent.change(studentIdInput, { target: { value: '123' } });
  fireEvent.change(pinInput, { target: { value: '12345' } });
  fireEvent.click(loginButton);

  // Check if error message is displayed for invalid student ID
  const errorMessage = screen.getByText('Student ID must be 8 numbers');
  expect(errorMessage).toBeInTheDocument();

  // Attempt login with invalid PIN
  fireEvent.change(studentIdInput, { target: { value: '12345678' } });
  fireEvent.change(pinInput, { target: { value: '1234' } });
  fireEvent.click(loginButton);

  // Check if error message is displayed for invalid PIN
  const pinErrorMessage = screen.getByText('PIN must be 5 numbers');
  expect(pinErrorMessage).toBeInTheDocument();

  // Attempt login with valid credentials
  fireEvent.change(studentIdInput, { target: { value: '12345678' } });
  fireEvent.change(pinInput, { target: { value: '12345' } });
  fireEvent.click(loginButton);

  // Check if error messages are cleared after successful login
  expect(errorMessage).not.toBeInTheDocument();
  expect(pinErrorMessage).not.toBeInTheDocument();
});
