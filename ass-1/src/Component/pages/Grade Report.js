import NavBar from "../includes/Navigation bar";

import React, { useState } from "react";

import Footer from "../includes/footer";
//   };
const Course = [
  {
    name: "Math",
    grade: 90,
    semester: "First Semester",
    academicYear: "2021",
  },
  {
    name: "English",
    grade: 85,
    semester: "First Semester",
    academicYear: "2021",
  },
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
    name: "Statistics",
    grade: 62,
    semester: "Second Semester",
    academicYear: "2021",
  },
  {
    name: "Economics",
    grade: 85,
    semester: "Second Semester",
    academicYear: "2021",
  },
  {
    name: "Programming Fundamentals",
    grade: 79,
    semester: "First Semester",
    academicYear: "2022",
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
    name: "Web Development",
    grade: 60,
    semester: "Second Semester",
    academicYear: "2022",
  },
  {
    name: "E-Business Architecture",
    grade: 83,
    semester: "Second Semester",
    academicYear: "2022",
  },
  {
    name: "Digital Electronics",
    grade: 75,
    semester: "Second Semester",
    academicYear: "2022",
  },
  {
    name: "Introduction to Programming",
    grade: 81,
    semester: "Second Semester",
    academicYear: "2022",
  },
  {
    name: "Software Development",
    grade: 96,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "Data Analytics",
    grade: 85,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "Data Minning",
    grade: 92,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "Object-Oriented Programming",
    grade: 73,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "Data Structures and Algorithms",
    grade: 75,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    name: "System Administration",
    grade: 92,
    semester: "Second Semester",
    academicYear: "2023",
  },
  {
    name: "Machine learning",
    grade: 56,
    semester: "Second Semester",
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
    name: "Blockchain Development",
    grade: 75,
    semester: "Second Semester",
    academicYear: "2023",
  },
];

const GradeReport = () => {
  const [semester, setSemester] = useState("");
  const [academicYear, setAcademicYear] = useState("");

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleAcademicYearChange = (e) => {
    setAcademicYear(e.target.value);
  };

  const filteredCourses = Course.filter((course) => {
    return (
      (!semester || course.semester === semester) &&
      (!academicYear || course.academicYear === academicYear)
    );
  });
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="InstructorContactPage">
        <div>
          <h2 className="Heading2">Course Details</h2>
          <div className="filters" data-bs-theme="dark">
            <label className="Lab1" htmlFor="semester">
              Semester:
            </label>
            <select
              className=" d1"
              name="semester"
              id="semester"
              onChange={handleSemesterChange}
            >
              <option value="">All Semesters</option>
              <option value="First Semester">First Semester</option>
              <option value="Second Semester">Second Semester</option>
            </select>

            <label className="Lab1" htmlFor="academicYear">
              Academic Year:
            </label>
            <select
              name="academicYear"
              id="academicYear"
              onChange={handleAcademicYearChange}
            >
              <option value="">All Years</option>

              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          <table class="table caption-top">
            <thead className="Th"> MY GRADE BOOK</thead>
            <thead className="col1">
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Semester</th>
                <th scope="col">Academic Year</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.semester}</td>
                  <td>{course.academicYear}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="ul1">
            If you have any missing grade to report, please click on the link on
            the below
          </p>
          <button className="Log">
            <a href="/MissingGradeForm"> Click Me</a>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GradeReport;
