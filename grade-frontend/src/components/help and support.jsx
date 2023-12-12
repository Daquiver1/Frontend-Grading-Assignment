import React from 'react';
import { Accordion } from 'react-bootstrap';

function FAQs() {
  const faqData = [
    {
      question: 'How can I view my grade report?',
      answer: 'You can view your grade report by logging into your account and navigating to the "Grade Report" section.',
    },
    {
      question: 'Can I see my grades for a specific semester?',
      answer: 'Yes, you can filter your grades by selecting a specific semester in the "Grade Report" section.',
    },
    {
      question: 'What do I do if I have missing grades?',
      answer: 'If you have missing grades, please contact your instructor or academic advisor for assistance.',
    },
    {
      question: 'How often are grade reports updated?',
      answer: 'Grade reports are typically updated at the end of each semester. However, specific update schedules may vary, so check regularly for the latest information.',
    },
    {
      question: 'Is there a way to track my overall academic progress?',
      answer: 'Yes, you can track your overall academic progress by checking the "Dashboard" section, which provides an overview of your grades and overall progress.',
    },
    {
      question: 'Can I print or download my grade report?',
      answer: 'Yes, you can print or download your grade report by accessing the "Print" or "Download" option in the "Grade Report" section.',
    },
    {
      question: 'How can I change my password?',
      answer: 'You can change your password by navigating to the "Account Settings" section and selecting the "Change Password" option.',
    },
    {
      question: 'What should I do if I encounter technical issues?',
      answer: 'If you encounter technical issues, please reach out to our technical support team through the "Contact Us" page for assistance.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <Accordion defaultActiveKey="0">
      {faqData.map((faq, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FAQs;
