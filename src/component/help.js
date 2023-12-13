import React from 'react';
import './help.css'; // Import your CSS file

const HelpAndSupport = () => {
  return (
    <div className="help-support-container">
      <div className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Question 1</h3>
      
        </div>
        <div className="faq-item">
          <h3>Question 2</h3>
         
        </div>
        {/* Add more FAQ items */}
      </div>

      <div className="section">
        <h2>Troubleshooting Guides</h2>
        <div className="guide-item">
          <h3>Issue 1</h3>
         
        </div>
        <div className="guide-item">
          <h3>Issue 2</h3>
         
        </div>
        {/* Add more troubleshooting guides */}
      </div>

      <div className="section">
        <h2>Contact Information</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +1234567890</p>
        {/* Add more contact details */}
      </div>

      <div className="section">
        <h2>Feedback Form</h2>
        <form>
          <label htmlFor="feedback">Share your feedback:</label>
          <textarea id="feedback" rows="4" cols="50"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

     
      <div className="section">
        <h2>Connect with Us</h2>
        <div className="social-links">
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
          {/* Add more social media links */}
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
