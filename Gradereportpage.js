import React, { useState } from 'react';
import './GradeReportPage.css';
import '../components/Sidebar.css';

const semesterOptions = [
  'All Semesters',
  '1st Semester Level 100',
  '2nd Semester Level 100',
  '1st Semester Level 200',
  // Add more options as needed
];

const studentInfo = {
  name: 'John Doe',
  dateOfBirth: 'January 1, 2000',
  gender: 'Male',
  programOfStudy: 'Computer Science', // Add the program of study
};

const gradeData = [
  {
    semester: '1st Semester Level 100',
    courses: [
      {
        course: 'DCIT101 Indrouction to Computer Science',
        instructor: 'Dr. Ferdinard Katsriku',
        grade: 'A',
        grade_point: 12,
        credit_hour: 3,
      },

      {
        course: 'DCIT105 Mathematics for IT Professionals',
        instructor: 'Dr. Solomon',
        grade: 'B+',
        grade_point: 4.0,
        credit_hour: 3,
      },

      {
        course: 'DCIT103 Office Productivity tools',
        instructor: 'Mr. Mark Atta Mensah',
        grade: 'A',
        grade_point: 4.0,
        credit_hour: 3,
      },

       {
        course: 'UGRC150 Critical Thinking and Practical Reasoning',
        instructor: 'Dr. Nkansah Morgan',
        grade: 'A',
        grade_point: 4.0,
        credit_hour: 3,
      },

      {
        course: 'ECON101 Introduction to Economics',
        instructor: 'Dr. Getrude Afful',
        grade: 'A',
        grade_point: 4.0,
        credit_hour: 3,
      },

      {
        course: 'STAT111 Introduction to Statistics and Probability',
        instructor: 'Dr. Enoch Sakyi Yeboah',
        grade: 'A',
        grade_point: 4.0,
        credit_hour: 3,
      },
      // Add more courses as needed
    ],
  },
  {
    semester: '2nd Semester Level 100',
    courses: [
      {
        course: 'DCIT104 Principles of Programming Fundamentals',
        instructor: 'Dr. Michael Agbo Soli Tettey',
        grade: 'B+',
        grade_point: 3.5,
        credit_hour: 3,
      },

      {
        course: 'DCIT102 Computer Hardware Systems and Logic circuits',
        instructor: 'Dr. Abdullai Aziz Dwumfour',
        grade: 'B+',
        grade_point: 3.5,
        credit_hour: 3,
      },

      {
        course: 'MATH122 Calculus I',
        instructor: 'Dr. Seth ',
        grade: 'B+',
        grade_point: 3.5,
        credit_hour: 3,
      },

      {
        course: 'STAT112 Introduction to Statistics and Probability II',
        instructor: 'Dr. Enoch Sakyi Yeboah',
        grade: 'B+',
        grade_point: 3.5,
        credit_hour: 3,
      },

      {
        course: 'ECON102 Introduction to Economics II',
        instructor: 'Dr. Getrude Afful',
        grade: 'B+',
        grade_point: 3.5,
        credit_hour: 3,
      },

      {
        course: 'UGRC150 Academic Writing II',
        instructor: 'Dr. Albert Wornyo',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },
      // Add more courses as needed
    ],
  },
  {
    semester: '1st Semester Level 200',
    courses: [
      {
        course: 'DCIT201 Introduction to Programming I ',
        instructor: 'Mr. Paul Armah',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },

      {
        course: 'DCIT205 Multimedia and Webdesign',
        instructor: 'Dr. Nana Assyne',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },

      {
        course: 'DCIT203 Digital System and Logic Design',
        instructor: 'Mr. Abdullai Aziz Dwumfour',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },

      {
        course: 'DCIT207 Computer Organisation and Architecture',
        instructor: 'Prof. Johnson',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },

      {
        course: 'CBAS210 Academic Writing 2',
        instructor: 'Prof. Paul Boakye',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },

      {
        course: 'DCIT209 E-business and Architecture',
        instructor: 'Dr. Ntim',
        grade: 'N/A',
        grade_point: 'N/A',
        credit_hour: 3,
      },
      // Add courses for Level 200 as needed
    ],
  },
  // Add more semesters as needed
];

const GradeReportPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('All Semesters');

  const getCurrentDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  const calculateTotalGradePoint = (semesterCourses) => {
    let totalGradePoint = 0;
    let previousGradePoint = 0;

    semesterCourses.forEach((course) => {
      if (course.grade_point === 'N/A') {
        // Use the previous grade point if the current grade is not available
        totalGradePoint += previousGradePoint;
      } else {
        // Update the previous grade point if the current grade is available
        previousGradePoint = course.grade_point;
        totalGradePoint += course.grade_point;
      }
    });

    return totalGradePoint;
  };

  return (
    <div className="grade-report-page">
      <div className="student-info">
        <h3>{studentInfo.name}</h3>
        <p>Date of Birth: {studentInfo.dateOfBirth}</p>
        <p>Gender: {studentInfo.gender}</p>
        <p>Program of Study: {studentInfo.programOfStudy}</p>
        <p>Page Opened On: {getCurrentDate()}</p>
      </div>

      
      <h2>Grade Report</h2>

      <div className="filter-section">
        <label>Filter by Semester:</label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesterOptions.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      {gradeData.map((semesterData, index) => (
        <div
          key={index}
          className={
            selectedSemester === 'All Semesters' ||
            selectedSemester === semesterData.semester
              ? ''
              : 'hidden'
          }
        >
          <h3>{semesterData.semester}</h3>

          <div className="grade-table">
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Grade</th>
                  <th>Grade Point</th>
                  <th>Credit Hour</th>
                </tr>
              </thead>
              <tbody>
                {semesterData.courses.map((course, courseIndex) => (
                  <tr key={courseIndex}>
                    <td>{course.course}</td>
                    <td>{course.instructor}</td>
                    <td>{course.grade}</td>
                    <td>{course.grade_point}</td>
                    <td>{course.credit_hour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="total-grade-point">
            <p>Total Grade Point: {calculateTotalGradePoint(semesterData.courses)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradeReportPage;