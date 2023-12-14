// LandingPage.js

import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

const LandingPage = () => {
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission (e.g., send data to a backend)
    console.log('Subject:', subject, 'Grade:', grade);
    // You can add logic here to send data to your backend or perform other actions
  };

  return (
    <div className="landing-container">
      <h1 className='title'>Welcome to the Missing Grade Reporting System</h1>
      <p>Please report any missing grades below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Report Missing Grade</button>
      </form>
    </div>
  );
};

export default LandingPage;
