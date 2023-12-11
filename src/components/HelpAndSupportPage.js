

import React, { useState } from 'react';
import './HelpAndSupportPage.css'; 

const HelpandSupportPage = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();


    if (contactName && contactEmail && contactMessage) {
      setConfirmationMessage('Your message has been submitted. We will get back to you shortly.');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    } else {
      setConfirmationMessage('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className="help-and-support-container">
      <h2>Help and Support Page</h2>

      <div className="faq-section">
        <h3>FAQs Regarding Grade Reporting:</h3>
        <div className="faq-item">
          <p>Q: How can I report a missing grade?</p>
          <p>A: You can report a missing grade using the Missing Grade Form in the system.</p>
        </div>
        <div className="faq-item">
          <p>Q: Can I view my grades for previous semesters?</p>
          <p>A: Yes, you can filter your grades by semester on the Grade Report Page.</p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>

      <div className="contact-form">
        <h3>Contact Technical Support:</h3>
        <form onSubmit={handleContactSubmit}>
          <label htmlFor="contactName">Your Name:</label>
          <input
            type="text"
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />

          <label htmlFor="contactEmail">Your Email:</label>
          <input
            type="email"
            id="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />

          <label htmlFor="contactMessage">Your Message:</label>
          <textarea
            id="contactMessage"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>

        {confirmationMessage && (
          <p className="confirmation-message">{confirmationMessage}</p>
        )}
      </div>
    </div>
  );
};

export default HelpandSupportPage;
