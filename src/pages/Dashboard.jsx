import React from "react";

const Dashboard = () => {
  const currentGrades = [
    { course: "DCIT205", grade: "A" },
    { course: "DCIT207", grade: "B+" },
    { course: "DCIT209", grade: "A" },
    { course: "CBAS201", grade: "A" },

  ];

  const missingGrades = [
    { course: "DCIT201", instructor: "John Doe", expectedGrade: "B", status: "Pending" },
    { course: "DCIT203", instructor: "Jane Smith", expectedGrade: "A", status: "Pending" },
  ];

  return (
    <div className="dashboard-container p-4 md:p-6 lg:p-8 mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h2>
      <p className="text-base md:text-lg mb-6">
        Welcome to your dashboard! Here's an overview of your current grades and any missing grades:
      </p>

      <div className="grades-section overflow-x-auto">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Current Grades</h3>
        <table className="grades-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {currentGrades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grades-section mt-6 overflow-x-auto">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Missing Grades</h3>
        <table className="grades-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Instructor</th>
              <th>Expected Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {missingGrades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.course}</td>
                <td>{grade.instructor}</td>
                <td>{grade.expectedGrade}</td>
                <td>{grade.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
