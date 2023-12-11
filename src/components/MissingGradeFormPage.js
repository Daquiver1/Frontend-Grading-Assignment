

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

    
    setConfirmationMessage('Grade report submitted successfully!');
  };

  return (
    <div className="missing-grade-form-container">
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
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
        />

        <button type="submit">Submit</button>
      </form>

      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
};

export default MissingGradeFormPage;
