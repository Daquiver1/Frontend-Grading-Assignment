// MissingGradeFormPage.js

import React, { useState } from 'react';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = () => {
    // Simulate form submission logic (replace with actual form submission)
    if (courseName && instructorName && expectedGrade && explanation) {
      // Successful submission
      setSubmissionStatus('success');
    } else {
      // Incomplete form submission
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="missing-grade-form-page">
      <h2>Report Missing Grade</h2>
      <form>
        <label>
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Instructor Name:
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expected Grade:
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
        </label>
        <br />
        <label>
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* Display submission status */}
      {submissionStatus === 'success' && (
        <p className="submission-success">Grade report submitted successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p className="submission-error">Please fill out all fields before submitting.</p>
      )}
    </div>
  );
};

export default MissingGradeFormPage;
