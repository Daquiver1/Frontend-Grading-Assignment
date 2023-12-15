import React from 'react';
import './HelpAndSupport.css'; // Import the corresponding CSS file

function HelpAndSupport() {
  return (
    <div className="help-and-support container">
      <h2>Help and Support</h2>
      {/* FAQ section regarding grade reporting */}
      <h3>Frequently Asked Questions</h3>
      <ul>
        <li>How do I report a missing grade?</li>
        <li>Can I view grades from previous semesters?</li>
        {/* ... */}
      </ul>
      {/* Contact form for technical support */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />

        <label htmlFor="supportMessage">Message:</label>
        <textarea id="supportMessage"></textarea>

        <button type="submit">Submit</button>
      </form>
      {/* Confirmation message */}
      <p>Your support request has been submitted.</p>
    </div>
  );
}

export default HelpAndSupport;
