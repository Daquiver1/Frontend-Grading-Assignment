import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FAQ({ index, question, answer }) {
  return (
    <Accordion.Item key={index} eventKey={index.toString()}>
      <Accordion.Header>{question}</Accordion.Header>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  );
}

function FAQs() {
  const faqs = [
    {
      question: 'How do I access my grade report?',
      answer: 'You can access your grade report by logging in to your account and navigating to the grade report section.',
    },
    {
      question: 'What if I forgot my password?',
      answer: 'If you forgot your password, you can use the "Forgot Password" link on the login page to reset it.',
    },
    {
      question: 'How are grades calculated?',
      answer: 'Grades are calculated based on your performance in assignments, exams, and other evaluation criteria set by your instructors.',
    },
    {
      question: 'Can I appeal my grades?',
      answer: 'Yes, you can appeal your grades. Please contact the academic services department for more information on the appeals process.',
    },
    {
      question: 'When are final grades released?',
      answer: 'Final grades are typically released at the end of each semester. You will be notified via email when they are available.',
    },
    {
      question: 'Is there a mobile app for the grade report system?',
      answer: 'Yes, we have a mobile app available for both iOS and Android devices. You can download it from the respective app stores.',
    },
    {
      question: 'How do I update my contact information?',
      answer: 'You can update your contact information in the account settings section. Make sure to keep your information up to date for important notifications.',
    },
    {
      question: 'What if I encounter technical issues?',
      answer: 'If you experience technical issues, please reach out to our support team at support@example.com or call our helpline.',
    },
    {
      question: 'Can I print my grade report?',
      answer: 'Yes, you can print your grade report. There is a print option available in the grade report section.',
    },
    {
      question: 'How often are grades updated?',
      answer: 'Grades are regularly updated as instructors input new grades. Check the system frequently for the latest updates.',
    },
  ];

  return (
    <div>
      <h1>Grade Report System FAQs</h1>
      <p>Here are some frequently asked questions:</p>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <FAQ key={index} index={index} {...faq} />
        ))}
      </Accordion>
    </div>
  );
}

export default FAQs;
