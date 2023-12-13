

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpAndSupportPage.css';

const HelpAndSupportPage = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleContactSubmit = () => {

    if (!contactName || !contactEmail || !contactMessage) {
      setFormError('Please fill out all fields.');
      return;
    }

    
    console.log('Contact form submitted:', {
      contactName,
      contactEmail,
      contactMessage,
    });

  
    setContactName('');
    setContactEmail('');
    setContactMessage('');
    setFormError('');
    setSuccessMessage('Your message has been submitted successfully!');
  };

  return (
    <div className="help-and-support-page">
      <div className="help-and-support-container">
        <h2>Help and Support</h2>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
        
          <ul>
            <li>Q: How can I report a missing grade?</li>
            <li>A: You can use the "Missing Grade Form" page to report a missing grade.</li>
          
          </ul>
        </div>

        <div className="contact-form">
          <h3>Contact Technical Support</h3>
          <form>
            <div className="form-group">
              <label htmlFor="contactName">Your Name</label>
              <input
                type="text"
                id="contactName"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail">Your Email</label>
              <input
                type="email"
                id="contactEmail"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactMessage">Your Message</label>
              <textarea
                id="contactMessage"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
            </div>

            {formError && <div className="form-error">{formError}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <div className="form-group">
              <button type="button" onClick={handleContactSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="navigation-links">
          <Link to="/dashboard">Go to Dashboard</Link>
          <Link to="/grade-report">Grade Report</Link>
          <Link to="/missing-grade-form">Missing Grade Form</Link>
      
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
