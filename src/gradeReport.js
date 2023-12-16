import React from 'react'

const gradeReport = () => {
  const grades = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B+' },
    { subject: 'History', grade: 'A-' },
    { subject: 'English', grade: 'B' },
    { subject: 'Art', grade: 'C+' },
  ];

  const styles = `
    .grade-report {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .subject {
      font-weight: bold;
    }

    .grade {
      margin-left: 5px;
      padding: 5px 10px;
      border-radius: 4px;
      background-color: #dff0d8;
      color: #3c763d;
    }
  `;
  return (
    <div> <style>{styles}</style>
    <div className="grade-report">
      <h2>Grade Report</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            <span className="subject">{grade.subject}:</span>
            <span className="grade">{grade.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default gradeReport;
