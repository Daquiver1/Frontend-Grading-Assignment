// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard with current grades, alerts, and star students', () => {
  // Check if the component renders
  const pageTitle = screen.getByText('Dashboard');
  expect(pageTitle).toBeInTheDocument();

  // Check if current grades section is rendered
  const currentGradesTitle = screen.getByText('Current Grades Overview');
  expect(currentGradesTitle).toBeInTheDocument();

  // Check if at least one grade row is rendered
  const sampleCourse = 'DCIT 102';
  const gradeRow = screen.getByText(sampleCourse, { selector: 'tr' });
  expect(gradeRow).toBeInTheDocument();

  // Check if alerts section is rendered
  const alertsTitle = screen.getByText('Alerts');
  expect(alertsTitle).toBeInTheDocument();

  // Check if missing grades alert is rendered
  const missingGradesAlert = screen.getByRole('alert');
  expect(missingGradesAlert).toBeInTheDocument();

  // Check if star students section is rendered
  const starStudentsTitle = screen.getByText('Star Students');
  expect(starStudentsTitle).toBeInTheDocument();

  // Check if at least one star student row is rendered
  const sampleStudentName = 'Young Seldon';
  const studentRow = screen.getByText(sampleStudentName, { selector: 'tr' });
  expect(studentRow).toBeInTheDocument();

  // Check if images of star students are rendered
  const sampleStudentImageAlt = 'Young Seldon';
  const studentImage = screen.getByAltText(sampleStudentImageAlt);
  expect(studentImage).toBeInTheDocument();
});
