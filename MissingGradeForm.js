import React, { useState } from 'react';
import './MissingGradeForm.css';
import '../components/Sidebar.css';

const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the form submission (e.g., send to a server)

    // For demonstration purposes, set a flag to show a confirmation message
    setIsSubmitted(true);
  };

  return (
    <div className="missing-grade-form">
      <h2>Missing Grade Form</h2>

      {isSubmitted ? (
        <div className="confirmation-message">Grade report submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Course Name:
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </label>

          <label>
            Instructor Name:
            <input
              type="text"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </label>

          <label>
            Expected Grade:
            <input
              type="text"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
              required
            />
          </label>

          <label>
            Explanation:
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MissingGradeForm;