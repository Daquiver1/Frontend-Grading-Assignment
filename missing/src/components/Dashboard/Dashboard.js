import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const grades = [
    { subject: "DCIT201", grade: "A" },
    { subject: "UGRC201", grade: "C+" },
    { subject: "CBAS204", grade: "C" },
    { subject: "ECONS206", grade: "B+" },
    { subject: "DCIT203", grade: "A+" },
  ];

  // Mock data for missing grades
  const missingGrades = ["DCIT2O7", "DCIT205"];

  return (
    <div className="dashboard-container">
      <h2> Student Dashboard </h2>{" "}
      <div className="grades-section">
        <h3> Current Grades </h3>{" "}
        <ul>
          {" "}
          {grades.map((grade, index) => (
            <li key={index}>
              <strong> {grade.subject}: </strong> {grade.grade}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
      <div className="alerts-section">
        <h3> Alerts </h3>{" "}
        {missingGrades.length === 0 ? (
          <p> No missing grades.Great job! </p>
        ) : (
          <ul>
            {" "}
            {missingGrades.map((subject, index) => (
              <li key={index}> Missing grade for {subject} </li>
            ))}{" "}
          </ul>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
