import React, { useState } from 'react';

function MissingGradeForm() {
  const [missingGrades, setMissingGrades] = useState([]);
  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMissingGrade = { subject };
    setMissingGrades([...missingGrades, newMissingGrade]);
    setSubject('');
  };

  return (
    <div>
      <h1>Missing Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <button type="submit">Report Missing Grade</button>
      </form>
      <h2>Missing Grade Report</h2>
      {missingGrades.length > 0 ? (
        <ul>
          {missingGrades.map((missingGrade, index) => (
            <li key={index}>{missingGrade.subject}</li>
          ))}
        </ul>
      ) : (
        <p>No missing grades reported yet.</p>
      )}
    </div>
  );
}

export default MissingGradeForm;