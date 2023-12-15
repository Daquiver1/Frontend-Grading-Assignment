import React, { useState } from 'react';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission with confirmation message
    alert('Grade report submitted successfully');
  }

  return (
    <div>
      <h2>Missing Grade Report Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instructor Name"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expected Grade"
          value={expectedGrade}
          onChange={(e) => setExpectedGrade(e.target.value)}
        />
        <textarea
          placeholder="Explanation"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeFormPage;
