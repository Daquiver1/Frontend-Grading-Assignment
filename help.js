import React from 'react';
import '../styles/help.css';

const HelpAndSupportPage = () => {
  return (
    <div className="help-and-support-page">
      <h1>Help and Support</h1>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q: How do I report a missing grade?</h3>
          <p>A: You can report a missing grade by...</p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default help;
