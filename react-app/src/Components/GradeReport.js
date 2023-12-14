import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const GradeReport = () => {
  const courses = [
    { courseCode: 'DCIT103', courseName: 'Office Productivity Tools' },
    { courseCode: 'DCIT101', courseName: 'Introduction to Programming' },
    { courseCode: 'DCIT102', courseName: 'Computer Hardware Fundamentals'},
    { courseCode: 'DCIT104', courseName: 'Programming Fundamentals'},
    { courseCode: 'MATH121', courseName: 'Algebra and Trigonometry' },
    { courseCode: 'Math123', courseName: 'Vectors and Geometry'},
    { courseCode: 'Math126', courseName: 'Algebra & Trigonometry 2'},
    { courseCode: 'Math122', courseName: 'Calculus I'},
    { courseCode: 'Stat111', courseName: 'Introduction to Statistics and Probability'},
    { courseCode: 'Stat112', courseName: 'Introduction to Stat and Probability 2'},
    { courseCode: 'UGRC150', courseName: 'Critical Thinking'},
  ];

  
  const [studentGrades, setStudentGrades] = useState([]);

 
  useEffect(() => {
    const generateRandomGrades = () => {
      const grades = [];
      for (let i = 1; i <= 100; i++) {
        const studentGrades = courses.map(course => ({
          studentId: i,
          courseCode: course.courseCode,
          grade: getRandomGrade(),
        }));
        grades.push(...studentGrades);
      }
      setStudentGrades(grades);
    };

    const getRandomGrade = () => {
      const grades = ['A', 'B', 'C', 'D', 'F'];
      return grades[Math.floor(Math.random() * grades.length)];
    };

    generateRandomGrades();
  }, [courses]);
  return (
    <>
    <Navbar />
    <div className="grade-report-page">
      <h1 className="page-title">Grade Report Page</h1>

      {/* Display student grades for each course */}
      {courses.map(course => (
        <div key={course.courseCode} className="course-section">
          <h2 className="course-title">{course.courseName}</h2>
          <table className="grades-table">
            <thead>
              <tr>
                <th className="header-cell">Student ID</th>
                <th className="header-cell">Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentGrades
                .filter(grade => grade.courseCode === course.courseCode)
                .map(grade => (
                  <tr key={`${grade.studentId}-${grade.courseCode}`} className="grade-row">
                    <td className="data-cell">{grade.studentId}</td>
                    <td className="data-cell">{grade.grade}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
 
    <Footer />
    </>
    
  )
}

export default GradeReport