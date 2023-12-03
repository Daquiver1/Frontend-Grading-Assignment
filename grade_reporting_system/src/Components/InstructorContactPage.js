import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/InstructorContactPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const InstructorContactPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRecipientChange = (event) => {
    setSelectedRecipient(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    // Handle file attachment, if needed
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic to submit the form and handle confirmation
    // ...

    // Display confirmation message
    setConfirmationMessage('Message sent successfully!');
  };

  return (
    <UniversalComponent>
      <div className="instructor-contact-container">
        <div className="instructor-contact-content">
          <h1>Contact Instructors</h1>
          <div className="instructors-list">
            <h2>Instructors List</h2>
            <ul>
              <li>
                <strong>Instructor 1:</strong> Contact details
              </li>
              <li>
                <strong>Instructor 2:</strong> Contact details
              </li>
              {/* Add more instructors or departments with contact details */}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipient">Select Recipient:</label>
              <select id="recipient" value={selectedRecipient} onChange={handleRecipientChange}>
                {/* Populate options dynamically based on available instructors or departments */}
                <option value="instructor1">Instructor 1</option>
                <option value="instructor2">Instructor 2</option>
                {/* Add more options based on your data */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="attachment">Attach relevant documents:</label>
              <input
                type="file"
                id="attachment"
                accept=".pdf, .doc, .docx"
                onChange={handleAttachmentChange}
              />
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
          {confirmationMessage && (
            <div className="confirmation-message">{confirmationMessage}</div>
          )}
          <p className="simulate-email-link">
            To simulate sending an email,{' '}
            <Link to="/simulate-email">click here</Link>.
          </p>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default InstructorContactPage;
