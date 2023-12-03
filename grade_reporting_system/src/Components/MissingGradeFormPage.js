import React, { useState } from 'react';
import '../CSS/MissingGradeFormPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const MissingGradeFormPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [comments, setComments] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
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
    setConfirmationMessage('Missing grade reported successfully!');
  };

  return (
    <UniversalComponent>
      <div className="missing-grade-form-container">
        <div className="missing-grade-form-content">
          <h1>Report Missing Grade</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="course">Select Course:</label>
              <select id="course" value={selectedCourse} onChange={handleCourseChange}>
                {/* Populate options dynamically based on available courses */}
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                {/* Add more options based on your data */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comments">Additional Comments:</label>
              <textarea
                id="comments"
                value={comments}
                onChange={handleCommentsChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="attachment">Attach supporting documents:</label>
              <input
                type="file"
                id="attachment"
                accept=".pdf, .doc, .docx"
                onChange={handleAttachmentChange}
              />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
          {confirmationMessage && (
            <div className="confirmation-message">{confirmationMessage}</div>
          )}
          <p className="contact-support-link">
            If the issue persists,{' '}
            <a href="/instructor-contact">contact support</a>.
          </p>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default MissingGradeFormPage;
