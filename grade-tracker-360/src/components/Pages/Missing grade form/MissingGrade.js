import React, { useState } from 'react';
import './missing-grade.css';

export default function MissingGradeForm() {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set submitted to true to display the confirmation message
    setSubmitted(true);
  };

  return (
    <div className="missing-grade-form-container">
      <h1 className="page-title">Report Missing Grade</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructorName">Instructor Name:</label>
            <input
              type="text"
              id="instructorName"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expectedGrade">Expected Grade:</label>
            <input
              type="text"
              id="expectedGrade"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="explanation">Explanation:</label>
            <textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Report
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <p>Grade has been reported successfully!</p>
        </div>
      )}
    </div>
  );
}
