import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LevelContainer from "../components/LevelContainer";
import "./GradeReport.css";

function GradeReport() {
  const levels = [
    {
      level: "Level 100",
      semesters: [
        {
          semester: "First Semester",
          courses: [
            {
              course: "UGRC 150 Critical Thinking and Practical Reasoning",
              grade: "A",
            },
            {
              course: "MATH 121 Algebra and Trigonometry",
              grade: "A",
            },
            {
              course: "MATH 123 Vectors and Geometry",
              grade: "B+",
            },
            {
              course: "DCIT 101 Introduction to Computer Science",
              grade: "A",
            },
            {
              course: "DCIT 103 Office Productivity Tools",
              grade: "B",
            },
            {
              course: "STAT 111 Introduction to Statistics and Probability I",
              grade: "A",
            },
          ],
        },
        {
          semester: "Second Semester",
          courses: [
            { course: "UGRC 110 Academic Writing I", grade: "A" },
            { course: "UGRC 131-136 Understanding Human Society", grade: "C" },
            { course: "MATH 122 Calculus I", grade: "C+" },
            {
              course: "STAT 112 Introduction to Statistics and Probability II",
              grade: "A",
            },
            { course: "DCIT 104 Programming Fundamentals", grade: "B" },
            {
              course: "DCIT 102 Computer Hardware Fund. and Circuits",
              grade: "C",
            },
          ],
        },
      ],
    },
    {
      level: "Level 200",
      semesters: [
        {
          semester: "First Semester",
          courses: [
            {
              course: "UGRC 210 Academic Writing II",
              grade: "A",
            },
            {
              course: "DCIT 201 Programming I",
              grade: "A",
            },
            {
              course: "DCIT 203 Digital and Logic Systems DesignI",
              grade: "A",
            },
            {
              course: "DCIT 205 Multi Media and Web Design",
              grade: "A",
            },
            {
              course: "DCIT 207 Computer Architecture & Organisation",
              grade: "A",
            },
            {
              course: "MATH 223 Calculus II",
              grade: "A",
            },
          ],
        },
        {
          semester: "Second Semester",
          courses: [
            { course: "UGRC 220 Introduction to African Studies", grade: "A" },
            { course: "DCIT 202 Mobile Application Development", grade: "B+" },
            { course: "DCIT 204 Data Structures & Algorithm I", grade: "B+" },
            { course: "DCIT206 Systems Administration", grade: "A" },
            { course: "DCIT208 Software Engineering", grade: "B" },
            {
              course: "DCIT 212 Numerical and Computational Methods",
              grade: "A",
            },
          ],
        },
      ],
    },
    {
      level: "Level 300",
      semesters: [
        {
          semester: "First Semester",
          courses: [
            {
              course: "DCIT 301 Operating Systems",
              grade: "A",
            },
            {
              course: "DCIT 303 Computer Networks",
              grade: "A",
            },
            {
              course: "DCIT 305 Database Fundamentals",
              grade: "A",
            },
            {
              course: "DCIT 313 Introduction to Artificial Intelligence",
              grade: "A",
            },
            {
              course: "MATH 359 Discrete Mathematics",
              grade: "A",
            },
            {
              course: "DCIT 307 Mini-Project",
              grade: "A",
            },
            {
              course: "DCIT 309 Embedded Systems and IoT",
              grade: "C",
            },
          ],
        },
        {
          semester: "Second Semester",
          courses: [
            { course: "DCIT 400 Project", grade: "A" },
            {
              course: "DCIT 401 Social, Legal, Ethical and Professional Issues",
              grade: "B+",
            },
            { course: "DCIT 407 Image Processing", grade: "B" },
            { course: "DCIT 311 Machine Learning", grade: "C+" },
            {
              course: "DCIT 316 Computational models for Social Media Mining",
              grade: "B",
            },
            {
              course: "DCIT 212 Numerical and Computational Methods",
              grade: "A",
            },
          ],
        },
      ],
    },
    {
      level: "Level 400",
      semesters: [
        {
          semester: "First Semester",
          courses: [
            {
              course: "DCIT 403 Designing Intelligent Agents",
              grade: "A",
            },
            {
              course:
                "DCIT 405 Statistical Models and Methods for Data Science",
              grade: "A",
            },
            {
              course: "DCIT 411 Bioinformatics",
              grade: "A",
            },
            {
              course: "DCIT 417 Network Performance Analysis and Modeling",
              grade: "A",
            },
            {
              course: "DCIT 423 Network Servers and Infrastructure",
              grade: "A",
            },
            {
              course: "DCIT 412 Computer Vision",
              grade: "A",
            },
          ],
        },
        {
          semester: "Second Semester",
          courses: [
            { course: "DCIT 408 Compilers", grade: "A" },
            {
              course: "DCIT 402 Management Principles in Computing",
              grade: "B+",
            },
            { course: "DCIT 418 Systems and Network Security", grade: "B" },
            { course: "DCIT 428 Wireless Systems and Networks", grade: "C+" },
            { course: "DCIT 404 Advanced Databases", grade: "B" },
            {
              course: "DCIT 406 Advanced Computer Networks",
              grade: "A",
            },
          ],
        },
      ],
    },
  ];

  const pageContent = (
    <>
      <div className="grade-report-header">
        <h1>Grade Report</h1>
      </div>
      <div className="grade-report-container">
        {levels.map((levelData, index) => (
          <LevelContainer key={index} levelData={levelData} />
        ))}
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <HeroSection pageContent={pageContent} />
    </>
  );
}

export default GradeReport;
