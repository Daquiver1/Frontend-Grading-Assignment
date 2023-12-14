
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Dashboard.css';




const Dashboard = () => {

  const subjects = [
    { courseCode: 'DCIT103', courseName: 'Office Productivity Tools' },
    { courseCode: 'DCIT101', courseName: 'Introduction to Programming' },
    { courseCode: 'DCIT102', courseName: 'Computer Hardware Fundamentals'},
    { courseCode: 'DCIT104', courseName: 'Programming Fundamentals'},
    { courseCode: 'MATH121', courseName: 'Algebra and Trigonometry' },
    { courseCode: 'Math123', courseName: 'Vetors and Geometry'},
    { courseCode: 'Math126', courseName: 'Algebra & Trignometry 2'},
    { courseCode: 'Math122', courseName: 'Caluclus I'},
    { courseCode: 'Stat111', courseName: 'Introduction to Statistics and Probability'},
    { courseCode: 'Stat112', courseName: 'Introduction to Stat and Probability 2'},
    { courseCode: 'UGRC150', courseName: 'Critical Thinking'},
       
  ];

 
  const [grades, setGrades] = useState([
    
    { courseCode: 'DCIT103', grade: 85 },
    { courseCode: 'DCIT101', grade: 92 },
    { courseCode: 'DCIT102', grade: 85 },
    { courseCode: 'DCIT104', grade: 85 },
    { courseCode: 'MATH121', grade: 35 },
    { courseCode: 'Math123', grade: 40 },
    { courseCode: 'Math126', grade: 60 },
   
    { courseCode: 'Stat111', grade: 70 },
    { courseCode: 'Stat112', grade: 85 },
    { courseCode: 'UGRC150', grade: 80 },

 
  ]);

  useEffect(() => {
   
  }, []);

  
  const missingGradeSubjects = subjects.filter((subject) => !grades.some((grade) => grade.courseCode === subject.courseCode));

  return (
    <>
    <Navbar />
    
    <div className="dashboard-container">
      
      <h2>Dashboard</h2>
      <section>
        <h3>Subjects and Grades</h3>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => {
              const gradeObj = grades.find((grade) => grade.courseCode === subject.courseCode);
              const grade = gradeObj ? gradeObj.grade : 'N/A';
              return (
                <tr key={index}>
                  <td>{subject.courseCode}</td>
                  <td>{subject.courseName}</td>
                  <td>{grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {missingGradeSubjects.length > 0 && (
        <section>
          <h3>Missing Grades</h3>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {missingGradeSubjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.courseCode}</td>
                  <td>{subject.courseName}</td>
                  <td>Missing</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
       <Link to="/MissingGradeForm">
        <button>Find Missing Grades</button>
      </Link>
    </div>
    <Footer />
  </>
  );
};

export default Dashboard;
