// InstructorContact.js
import React, { useState } from 'react';

const InstructorContact = () => {
  const [instructors] = useState([
    { id: 1, name: 'Dr. Smith', email: 'dr.smith@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Prof. Johnson', email: 'prof.johnson@example.com', phone: '987-654-3210' },
    // Add more instructors as needed
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent('');
    setEmailSent(false);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    // Simulate sending an email (replace with actual email sending logic)
    // For demonstration purposes, just show a confirmation message
    setEmailSent(true);
  };

  return (
    <div>
      <h1>Instructor Contact</h1>

      <section className="instructor-list-section">
        <h2>Instructors</h2>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
              {instructor.name}
            </li>
          ))}
        </ul>
      </section>

      {selectedInstructor && (
        <section className="selected-instructor-section">
          <h2>Contact {selectedInstructor.name}</h2>
          <p>Email: {selectedInstructor.email}</p>
          <p>Phone: {selectedInstructor.phone}</p>
        </section>
      )}

      {selectedInstructor && !emailSent && (
        <section className="email-section">
          <h2>Send Email to {selectedInstructor.name}</h2>
          <textarea
            value={emailContent}
            onChange={handleEmailChange}
            placeholder="Write your message here..."
          />
          <button type="button" onClick={handleSendEmail}>
            Send Email
          </button>
        </section>
      )}

      {emailSent && <p>Email sent successfully!</p>}
    </div>
  );
};

export default InstructorContact;
