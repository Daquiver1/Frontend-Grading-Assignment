import React, { useState } from 'react';
import './MissingGradeFormPage.css'; 
import logo from './images/logo.png';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for handling the form submission
  };

  return (
    <div className="missing-grade-form">
      <img src={logo} alt="School Logo" className="school-logo" />
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="instructorName">Instructor Name</label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="expectedGrade">Expected Grade</label>
        <input
          type="text"
          id="expectedGrade"
          name="expectedGrade"
          value={formData.expectedGrade}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="explanation">Explanation</label>
        <textarea
          id="explanation"
          name="explanation"
          value={formData.explanation}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;