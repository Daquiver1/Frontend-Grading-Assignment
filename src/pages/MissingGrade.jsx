import React, { useState } from 'react';
import './MissingGrade.css';

const MissingGradeFormPage = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // For now, let's just log the form data
    console.log('Form Data:', formData);
    // Reset the form fields after submission (optional)
    setFormData({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
    <div className="MissingGradeForm-container">
      <h1>Report Missing Grade</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Report Missing Grade</button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
