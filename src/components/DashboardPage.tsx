import { useState, useEffect } from "react";

function DashboardPage() {
  const [currentGrades] = useState([
    { course: "Math 223", grade: "N/A" },
    { course: "DCIT 201", grade: "N/A" },
    { course: "DCIT 203", grade: "N/A" },
    { course: "DCIT 205", grade: "N/A" },
    { course: "DCIT 207", grade: "N/A" },
    { course: "CBAS 210", grade: "N/A" },
  ]);

  const [selectedCourse] = useState("");

  const filteredGrades = currentGrades.filter((grade) => {
    if (selectedCourse) {
      return grade.course === selectedCourse;
    }
    return true;
  });

  const hasMissingGrades = filteredGrades.some((grade) => !grade.grade);
  const hasUnavailableGrades = filteredGrades.some(
    (grade) => grade.grade === "N/A"
  );

  useEffect(() => {
    if (hasMissingGrades) {
      alert("You have missing grades for the selected semester.");
    }
  }, [hasMissingGrades]);

  useEffect(() => {
    if (hasUnavailableGrades) {
      alert("Some grades are currently unavailable.");
    }
  }, [hasUnavailableGrades]);

  return (
    <>
      <br />

      <h1>Dashboard</h1>
      <p>Current Grades of the student.</p>

      <h2>Current Grades</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default DashboardPage;
