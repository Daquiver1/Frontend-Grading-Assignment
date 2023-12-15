import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

test('renders Footer with correct links and copyright text', () => {
  render(<Footer />);

  // Check if the links are present
  const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
  const gradeReportLink = screen.getByRole('link', { name: 'Grade Report' });
  const missingGradeFormLink = screen.getByRole('link', { name: 'Missing Grade Form' });
  const instructorContactsLink = screen.getByRole('link', { name: 'Instructor Contacts' });

  expect(dashboardLink).toBeInTheDocument();
  expect(gradeReportLink).toBeInTheDocument();
  expect(missingGradeFormLink).toBeInTheDocument();
  expect(instructorContactsLink).toBeInTheDocument();

  // Check if the links have the correct href attribute
  expect(dashboardLink).toHaveAttribute('href', '/admin/dashboard');
  expect(gradeReportLink).toHaveAttribute('href', '/admin/grade-report');
  expect(missingGradeFormLink).toHaveAttribute('href', '/admin/missing-grade-form');
  expect(instructorContactsLink).toHaveAttribute('href', '/admin/instructor-contacts');

  // Check if the copyright text is present
  const copyrightText = screen.getByText(/Royalty/i);
  expect(copyrightText).toBeInTheDocument();

  // Check if the copyright text is present
  const copyrightText1 = screen.getByText(/All Rights Reserved/i);
  expect(copyrightText1).toBeInTheDocument();

  // Check if the copyright text contains a link to "/"
  const royaltyLink = screen.getByRole('link', { name: 'Royalty' });
  expect(royaltyLink).toBeInTheDocument();
  expect(royaltyLink).toHaveAttribute('href', '/');
});
