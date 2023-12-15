// HelpAndSupport.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelpAndSupport from './HelpAndSupport';

test('renders help and support page with FAQs and contact form', () => {
  // Render the component
  render(<HelpAndSupport />);

  // Check if the component renders
  const pageTitle = screen.getByText('Help and Support');
  expect(pageTitle).toBeInTheDocument();

  // Check if FAQs section is rendered
  const faqsTitle = screen.getByText('Frequently Asked Questions');
  expect(faqsTitle).toBeInTheDocument();

  // Check if at least one FAQ item is rendered
  const sampleQuestion = 'What is the missing grade process?';
  const faqQuestion = screen.getByText(sampleQuestion);
  expect(faqQuestion).toBeInTheDocument();

  // Check if the contact form section is rendered
  const contactFormTitle = screen.getByText('Contact Technical Support');
  expect(contactFormTitle).toBeInTheDocument();

  // Check if form inputs are rendered
  const nameInput = screen.getByLabelText('Your Name:');
  expect(nameInput).toBeInTheDocument();

  const emailInput = screen.getByLabelText('Your Email:');
  expect(emailInput).toBeInTheDocument();

  const messageTextarea = screen.getByLabelText('Message:');
  expect(messageTextarea).toBeInTheDocument();

  // Debug information
  console.log('Form Inputs:', { nameInput, emailInput, messageTextarea });

  // Simulate form submission
  fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

  // Debug information
  console.log('Form Submission Alert:', screen.queryByText('Form submitted. We will get in touch with you shortly.'));

  // Check if the form submission alert is displayed
  const formSubmissionAlert = screen.getByText('Form submitted. We will get in touch with you shortly.');
  expect(formSubmissionAlert).toBeInTheDocument();
});
