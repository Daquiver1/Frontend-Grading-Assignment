import React from "react";
import "./HelpAndSupportPage.css";

const HelpAndSupportPage = () => {
  return (
    <div className="help-and-support-container">
      <h2 className="help-and-support-title">Help and Support</h2>
      <p className="help-and-support-description">
        If you need assistance, please contact our support team.
      </p>
      <div className="contact-options">
        <p>Email: support@gradezone.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="faq-section">
        <h3>Frequently Asked Questions (FAQ)</h3>
        <ul>
          <li>How can I reset my password?</li>
          <li>What should I do if I encounter an error?</li>
          <li>How to report a bug or issue?</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;