// HelpSupportPage.js

import React from 'react';
import './style.css'; // Import CSS file for styling

const HelpSupportPage = () => {
  const faqData = [
    {
      question: 'How do I report missing grades?',
      answer: 'You can report missing grades on the Landing Page by filling out the form provided.',
    },
    // Add more FAQ items as needed
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (mock-up)
    console.log('Form submitted!');
    // You can add logic here to send form data to a backend or perform other actions
  };

  return (
    <div className="help-support-container">
      <h1>Help and Support</h1>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqData.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupportPage;
