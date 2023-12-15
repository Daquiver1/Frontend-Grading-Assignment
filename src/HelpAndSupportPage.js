// src/HelpAndSupportPage.js
import React from 'react';
import Layout from './Layout';
import './HelpAndSupportPage.css';

class HelpAndSupportPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="help-support-container">
          <h2>Help and Support</h2>

          <div className="faq-section">
            <h3>Frequently Asked Questions (FAQ)</h3>
            <ul>
              <li>
                <strong>Q: How do I report a missing grade?</strong>
                <p>A: Go to the Missing Grade Form page, fill in the details, and submit the form.</p>
              </li>
              <li>
                <strong>Q: Can I edit a reported missing grade?</strong>
                <p>A: Currently, there is no option to edit reported missing grades. Please contact technical support for assistance.</p>
              </li>
              <li>
                <strong>Q: How can I reach my instructor if I have no idea about their contact details?</strong>
                <p>A: Visit the Instructor Contact page for a list of instructors and their contact details.</p>
              </li>
              {/* Add more FAQ items as needed */}
            </ul>
          </div>

          <div className="contact-form">
            <h3>Contact Technical Support</h3>
            <form>
              <label>
                Your Name:
                <input type="text" />
              </label>
              <br />
              <label>
                Your Email:
                <input type="email" />
              </label>
              <br />
              <label>
                Message:
                <textarea rows="4" />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HelpAndSupportPage;
