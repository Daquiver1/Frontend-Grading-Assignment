// GradeReport.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GradeReport from './GradeReport';

test('renders grade report with filters and GPA calculation', () => {
  render(<GradeReport />);

  // Check if the component renders
  const pageTitle = screen.getByText('Grade Report');
  expect(pageTitle).toBeInTheDocument();

  // Check if filter by year dropdown is rendered
  const yearFilterLabel = screen.getByLabelText('Filter by Year:');
  expect(yearFilterLabel).toBeInTheDocument();

  // Check if filter by semester dropdown is rendered
  const semesterFilterLabel = screen.getByLabelText('Filter by Semester:');
  expect(semesterFilterLabel).toBeInTheDocument();

  // Check if GPA is initially displayed as N/A
  const initialGPA = screen.getByText('GPA: N/A');
  expect(initialGPA).toBeInTheDocument();

  // Change the filter by year dropdown
  fireEvent.change(screen.getByLabelText('Filter by Year:'), { target: { value: '2022' } });

  // Change the filter by semester dropdown
  fireEvent.change(screen.getByLabelText('Filter by Semester:'), { target: { value: 'First 2022' } });

  // Check if the filtered grades are displayed
  const filteredGrade = screen.getByText('DCIT 101');
  expect(filteredGrade).toBeInTheDocument();

  // Check if GPA is updated after filtering
  const updatedGPA = screen.getByText(/GPA: \d\.\d{2}/);
  expect(updatedGPA).toBeInTheDocument();
});
