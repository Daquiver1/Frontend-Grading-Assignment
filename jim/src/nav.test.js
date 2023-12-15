// MyNavbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './MyNavbar';

test('renders navbar with navigation links', () => {
  render(
    <Router>
      <MyNavbar />
    </Router>
  );

  // Check if the component renders
  const logoAltText = screen.getByAltText('Logo');
  expect(logoAltText).toBeInTheDocument();

  // Check if the navigation links are rendered
  const homeLink = screen.getByText('Home');
  const loginLink = screen.getByText('Login');
  const dashboardLink = screen.getByText('Dashboard');
  const gradeReportLink = screen.getByText('Grade Report');
  const missingGradeFormLink = screen.getByText('Missing Grade Form');
  const instructorContactLink = screen.getByText('Instructor Contact');
  const helpAndSupportLink = screen.getByText('Help and Support');

  expect(homeLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
  expect(dashboardLink).toBeInTheDocument();
  expect(gradeReportLink).toBeInTheDocument();
  expect(missingGradeFormLink).toBeInTheDocument();
  expect(instructorContactLink).toBeInTheDocument();
  expect(helpAndSupportLink).toBeInTheDocument();

  // Check if the navigation links have correct href attributes
  expect(homeLink.getAttribute('href')).toBe('/');
  expect(loginLink.getAttribute('href')).toBe('/Login');
  expect(dashboardLink.getAttribute('href')).toBe('/Dashboard');
  expect(gradeReportLink.getAttribute('href')).toBe('/GradeReport');
  expect(missingGradeFormLink.getAttribute('href')).toBe('/MissingGradeForm');
  expect(instructorContactLink.getAttribute('href')).toBe('/InstructorContact');
  expect(helpAndSupportLink.getAttribute('href')).toBe('/HelpAndSupport');
});
