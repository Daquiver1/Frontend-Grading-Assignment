import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GradeReport from './GradeReport';

test('renders grade report with default filters', () => {
  render(<GradeReport />);

  const gradeReportHeading = screen.getByText(/Grade Report/i);
  expect(gradeReportHeading).toBeInTheDocument();


  const gradeRow = screen.getByText(/DCIT 101/i);
  expect(gradeRow).toBeInTheDocument();


  const yearFilter = screen.getByDisplayValue(/All/i);
  expect(yearFilter).toBeInTheDocument();


  const semesterFilter = screen.getByDisplayValue(/All/i);
  expect(semesterFilter).toBeInTheDocument();
});

test('filters grade report by year', () => {
  render(<GradeReport />);

  fireEvent.change(screen.getByLabelText(/Filter by Year/i), {
    target: { value: '2022' },
  });

  const yearFilter = screen.getByDisplayValue(/2022/i);
  expect(yearFilter).toBeInTheDocument();

  const gradeRow = screen.getByText(/DCIT 101/i);
  expect(gradeRow).toBeInTheDocument();
});

test('filters grade report by semester', () => {
  render(<GradeReport />);

  fireEvent.change(screen.getByLabelText(/Filter by Semester/i), {
    target: { value: 'First 2022' },
  });

  const semesterFilter = screen.getByDisplayValue(/First 2022/i);
  expect(semesterFilter).toBeInTheDocument();

  const gradeRow = screen.getByText(/MATH 121/i);
  expect(gradeRow).toBeInTheDocument();
});


