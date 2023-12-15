// MissingGradeForm.js

import React, { useState } from 'react';
import './MissingReport.css';

const MissingReport = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    alert('Your report has been sucessfully submitted.');
  };

  return (
    <div className="missing-grade-form-container">
      <h2>Missing Grade Report Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
        />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
        />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input
          type="text"
          id="expectedGrade"
          name="expectedGrade"
          value={formData.expectedGrade}
          onChange={handleChange}
        />

        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
        />

        <button type="submit">Report Missing Grade</button>
      </form>
    </div>
  );
};

export default MissingReport;
