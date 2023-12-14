import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "./GradeReport.css";
function GradeReport() {
  const pageContent = (
    <div className="grade-report-header">
      <h1>Grade Report</h1>
      <div className="grade-report-container">
        <div className="level-container">
          <div className="header-box">
            <h2>Level 100</h2>
          </div>
          <div className="level-header">
            <h3>First Semester</h3>
          </div>
          <div className="course-and-grade-header">
            <h4>Courses</h4>
            <h4>Grades</h4>
          </div>
          <div className="courses-and-grades-container">
            <p>UGRC 150 Critical Thinking and Practical Reasoning</p>
            <p>A</p>
            <p>MATH 121 Algebra and Trigonometry</p>
            <p>A</p>
            <p>MATH 123 Vectors and Geometry</p>
            <p>
              B <sup>+</sup>
            </p>
            <p>DCIT 101 Introduction to Computer Science</p>
            <p>A</p>
            <p>DCIT 103 Office Productivity Tools</p>
            <p>B</p>
            <p>STAT 111 Introduction to Statistics and Probability I</p>
            <p>A</p>
          </div>
        </div>
        <div className="level-container">
          <div className="level-header">
            <h3>Second Semester</h3>
          </div>
          <div className="course-and-grade-header">
            <h4>Courses</h4>
            <h4>Grades</h4>
          </div>
          <div className="courses-and-grades-container">
            <p>UGRC 110 Academic Writing I</p>
            <p>A</p>
            <p>UGRC 131-136 Understanding Human Society</p>
            <p>C</p>
            <p>MATH 122 Calculus I</p>
            <p>
              C <sup>+</sup>
            </p>
            <p>MATH 126 Algebra and Geometry</p>
            <p>A</p>
            <p>STAT 112 Introduction to Statistics and Probability II</p>
            <p>B</p>
            <p>DCIT 104 Programming Fundamentals</p>
            <p>A</p>
            <p>DCIT 102 Computer Hardware Fund. and Circuits</p>
            <p>C</p>
          </div>
        </div>
        <div className="level-container">
          <div className="header-box">
            <h2>Level 200</h2>
          </div>
          <div className="level-header">
            <h3>First Semester</h3>
          </div>
          <div className="course-and-grade-header">
            <h4>Courses</h4>
            <h4>Grades</h4>
          </div>
          <div className="courses-and-grades-container">
            <p>UGRC 210 Academic Writing II</p>
            <p>A</p>
            <p>DCIT 201 Programming I</p>
            <p>A</p>
            <p>DCIT 203 Digital and Logic Systems Design</p>
            <p>A</p>
            <p>DCIT 205 Multi Media and Web Design</p>
            <p>A</p>
            <p>DCIT 207 Computer Architecture & Organisation</p>
            <p>A</p>
            <p>MATH 223 Calculus II</p>
            <p>A</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Navbar />
      <HeroSection pageContent={pageContent} />
    </>
  );
}

export default GradeReport;
