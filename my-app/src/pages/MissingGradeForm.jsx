import React, { useState } from 'react';
import Navbar from './NavBar';

const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });

    // Reset form fields
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div>
      <Navbar />
      <h1>Missing Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;