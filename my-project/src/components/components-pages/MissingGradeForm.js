
import React, { useState } from 'react';
import "../components-css/MissingGrade.css"


const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate submission and display confirmation message
    alert('Your missing grade report has been submitted.');
  };

  return (
    <div className="mis">
    <div className="missing-grade-form">
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input
          type="text"
          name="courseName"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
        />

        <label>Instructor Name:</label>
        <input
          type="text"
          name="instructorName"
          value={instructorName}
          onChange={(event) => setInstructorName(event.target.value)}
        />

        <label>Expected Grade:</label>
        <input
          type="text"
          name="expectedGrade"
          value={expectedGrade}
          onChange={(event) => setExpectedGrade(event.target.value)}
        />

        <label>Explanation:</label>
        <textarea
          name="explanation"
          rows={5}
          value={explanation}
          onChange={(event) => setExplanation(event.target.value)}
        />

        <button type="submit">Report Missing Grade</button>
      </form>
    </div>
    </div>
  );
};

export default MissingGradeForm;

















