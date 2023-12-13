// HelpAndSupportPage.js

import React, { useState } from 'react';

const HelpAndSupportPage = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleContactSubmit = () => {
    // Simulate contact form submission logic (replace with actual submission)
    if (contactName && contactEmail && message) {
      // Successful contact form submission
      setSubmissionStatus('success');
    } else {
      // Incomplete contact form submission
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="help-and-support-page">
      <h2>Help and Support</h2>

      <section>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>Q: How do I report a missing grade?</li>
          <li>A: Navigate to the "Report Missing Grade" page and fill out the form.</li>
          {/* Add more FAQ items */}
        </ul>
      </section>

      <section>
        <h3>Contact Technical Support</h3>

        <label>
          Your Name:
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Your Email:
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={handleContactSubmit}>
          Submit
        </button>

        {/* Display submission status */}
        {submissionStatus === 'success' && (
          <p className="submission-success">Your message has been submitted successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="submission-error">Please fill out all fields before submitting.</p>
        )}
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
