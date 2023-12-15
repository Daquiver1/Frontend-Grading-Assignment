import React, { useState, useEffect } from 'react';

const GradeReportPage = () => {
  // Sample state for grades
  const [grades, setGrades] = useState([]);

  // Sample effect to simulate fetching data
  useEffect(() => {
    // Simulate fetching grades from an API
    const fetchData = async () => {
      // Replace this with actual API call or state management
      const response = await fetch('api/grades');
      const data = await response.json();
      setGrades(data);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h2>Grade Report</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Grade</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.courseName}</td>
              <td>{grade.grade}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add filter options if necessary */}
    </div>
  );
};

export default GradeReportPage;
