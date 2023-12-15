import React, { useState } from 'react';

const MissingGradeForm = () => {
  
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission (e.g., API request, state update)
    console.log('Form submitted:', { courseName, instructorName, expectedGrade, explanation });
    // Reset form fields
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div>
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Instructor Name:
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Expected Grade:
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;