import React, { useState, useEffect } from 'react';
import './DashboardPage.css'

const DashboardPage = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    
    const simulatedData = [
      { course: 'Math223', grade: 'A' },
      { course: 'Dcit 205', grade: 'A' },
      { course: 'Dcit 203', grade: 'A' },
      { course: 'Dcit 207', grade: 'A' },
      { course: 'CBAS', grade: 'A' },
      { course: 'Dcit 201', grade: 'A' },
     
    ];

    setGrades(simulatedData);

    // Check for missing grades
    const missing = simulatedData.filter(course => !course.grade);
    setMissingGrades(missing);
  }, []);

  return (
    <div className="contain mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

      {grades.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Your Grades</h2>
            <ul>
              {grades.map((course, index) => (
                <li key={index}>{course.course}: {course.grade || 'Not Available'}</li>
              ))}
            </ul>
          </div>

          {missingGrades.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-red-500">Missing Grades</h2>
              <ul>
                {missingGrades.map((course, index) => (
                  <li key={index}>{course.course}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;
