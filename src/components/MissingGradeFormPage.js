import React, { useState } from 'react';
import Styles from './MissingGradeReport.module.css'

const MissingGradeReportPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    alert('Missing grade reported successfully!');
    
    // Reset form fields
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div className="missing-grade-report-container">
      <h2>Report Missing Grades</h2>

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

        <button type="submit">Submit Report</button>
      </form>

      
    </div>

    
  );
};

export default MissingGradeReportPage;
