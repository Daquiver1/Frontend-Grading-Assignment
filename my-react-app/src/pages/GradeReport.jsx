import React, { useState } from 'react';

function GradeReport() {
  const [grades, setGrades] = useState([]);
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGrade = { subject, grade };
    setGrades([...grades, newGrade]);
    setSubject('');
    setGrade('');
  };

  return (
    <div>
      <h1>Grade Report Form</h1>
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
        <div>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={handleGradeChange}
          />
        </div>
        <button type="submit">Add Grade</button>
      </form>
      <h2>Grade Report</h2>
      {grades.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No grades recorded yet.</p>
      )}
    </div>
  );
}

export default GradeReport;