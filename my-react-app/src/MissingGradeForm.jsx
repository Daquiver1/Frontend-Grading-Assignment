import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MissingGradeForm.css';

function MissingGradeForm() {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions like validation or display confirmation messages here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="missing-grade-form-container">
      <div className="dropdown">
        <button className="dropdown-button">Menu</button>
        <div className="dropdown-content">
          <Link to="/" className="dropdown-item">Landing</Link>
          <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
          <Link to="/GradeReport" className="dropdown-item">Grade Report</Link>
          <Link to="/MissingGradeForm" className="dropdown-item">Missing Grade Form</Link>
          <Link to="/InstructorContactPage" className="dropdown-item">Instructor Contact</Link>
          <Link to="/HelpAndSupport" className="dropdown-item">Help and Support</Link>
        </div>
      </div>
      <h1 className="form-title">Missing Grade Report</h1>
      <form className="grade-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            rows="4"
            value={formData.explanation}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeForm;
