import React, { useState } from 'react';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleFormSubmit = () => {
    // Add logic to handle form submission (mock-up)
    console.log('Submitting missing grade report:', { courseName, instructorName, expectedGrade, explanation });
  };

  return (
    <div>
      <h1>Report Missing Grade</h1>
      <form>
        <label>
          Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </label>
        <br />
        <label>
          Instructor Name:
          <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
        </label>
        <br />
        <label>
          Expected Grade:
          <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} />
        </label>
        <br />
        <label>
          Explanation:
          <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
