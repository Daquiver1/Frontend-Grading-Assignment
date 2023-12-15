import React, { useState } from 'react';
import { Link } from 'react-router-dom'; import '../CSS/InstructorContactPage.css'; 
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
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
                <strong>Dr. Normenyo Vasco:</strong> bnormenyovasco@gmail.com
              </li>
              <li>
                <strong>Prof. Biniot Sheba:</strong> biniotsheba@gmail.com
              </li>
              <li>
                <strong>Dr. Paul Boateng:</strong> paulsco@gmail.com
              </li>
              <li>
                <strong>Prof. Jane Mensah:</strong> janerjaner@gmail.com
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipient">Select Recipient:</label>
              <select id="recipient" value={selectedRecipient} onChange={handleRecipientChange}>
                <option value="Dr. Normenyo Vasco">Dr. Normenyo Vasco</option>
                <option value="Prof. Biniot Sheba">Prof. Biniot Sheba</option>
                <option value="Dr. Paul Boateng">Dr. Paul Boateng</option>
                <option value="Prof. Jane Mensah">Prof. Biniot Sheba</option>
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
