import React, { useState } from 'react';

function MissingGradeFormPage() {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Course Name: ${courseName}, Instructor Name: ${instructorName}, Expected Grade: ${expectedGrade}, Explanation: ${explanation}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Missing Grade Form</h1>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default MissingGradeFormPage;
