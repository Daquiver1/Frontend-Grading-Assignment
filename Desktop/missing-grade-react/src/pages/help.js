// FAQSection.js

import React from 'react';

const FAQSection = () => {
  const faqData = [
    { question: 'How can I check my grades?', answer: 'You can check your grades by logging in to your account and navigating to the Grade Report section.' },
    { question: 'What do I do if I have missing grades?', answer: 'If you have missing grades, please fill out the Missing Grade Form to report the issue to your instructors.' },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <h2>Frequently Asked Questions (FAQ)</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
