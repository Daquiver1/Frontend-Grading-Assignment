import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders current grades overview', () => {
  render(<Dashboard />);

  const currentGradesHeading = screen.getByText(/Current Grades Overview/i);
  expect(currentGradesHeading).toBeInTheDocument();

  const gradeRow = screen.getByText(/DCIT 102/i);
  expect(gradeRow).toBeInTheDocument();
});

test('renders alerts', () => {
  render(<Dashboard />);

  const alertsHeading = screen.getByText(/Alerts/i);
  expect(alertsHeading).toBeInTheDocument();

  const successAlert = screen.getByText(/No missing grades. Good job!/i);
  expect(successAlert).toBeInTheDocument();
});

test('renders star students', () => {
  render(<Dashboard />);

  
  const starStudentsHeading = screen.getByText(/Star Students/i);
  expect(starStudentsHeading).toBeInTheDocument();

  
  const starStudentRow = screen.getByText(/Young Seldon/i);
  expect(starStudentRow).toBeInTheDocument();
});


