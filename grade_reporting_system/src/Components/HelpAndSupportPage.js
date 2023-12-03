import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/HelpAndSupportPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const HelpAndSupportPage = () => {
  return (
    <UniversalComponent>
      <div className="help-and-support-container">
        <div className="help-and-support-content">
          <h1>Help and Support</h1>
          <div className="faqs-section">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <ul>
              <li>Q: How do I reset my password?</li>
              <li>Q: Can I view my grades for past semesters?</li>
              {/* Add more FAQs based on common user queries */}
            </ul>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              For customer support or IT help desk, please contact us at{' '}
              <a href="mailto:support@example.com">support@example.com</a>.
            </p>
          </div>
          <div className="user-guides">
            <h2>User Guides and Tutorials</h2>
            <p>
              Explore our user guides and tutorials for using the platform in the{' '}
              <Link to="/documentation">Documentation</Link> section.
            </p>
          </div>
          <div className="troubleshooting-tips">
            <h2>Troubleshooting Tips</h2>
            <ul>
              <li>If you're experiencing login issues, try resetting your password.</li>
              <li>Clear your browser cache to resolve display issues.</li>
              {/* Add more troubleshooting tips based on common issues */}
            </ul>
          </div>
          <div className="feedback-form">
            <h2>Feedback Form</h2>
            <p>
              We value your feedback! Use the form below to submit suggestions or
              report bugs.
            </p>
            {/* Add a form component for users to submit feedback */}
          </div>
          <div className="relevant-links">
            <h2>Relevant Documentation and Resources</h2>
            <ul>
              <li>
                Explore our <Link to="/help-center">Help Center</Link> for additional resources.
              </li>
              {/* Add more relevant links based on your documentation */}
            </ul>
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default HelpAndSupportPage;
