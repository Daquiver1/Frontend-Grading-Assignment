import React from 'react';

const Dashboard = () => {
  // Replace this with actual student data or use state/props
  const studentGrades = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'History', grade: 'C' },
    // Add more grades as needed
  ];

  const missingGrades = [
    { subject: 'English' },
    // Add more missing grades as needed
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Current Grades */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Current Grades</h2>
        <ul>
          {studentGrades.map((grade, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{grade.subject}:</span> {grade.grade}
            </li>
          ))}
        </ul>
      </div>

      {/* Missing Grades */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Missing Grades</h2>
        {missingGrades.length > 0 ? (
          <ul>
            {missingGrades.map((grade, index) => (
              <li key={index} className="mb-2">
                {grade.subject}
              </li>
            ))}
          </ul>
        ) : (
          <p>No missing grades</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
