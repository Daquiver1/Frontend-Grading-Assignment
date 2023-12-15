// InstructorContact.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InstructorContact from './InstructorContact';

test('renders instructor contact page with instructor list and contact details', () => {
  render(<InstructorContact />);

  // Check if the component renders
  const pageTitle = screen.getByText('Instructor Contact');
  expect(pageTitle).toBeInTheDocument();

  // Check if the instructor list is rendered
  const instructorListTitle = screen.getByText('John Venn');
  expect(instructorListTitle).toBeInTheDocument();

  // Check if the contact details section is initially not rendered
  const contactDetailsTitle = screen.queryByText('Contact Details');
  expect(contactDetailsTitle).toBeNull();

  // Click on an instructor in the list
  fireEvent.click(screen.getByText('John Venn'));

  // Check if the contact details section is now rendered
  const updatedContactDetailsTitle = screen.getByText('Contact Details');
  expect(updatedContactDetailsTitle).toBeInTheDocument();

  // Check if the contact details are displayed correctly
  const instructorName = screen.getByText('Name: John Venn');
  expect(instructorName).toBeInTheDocument();

  const instructorEmail = screen.getByText('Email: jv@st.ug.edu.gh');
  expect(instructorEmail).toBeInTheDocument();

  const instructorPhone = screen.getByText('Phone: +233 20 192 9434');
  expect(instructorPhone).toBeInTheDocument();

  // Check if the "Send Simulated Email" button is initially disabled
  const sendEmailButton = screen.getByText('Send Simulated Email');
  expect(sendEmailButton).toBeDisabled();

  // Click on the "Send Simulated Email" button
  fireEvent.click(sendEmailButton);

  // Check if the alert for selecting an instructor is displayed
  const alertMessage = screen.getByText('Please select an instructor to send an email.');
  expect(alertMessage).toBeInTheDocument();

  // Click on an instructor in the list again
  fireEvent.click(screen.getByText('Sir Isaac Netwon'));

  // Check if the "Send Simulated Email" button is now enabled
  expect(sendEmailButton).not.toBeDisabled();

  // Click on the "Send Simulated Email" button again
  fireEvent.click(sendEmailButton);

  // Check if the alert for sending an email to the selected instructor is displayed
  const emailAlertMessage = screen.getByText('Email sent to Sir Isaac Netwon');
  expect(emailAlertMessage).toBeInTheDocument();
});
