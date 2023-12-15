// MissingGradeFormPage.js

import React, { useState } from 'react';
import './MissingGradeFormPage.css';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or submission logic here (for a real backend)
    // For now, just show a confirmation message
    setConfirmationMessage('Grade report submitted successfully!');
  };

  return (
    <div className="missing-grade-form-page">
      <header>
        <h1>Missing Grade Form Page</h1>
      </header>

      <form className="grade-form" onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          required
        />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input
          type="text"
          id="expectedGrade"
          value={expectedGrade}
          onChange={(e) => setExpectedGrade(e.target.value)}
          required
        />

        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {confirmationMessage && (
        <div className="confirmation-message">{confirmationMessage}</div>
      )}
    </div>
  );
};

export default MissingGradeFormPage;
