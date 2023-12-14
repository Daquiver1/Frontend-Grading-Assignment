import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelpAndSupport from './HelpAndSupport';

test('renders help and support page with FAQs', () => {
  render(<HelpAndSupport />);

  const helpAndSupportHeading = screen.getByText(/Help and Support/i);
  expect(helpAndSupportHeading).toBeInTheDocument();

  const faqQuestion = screen.getByText(/What is the missing grade process?/i);
  expect(faqQuestion).toBeInTheDocument();
});

test('expands and collapses FAQ accordion', () => {
  render(<HelpAndSupport />);

  const collapsedAccordion = screen.getByTestId('faqCollapse0');
  expect(collapsedAccordion).toHaveClass('collapse');

  fireEvent.click(screen.getByText(/What is the missing grade process?/i));

  const expandedAccordion = screen.getByTestId('faqCollapse0');
  expect(expandedAccordion).not.toHaveClass('collapse');

  fireEvent.click(screen.getByText(/What is the missing grade process?/i));

  expect(expandedAccordion).toHaveClass('collapse');
});

test('submits contact form', () => {
  render(<HelpAndSupport />);

  fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Help needed!' } });

  fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

  const alertMessage = screen.getByText(/Form submitted. We will get in touch with you shortly./i);
  expect(alertMessage).toBeInTheDocument();
});

