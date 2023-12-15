import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import MissingGradeForm from '../../src/pages/admin/MissingGradeForm';

test('renders MissingGradeForm component with form elements', () => {
  render(<MissingGradeForm />);

  // Check if the form title is present
  const formTitle = screen.getByText(/Fill In Your Information/i);
  expect(formTitle).toBeInTheDocument();

  // Check if form input fields are present
  const firstNameInput = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameInput).toBeInTheDocument();

  const lastNameInput = screen.getByPlaceholderText(/Last Name/i);
  expect(lastNameInput).toBeInTheDocument();

  const studentMailInput = screen.getByPlaceholderText(/Student Mail/i);
  expect(studentMailInput).toBeInTheDocument();

  const courseNameInput = screen.getByPlaceholderText(/Course Name/i);
  expect(courseNameInput).toBeInTheDocument();

  const instructorNameInput = screen.getByPlaceholderText(/Instructor's Name/i);
  expect(instructorNameInput).toBeInTheDocument();

  const expectedGradeInput = screen.getByPlaceholderText(/Expected Grade/i);
  expect(expectedGradeInput).toBeInTheDocument();

  const explanationFieldTextarea = screen.getByPlaceholderText(/Explanation Field/i);
  expect(explanationFieldTextarea).toBeInTheDocument();

  // Check if the submit button is present
  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
