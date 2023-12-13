// HelpAndSupport.jsx
import React from 'react';
import './helpAndSupport.css';

const HelpAndSupport = () => {
  return (
    <div className="help-and-support-container">
      <h1>Help and Support</h1>

      <section>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
        
            How can I view my course grades and academic performance on the platform?

            To access your course grades and academic performance, log in to the system using your university credentials.
            Once logged in, navigate to the dashboard or grade report section to view detailed information about your grades, GPA,
            and any additional feedback from instructors. The system provides a comprehensive overview of your academic progress.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any further questions or need assistance, feel free to reach out to our support team.
        </p>
        <p>Email: support@example.com</p>
      </section>

      <section>
        <h2>Live Chat</h2>
        <p>
          Our support team is available for live chat during business hours. Click the button below to start a chat.
        </p>
        {/* Add your live chat component or integration here */}
        <button>Start Live Chat</button>
      </section>
    </div>
  );
};

export default HelpAndSupport;
