import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
  const grades = [
    { course: ' DCIT 209-E-Business Architecture', grade: 'A' },
    { course: 'DCIT 205-Multimedia and Web Design', grade: 'B+' },
    { course: 'DCIT 201-Programming I', grade: 'A' },
  ];

  const missingGrades = grades.filter((grade) => !grade.grade);

  useEffect(() => {
    if (missingGrades.length > 0) {
      alert(`You have missing grades in the following courses: ${missingGrades.map((grade) => grade.course).join(', ')}`);
    }
  }, [missingGrades]);

  return (
    <div className="container mt-4">
      <h2>Dashboard - Computer Science Department</h2>

      {/* Display grades */}
      <div className="card mt-4">
        <div className="card-body">
          <h4>Your Grades:</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.course}>
                  <td>{grade.course}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Display alerts for missing grades */}
      {missingGrades.length > 0 && (
        <div className="alert alert-warning mt-4 bg-blue-black text-white" role="alert">
          <i className="bi bi-exclamation-triangle-fill mr-2"></i> {/* Bootstrap Icons */}
          You have missing grades in the following courses: {missingGrades.map((grade) => grade.course).join(', ')}

        </div>
      )}
    </div>
  );
};

export default Dashboard;