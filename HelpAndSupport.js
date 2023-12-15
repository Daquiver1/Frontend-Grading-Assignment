import React, { useState } from 'react';
import './HelpAndSupportPage.css';
import '../components/Sidebar.css';

const faqData = [
  {
    question: 'How do I report a missing grade?',
    answer: 'You can report a missing grade on the Missing Grade Form page.'
  },
  {
    question: 'Can I change my reported grade?',
    answer: 'No, once a grade is reported, it cannot be changed. Please report accurately.'
  },
  // Add more FAQ items as needed
];

const HelpAndSupportPage = () => {
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the contact form submission (e.g., show a confirmation message)
    alert('Contact form submitted!');
    setContactMessage('');
  };

  return (
    <div className="help-and-support-page">
      <h2>Help and Support</h2>

      <div className="faq-section">
        <h3>Frequently Asked Questions:</h3>
        <ul>
          {faqData.map((faqItem, index) => (
            <li key={index}>
              <strong>{faqItem.question}</strong>
              <p>{faqItem.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form">
        <h3>Contact Technical Support:</h3>
        <form onSubmit={handleContactSubmit}>
          <label>
            Message:
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;