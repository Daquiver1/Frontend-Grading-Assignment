import React, { useState } from 'react';
import './MissingGradesForm.css';

import {Link, redirect} from 'react-router-dom';
import Footer from './Footer';

const MissingGradesForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    alert('Submission Successful');
  };

  return (
    <body>
        <br></br>
    <div className="missing-grades-form-container">
      <h2>Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <label align = "left">
          Course Name:
          <br></br>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <label align = "left">
          Instructor Name:
          <br></br>
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </label>
        <label align = "left">
          Expected Grade:
          <br></br>
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </label>
        <label align = "left">
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          />
        </label>
     
        <button type="submit">Submit</button>
       
      </form>
    </div>
    <Footer position = 'absolute' />
    </body>
  );
};

export default MissingGradesForm;
