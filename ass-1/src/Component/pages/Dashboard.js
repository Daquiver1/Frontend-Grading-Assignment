// import React, { useState, useEffect } from "react";

import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";

import React, { useState, useEffect } from "react";

const grades = [
  { name: "Math", grade: 90, semester: "First Semester", academicYear: "2021" },
  {
    name: "Science",
    grade: 92,
    semester: "First Semester",
    academicYear: "2021",
  },
  {
    name: "Social Science",
    grade: 72,
    semester: "First Semester",
    academicYear: "2021",
  },
  {
    name: "Discrete Math",
    grade: 70,
    semester: "Second Semester",
    academicYear: "2021",
  },
  {
    name: "Calculus",
    grade: 81,
    semester: "Second Semester",
    academicYear: "2021",
  },
  {
    name: "Mobile App Devlopment",
    grade: 88,
    semester: "First Semester",
    academicYear: "2022",
  },
  {
    name: "Cyber Secrity",
    grade: 94,
    semester: "First Semester",
    academicYear: "2022",
  },
  {
    name: "Computer Networking",
    grade: 74,
    semester: "First Semester",
    academicYear: "2022",
  },
  {
    name: "Data Structures and Algorithms",
    grade: 75,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "Ethical Hacking",
    grade: 91,
    semester: "Second Semester",
    academicYear: "2023",
  },
  {
    name: "Cloud Computing",
    grade: 82,
    semester: "Second Semester",
    academicYear: "2023",
  },
  {
    me: "Software Development",
    grade: 96,
    semester: "First Semester",
    academicYear: "2023",
  },
];

const missingGrades = [
  {
    courseName: "Science",
    grade: 92,
    semester: "First Semester",
    academicYear: "2021",
  },
  {
    courseName: "Social Science",

    semester: "First Semester",
    academicYear: "2021",
  },
  {
    courseName: "Software Development",

    semester: "First Semester",
    academicYear: "2023",
  },
  {
    courseName: "Data Structures and Algorithms",

    semester: "First Semester",
    academicYear: "2023",
  },
];

function Dashboard() {
  const [showMissingGradesAlert, setShowMissingGradesAlert] = useState(false);

  useEffect(() => {
    // Mock logic to check for missing grades
    if (missingGrades.length > 0) {
      setShowMissingGradesAlert(true);
    }
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="InstructorContactPage">
        <h2 className="Heading3">Dashboard</h2>
        {showMissingGradesAlert && (
          <div className="alert">
            <h4 className="Heading2">Missing Grades!</h4>
            <p className="p2">
              {" "}
              You have missing grades for the following courses:
            </p>
            <ul className="ul2">
              {missingGrades.map((missingGrade) => (
                <li key={missingGrade.courseName}>
                  {missingGrade.courseName} ({missingGrade.semester},
                  {missingGrade.academicYear})
                </li>
              ))}
            </ul>
            <p className="p2">
              Please contact your instructors for updates on your missing
              grades.
            </p>
          </div>
        )}
        <h3 className="Heading2">Current Grades</h3>

        <table class="table">
          <thead className="col1">
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Semester</th>
              <th scope="col">Grade</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.name}>
                <td>{grade.name}</td>
                <td>{grade.semester}</td>
                <td>{grade.grade}</td>
                <td>{grade.academicYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
