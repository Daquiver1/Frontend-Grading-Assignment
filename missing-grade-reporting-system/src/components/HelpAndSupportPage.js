import React, { useState } from 'react';
import './HelpAndSupportPage.css';

function Help() {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div className="help-container">
      <h1>Help and Support</h1>
      <p>How can we help you today?</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="faq-container">
        <h2 onClick={toggleFAQ}>Frequently Asked Questions</h2>
        {showFAQ && (
          <div className="faq-content">
            <h3>How do I reset my password?</h3>
            <p>
              You can reset your password by clicking on the "Forgot Password"
              link on the login page.
            </p>
            <h3>How do I contact customer support?</h3>
            <p>
              You can contact our customer support team by sending an email to
              support@help.com or by calling our toll-free number at
              1-800-123-4567.
            </p>
            <h3>What are your business hours?</h3>
            <p>
              Our business hours are from 9am to 5pm EST, Monday through Friday.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;