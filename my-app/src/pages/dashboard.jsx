import React from 'react';

const Dashboard = () => {
 
  const grades = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'History', grade: '' },
    { subject: 'English', grade: 'A' },
    { subject: 'Geography', grade: '' },
  ];

  const missingGrades = grades.filter((grade) => grade.grade === '');

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <h3>Current Grades</h3>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.subject}: {grade.grade}
          </li>
        ))}
      </ul>
      {missingGrades.length > 0 && (
        <div className="bg-yellow-200 p-4 my-4">
          <h3>Missing Grades</h3>
          <ul>
            {missingGrades.map((grade, index) => (
              <li key={index}>{grade.subject}</li>
            ))}
          </ul>
          <p>
            You have missing grades in the above subjects. Please check with your instructors for updates or submit the assignments.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;