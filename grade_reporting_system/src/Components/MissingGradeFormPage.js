import React, { useState } from 'react';
import '../CSS/MissingGradeFormPage.css'; 
import UniversalComponent from './UniversalComponent';
import { Link } from 'react-router-dom';

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
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
                <option value="DCIT 203">DCIT 203</option>
                <option value="DCIT 201">DCIT 201</option>
                <option value="MATH 203">MATH 223</option>
                <option value="DCIT 202">DCIT 202</option>
                <option value="MATH 203">MATH 225</option>
                <option value="DCIT 205">DCIT 205</option>
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
            <Link to="/instructor-contact">contact support</Link>.
          </p>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default MissingGradeFormPage;
