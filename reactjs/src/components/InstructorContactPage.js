// InstructorContactPage.js

import React, { useState } from 'react';

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState(null);

  const instructors = [
    { id: 1, name: 'Instructor A', email: 'instructorA@example.com' },
    { id: 2, name: 'Instructor B', email: 'instructorB@example.com' },
    // Add more instructors as needed
  ];

  const handleSendEmail = () => {
    // Simulate email sending logic (replace with actual email sending)
    if (selectedInstructor && message) {
      // Successful email submission
      setEmailStatus('success');
    } else {
      // Incomplete email submission
      setEmailStatus('error');
    }
  };

  return (
    <div className="instructor-contact-page">
      <h2>Instructor Contact</h2>

      <label>
        Select Instructor:
        <select
          value={selectedInstructor}
          onChange={(e) => setSelectedInstructor(e.target.value)}
        >
          <option value="" disabled>Select an instructor</option>
          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.email}>
              {instructor.name}
            </option>
          ))}
        </select>
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

      <button type="button" onClick={handleSendEmail}>
        Send Email
      </button>

      {/* Display email status */}
      {emailStatus === 'success' && (
        <p className="email-success">Email sent successfully!</p>
      )}
      {emailStatus === 'error' && (
        <p className="email-error">Please select an instructor and provide a message before sending.</p>
      )}
    </div>
  );
};

export default InstructorContactPage;
