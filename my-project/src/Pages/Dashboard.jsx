import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const currentGrades = [
    { course: "DCIT 101", grade: "A" },
    { course: "DCIT 103", grade: "B+" },
    { course: "DCIT 105", grade: "c+" },
  ];

  const missingGrades = [
    { course: "STATS 111", status: "Not reported" },
    { course: "ECONS 101", status: "Not reported" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "20px", color: "#01027d" }}
      >
        Dashboard
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#01027d" }}>Current Grades</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "12px",
                    backgroundColor: "#01027d",
                    color: "white",
                  }}
                >
                  Course
                </th>
                <th
                  style={{
                    padding: "12px",
                    backgroundColor: "#01027d",
                    color: "white",
                  }}
                >
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {currentGrades.map(({ course, grade }) => (
                <tr key={course}>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    {course}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    {grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            flex: 1,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#01027d" }}>Missing Grades</h3>
          <ul>
            {missingGrades.map(({ course, status }) => (
              <li key={course} style={{ marginBottom: "10px" }}>
                <strong>{course}:</strong> {status}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#01027d" }}>How to Report Missing Grades</h3>
        <p>If you have missing grades, report them using the button below:</p>
        <Link to="/form">
          <button
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Report Missing Grade
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
