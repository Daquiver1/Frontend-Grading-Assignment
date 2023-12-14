import React from 'react';
import './GradeReport.css';

const AppGradeReport = () => {
 const studentData = {
    name: 'Kofi Asare',
    gpa: 3.4,
    cgpa: 3.5,
    semesters: [
      {
        number: 1,
        gpa: 3.8,
        subjects: [
          { name: 'Algebra And Trigonometry', grade: 'A' },
          { name: 'Introduction To Statistics And Probablity', grade: 'B' },
          { name: 'Vectors And Geometry', grade: 'A' },
          { name: 'Introduction To Computer Science', grade: 'A' },
          { name: 'Office Productivity Tool', grade: 'A' },
        ],
      },
      {
        number: 2,
        gpa: 3.5,
        subjects: [
          { name: 'Introduction To Statistics And Probability II', grade: 'B' },
          { name: 'Calculus I', grade: 'A' },
          { name: 'Algebra And Geometry', grade: 'B' },
          { name: 'Programming Fundamentals', grade: 'A' },
          { name: 'Computer Hardware Fundamentals And Circuits', grade: 'A' },
        ],
      },
      {
        number: 3,
        gpa: 3.7,
        subjects: [
          { name: 'Programming I', grade: 'A' },
          { name: 'Calculus II', grade: 'B' },
          { name: 'Multi-Media And Web Design', grade: 'A' },
          { name: 'Computer Organization And Architecture', grade: 'A' },
          { name: 'Digital And Logic Systems Design', grade: 'A' },
        ],
      },
    ],
 };

 return (
    <div className="report-container">
      <h1> Grade Report</h1>
      <h2>GPA: {studentData.gpa}</h2>
      <h2>CGPA: {studentData.cgpa}</h2>
      {studentData.semesters.map((semester, index) => (
        <div key={index} className="semester-container">
          <h3>Semester {semester.number} - GPA: {semester.gpa}</h3>
          <div className="subjects-container">
            {semester.subjects.map((subject, idx) => (
              <div key={idx} className="subject-container">
                <p>{subject.name}</p>
                <p>{subject.grade}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
 );
};

export default AppGradeReport;