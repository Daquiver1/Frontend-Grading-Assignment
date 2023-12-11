// InstructorContactPage.js

import React, { useState } from 'react';
import './InstructorContactPage.css'; // Import the CSS file for styling

const InstructorContactPage = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Dr. Manuel Koko', email: 'manuelkoko@example.com' },
    { id: 2, name: 'Prof. Daniel Zazu', email: 'Danizaz@example.com' },
    { id: 3, name: 'Dr. Shali Popi', email: 'Shalipops@example.com' },
    { id: 4, name: 'Prof. Nick Asamoah', email: 'NickAsam@example.com' },
    { id: 5, name: 'Dr. Adjetey Brown', email: 'adjetbrown@example.com' },
    { id: 6, name: 'Prof. Thomas Aseye', email: 'thomasye@example.com' },
    { id: 7, name: 'Dr. Christopher Asare', email: 'christofasare@example.com' },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleEmailSend = () => {
    

    if (selectedInstructor && emailSubject && emailContent) {
      setConfirmationMessage(`Email sent to ${selectedInstructor.name}`);
      
      setSelectedInstructor(null);
      setEmailSubject('');
      setEmailContent('');
    } else {
      setConfirmationMessage('Please fill in all fields before sending.');
    }
  };

  return (
    <div className="instructor-contact-container">
      <h2>Instructor Contact Page</h2>
      <h3>Click on any instructor of your choice  </h3>

      <div className="instructor-list">
        <h3>Instructors:</h3>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} onClick={() => setSelectedInstructor(instructor)}>
              {instructor.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div className="instructor-details">
          <h3>Contact Details:</h3>
          <p>
            <strong>Name:</strong> {selectedInstructor.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedInstructor.email}
          </p>

          <div className="email-form">
            <h3>Send Email:</h3>
            <label htmlFor="emailSubject">Subject:</label>
            <input
              type="text"
              id="emailSubject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />

            <label htmlFor="emailContent">Content:</label>
            <textarea
              id="emailContent"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />

            <button type="button" onClick={handleEmailSend}>
              Send Email
            </button>
          </div>
        </div>
      )}

      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
    </div>
  );
};

export default InstructorContactPage;
