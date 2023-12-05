import React, { useState } from 'react';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = () => {
    // Simulate submission logic
    console.log('Form submitted');
    // Display confirmation message
  };

  return (
    <div>
      <h2>Report Missing Grade</h2>
      <form>
        <label>Course Name:</label>
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />

        <label>Instructor Name:</label>
        <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />

        <label>Expected Grade:</label>
        <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} />

        <label>Explanation:</label>
        <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
