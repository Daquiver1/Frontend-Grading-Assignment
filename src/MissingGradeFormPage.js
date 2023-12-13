

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MissingGradeFormPage.css';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = () => {
  
    if (!courseName || !instructorName || !expectedGrade || !explanation) {
      setFormError('Please fill out all fields.');
      return;
    }

    
    console.log('Form submitted:', {
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });


    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
    setFormError(''); 
  };

  return (
    <div className="missing-grade-form-page">
      <div className="missing-grade-form-container">
        <h2>Missing Grade Form</h2>

        <form>
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructorName">Instructor Name</label>
            <input
              type="text"
              id="instructorName"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expectedGrade">Expected Grade</label>
            <input
              type="text"
              id="expectedGrade"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="explanation">Explanation</label>
            <textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
          </div>

          {formError && <div className="form-error">{formError}</div>}

          <div className="form-group">
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>

        <div className="navigation-links">
          <Link to="/dashboard">Go to Dashboard</Link>
          <Link to="/grade-report">Grade Report</Link>
   
        </div>
      </div>
    </div>
  );
};

export default MissingGradeFormPage;
