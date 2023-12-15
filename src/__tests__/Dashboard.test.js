import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/admin/Dashboard';

test('renders Dashboard component with statistics cards', () => {
  render(<Dashboard />);

  // Check if the Number of Courses card is present
  const coursesCard = screen.getByText(/Courses/i);
  expect(coursesCard).toBeInTheDocument();
});

test('renders Dashboard component with course overview table', () => {
  render(<Dashboard />);

  // Check if the Course Overview table is present
  const courseOverviewTable = screen.getByText(/Course Overview/i);
  expect(courseOverviewTable).toBeInTheDocument();

  // Check if the sample course data is present
  const courseCodeCell = screen.getByText(/CBAS210/i);
  expect(courseCodeCell).toBeInTheDocument();

  const courseTitleCell = screen.getByText(/ACADEMIC WRITING II/i);
  expect(courseTitleCell).toBeInTheDocument();

});

test('renders Dashboard component with missing grade alert', () => {
  render(<Dashboard />);

  // Check if the Missing Grade Alert card is present
  const missingGradeAlertCard = screen.getByText(/Missing Grade Alert/i);
  expect(missingGradeAlertCard).toBeInTheDocument();

  // Check if the "No Missing Grades" message is present
  const noMissingGradesMessage = screen.getByText(/No Missing Grades/i);
  expect(noMissingGradesMessage).toBeInTheDocument();
});
