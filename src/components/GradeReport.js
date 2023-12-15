import React, { useState } from 'react';
import './GradeReport.css'; // Import your CSS for styling

const GradeReport = () => {
  const [selectedLevel, setSelectedLevel] = useState(100);
  const [selectedSemester, setSelectedSemester] = useState('First Semester');

  const levelData = {
    100: {
      'First Semester': [
        { course: 'UGRC 150', title: 'Critical Thinking and Practical Reasoning', grade: 'A' },
        { course: 'MATH 121', title: 'Algebra and Trigonometry', grade: 'A' },
        { course: 'MATH 123', title: 'Vectors and Geometry', grade: 'B+' },
        { course: 'DCIT 101', title: 'Introduction to Computer Science', grade: 'B+' },
        { course: 'DCIT 103', title: 'Office Productivity Tools', grade: 'B+' },
        { course: 'STAT 111', title: 'Introduction to Statistics and Probability I', grade: 'B+' },
      ],
      'Second Semester': [
        { course: 'UGRC 110', title: 'Academic Writing I', grade: 'B+' },
        { course: 'UGRC 131-136', title: 'Understanding Human Society', grade: 'B+' },
        { course: 'MATH 122', title: 'Calculus I', grade: 'B+' },
        { course: 'MATH 126', title: 'Algebra and Geometry', grade: 'C+' },
        { course: 'STAT 112', title: 'Introduction to Statistics and Probability II', grade: 'B' },
        { course: 'DCIT 104', title: 'Programming', grade: 'B+' },
        { course: 'DCIT 102', title: 'Computer Hardware Fundamental and Circuits', grade: 'B+' },
      ],
    },
    200: {
      'First Semester': [
        { course: 'CBAS 210', title: 'Academic Writing II', grade: 'B+' },
        { course: 'DCIT 201', title: 'Programming I', grade: 'B+' },
        { course: 'DCIT 203', title: 'Digital and Logic Systems Design', grade: 'B+' },
        { course: 'DCIT 205', title: 'Multi Media and Web Design', grade: 'B+' },
        { course: 'DCIT 207', title: 'Computer Architecture & Organisation', grade: 'B+' },
        { course: 'MATH 223', title: 'Calculus II', grade: 'B+' },
      ],
      'Second Semester': [
        { course: 'DCIT 202', title: 'Mobile Application Development', grade: 'B+' },
        { course: 'DCIT 204', title: 'Data Structures & Algorithm I ', grade: 'B+' },
        { course: 'UGRC 220', title: 'Introduction to African Studies', grade: 'B+' },
        { course: 'DCIT 208', title: 'Software Engineering', grade: 'B+' },
        { course: 'DCIT 212', title: 'Numerical and Computational Methods', grade: 'B+' },
        // Add more courses as needed
      ],
    },
    300: {
      'First Semester': [
        { course: 'DCIT 301', title: 'Operating Systems', grade: 'B+' },
        { course: 'DCIT 303', title: 'Computer Networks', grade: 'B+' },
        { course: 'DCIT 305', title: 'Database Fundamentals', grade: 'B+' },
        { course: 'DCIT 313', title: 'Introduction to Artificial Intelligence', grade: 'B+' },
        { course: 'MATH 359', title: 'Discrete Mathematics', grade: 'B+' },
        // Add more courses as needed
      ],
      'Second Semester': [
        { course: 'DCIT 400', title: 'Project', grade: 'B+' },
        { course: 'DCIT 401', title: 'Social, Legal, Ethical and Professional Issues', grade: 'B+' },
        { course: 'DCIT 407', title: 'Image Processing', grade: 'B+' },
        { course: 'DCIT 306', title: 'Cloud Computing Numerical and Computational Methods', grade: 'B+' },
        { course: 'DCIT 316', title: 'Computational models for Social Media Mining', grade: 'B+' },
        // Add more courses as needed
      ],
    },
    400: {
      'First Semester': [
        { course: 'DCIT 400', title: 'Project', grade: 'B+' },
        { course: 'DCIT 401', title: 'Social, Legal, Ethical and Professional Issues', grade: 'B+' },
        { course: 'DCIT 407', title: 'Image Processing' , grade: 'B+' },
        // Add more courses as needed
      ],
      'Second Semester': [
        { course: 'DCIT 400', title: 'Project' , grade: 'B+' },
        { course: 'DCIT 402', title: 'Management Principles in Computing', grade: 'B+' },
        { course: 'DCIT 418', title: 'Systems and Network Security', grade: 'B+' },
        { course: 'DCIT 428', title: 'Wireless Systems and Networks', grade: 'B+' },
        // Add more courses as needed
      ],
    },
  };

  const levels = Object.keys(levelData);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grade-report-page">
      <h2>Grade Report</h2>

      {/* Filter Options */}
      <div className="filter-options">
        <label htmlFor="levelFilter">Filter by Level:</label>
        <select
          id="levelFilter"
          onChange={(e) => setSelectedLevel(Number(e.target.value))}
          value={selectedLevel}
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          ))}
        </select>

        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          onChange={(e) => setSelectedSemester(e.target.value)}
          value={selectedSemester}
        >
          {levelData[selectedLevel] && Object.keys(levelData[selectedLevel]).map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      {/* Display Course Information */}
      <div className="course-list">
        {levelData[selectedLevel] && levelData[selectedLevel][selectedSemester].map((course, index) => (
          <div key={index} className="course-item">
            <p><strong>Course:</strong> {course.course}</p>
            <p><strong>Title:</strong> {course.title}</p>
            <p><strong>Grade:</strong> {course.grade}</p>
          </div>
        ))}
      </div>
    
        <div>
        <button className="print-button" onClick={handlePrint}>
          Print
        </button>
        </div>
       
        </div> 
    
  );
};

export default GradeReport;
