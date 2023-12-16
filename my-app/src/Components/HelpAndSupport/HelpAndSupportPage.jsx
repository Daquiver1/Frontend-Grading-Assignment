// HelpAndSupportPage.js

import React from 'react';

const HelpAndSupportPage = () => {
  return (
    <div>
      <h2>Help and Support</h2>

      {/* FAQ Section */}
      <section>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>
            <strong>Q: How do I report a missing grade?</strong>
            <p>A: Navigate to the "Missing Grade Form" page and fill out the required information.</p>
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      {/* Contact Form */}
      <section>
        <h3>Contact Technical Support</h3>
        <form>
          <label>
            Your Name:
            <input type="text" />
          </label>
          <label>
            Your Email:
            <input type="email" />
          </label>
          <label>
            Message:
            <textarea rows="4"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
