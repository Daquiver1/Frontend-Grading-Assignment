// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use axios for API requests

const Dashboard = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    // Simulate fetching grades and missing grades from an API
    const fetchData = async () => {
      try {
        const gradesResponse = await axios.get('/api/grades'); // Replace with your API endpoint
        const missingGradesResponse = await axios.get('/api/missing-grades'); // Replace with your API endpoint

        setGrades(gradesResponse.data);
        setMissingGrades(missingGradesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Current Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id}>
                <td>{grade.courseName}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Missing Grades</h2>
        {missingGrades.length === 0 ? (
          <p>No missing grades at the moment. Great job!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Expected Grade</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {missingGrades.map((missingGrade) => (
                <tr key={missingGrade.id}>
                  <td>{missingGrade.courseName}</td>
                  <td>{missingGrade.instructorName}</td>
                  <td>{missingGrade.expectedGrade}</td>
                  <td>{missingGrade.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
