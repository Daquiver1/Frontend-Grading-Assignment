import React, { useState } from 'react';
import './MissingGradeForm.css';
import Navbar from './component/Navbar';

function MissingGradeForm () {
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    const CourseName = "";
    const value = event.target.value;
    setFormData(values => ({...values, [CourseName]: value}))
  }

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='dash'>
      <Navbar />
      <div className="missing-grade-form">
      <h2>Report Missing Grade</h2>
      {submitted ? (
        <p className="confirmation-message">Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />

          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            required
          />

          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            required
          />

          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    </div>
    
  );
};

export default MissingGradeForm;
