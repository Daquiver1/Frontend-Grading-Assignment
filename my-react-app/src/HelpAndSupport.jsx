// HelpAndSupport.jsx
import React from 'react';
import './HelpAndSupport.css';
import { Link } from 'react-router-dom';
function HelpAndSupport() {
  return (

    <div className="help-support-container">
      <div className="dropdown">
        <button className="dropdown-button">Menu</button>
        <div className="dropdown-content">
          <Link to="/" className="dropdown-item">Landing</Link>
          <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
          <Link to="/grade-report" className="dropdown-item">Grade Report</Link>
          <Link to="/missing-grade-form" className="dropdown-item">Missing Grade Form</Link>
          <Link to="/instructor-contact" className="dropdown-item">Instructor Contact</Link>
          <Link to="/help-support" className="dropdown-item">Help and Support</Link>
        </div>
      </div>

    <div className="help-support-container">
      <h1 className="help-support-title">Help and Support Page</h1>

      <div className="faq-section">
        <h2 className="section-title">FAQ - Grade Reporting</h2>
        <div className="faq-item">
          <h3 className="faq-question">How do I report missing grades?</h3>
          <p className="faq-answer">
            To report missing grades, navigate to the Missing Grade Form and fill in the required details.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">What if my grade is incorrect?</h3>
          <p className="faq-answer">
            If you find an incorrect grade, contact your instructor immediately to rectify the issue.
          </p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>

      <div className="contact-form">
        <h2 className="section-title">Contact Technical Support</h2>
        <form className="support-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default HelpAndSupport;
