import React, { useState } from 'react';
import "./faq.css";

const Faq = () => {
  const faqData = [
    {
      question: 'How can I report a missing grade?',
      answer: 'Navigate to the "Missing Grade" section and fill out the form with the required information.',
    },
    {
      question: 'Can I view grades from previous semesters?',
      answer: 'Yes, you can use the filter option on the Grade Report page to view grades from specific semesters.',
    },
    {
      question: 'How often are grades updated in the system?',
      answer: 'Grades are typically updated within one week of the completion of an assessment. However, this may vary by instructor.',
    },
    {
      question: 'What should I do if I see an error in my recorded grade?',
      answer: 'Please contact your instructor first. If the issue persists, use the "Instructor Contact" page to reach out to the academic administration.',
    },
    {
      question: 'Can I report missing grades from previous semesters?',
      answer: 'Yes, the Missing Grade Form allows you to report missing grades for any semester within the current academic year.',
    },
    // Add more FAQ items as needed
  ];

  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggleExpand = (index) => {
    setExpandedItems((prevExpandedItems) => {
      const isExpanded = prevExpandedItems.includes(index);
      if (isExpanded) {
        return prevExpandedItems.filter((item) => item !== index);
      } else {
        return [...prevExpandedItems, index];
      }
    });
  };

  return (
    <div className="help-and-support-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-section">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="expander-button"
              onClick={() => handleToggleExpand(index)}
            >
              {expandedItems.includes(index) ? '-' : '+'}
            </button>
            <h4>{item.question}</h4>
            {expandedItems.includes(index) && <p>{item.answer}</p>}
          </div>
        ))}
      </div>

      <div className="contact-form">
        <h2>Contact Technical Support</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Faq;


