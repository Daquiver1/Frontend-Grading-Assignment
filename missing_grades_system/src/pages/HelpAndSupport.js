// src/pages/HelpAndSupport.js
import React from 'react';
import '../styles/helpandsupport.css';
import Navbar from '../components/Navbar';

function HelpAndSupport() {
  return (
    <div className="help-and-support-page">
      <Navbar></Navbar>  
      <h1>Help and Support</h1>

      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <p>1. How do I report a missing grade?</p>
        <p>2. Can I view my grades from previous semesters?</p>
        <p>3. How do I contact my instructor?</p>
        {/* Add more FAQs as needed */}
      </div>

      <div className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <p>If you have further questions, feel free to reach out to our technical support team:</p>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HelpAndSupport;
