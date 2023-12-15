import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is resultt?',
      answer: 'its a website to track and check academic results',
    },
    {
      question: 'How do i login?',
      answer: 'open the website.click on the login button .enter your credentials.',
    },
    {
      question: 'how to check my grade?',
      answer: 'login in with for student mail .',
    },
    // Add more FAQ data here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ