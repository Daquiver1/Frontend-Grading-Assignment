import React from 'react';
import '../main.css';
import { Link } from 'react-router-dom';

const HelpAndSupportPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Your message has been sent! (This is a mock-up)');
  };

  return (
    <div className="help-support-page">
      <h2>Help and Support</h2>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          <h4>How do I report a missing grade?</h4>
          <p>To report a missing grade, navigate to the Missing Grade Form and submit the necessary details about the course and expected grade.</p>
        </div>
        <div className="faq">
          <h4>What should I do if I notice a discrepancy in a recorded grade?</h4>
          <p>If you find a discrepancy, please report it immediately through the Missing Grade Form and select the option for grade discrepancy.</p>
        </div>
        <div className="faq">
          <h4>How long does it take to process a missing grade report?</h4>
          <p>Missing grade reports are typically processed within 5-7 business days. You will receive a notification once it's updated.</p>
        </div>
        <div className="faq">
          <h4>Can I update a report after submitting it?</h4>
          <p>Once submitted, a report cannot be updated. If additional information is needed, please submit a new report.</p>
        </div>
        <div className="faq">
          <h4>Who should I contact for technical issues with the website?</h4>
          <p>For technical issues, please use the contact form on this page to reach out to our technical support team.</p>
        </div>
        <div className="faq">
          <h4>Is there a deadline for reporting missing grades?</h4>
          <p>Yes, please report any missing grades within two weeks of the expected posting date for timely resolution.</p>
        </div>
        
      </div>

      <div className="contact-form-section">
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
