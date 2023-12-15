import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const grades = [
    { subject: "Math", grade: "A+" },
    { subject: "Science", grade: "B+" },
    { subject: "English", grade: "A+" },
    { subject: "History", grade: "B" },
    { subject: "Geography", grade: "C+" },
  ];

  const marks = [
    { subject: "Math", mark: 85 },
    { subject: "Science", mark: 75 },
    { subject: "English", mark: 90 },
    { subject: "History", mark: 72 },
    { subject: "Geography", mark: 65 },
  ];

  const missingGrades = grades.filter(
    (grade) => grade.grade === null || grade.grade === undefined
  );

  return (
    <div className="dashboard-container">
      <h1>
        <u>Student Grades Dashboard</u>
      </h1>
      <div className="grades-section">
        <h2>Current Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{grade.grade !== null ? grade.grade : "N/A"}</td>
                <td>{marks[index].mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {missingGrades.length > 0 && (
        <div className="missing-grades-section">
          <h2>Missing Grades</h2>
          <ul>
            {missingGrades.map((grade, index) => (
              <li key={index}>{grade.subject}</li>
            ))}
          </ul>
          <p>You have {missingGrades.length} missing grade(s).</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
