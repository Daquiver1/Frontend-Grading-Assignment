import React from 'react';
import '../Styles/GradeReportPage.css';

const GradeReportPage = () => {
 const semesters = [
    {
      name: 'Semester 1',
      subjects: [
        { name: 'DCIT 101', grade: 'A' , },
        { name: 'DCIT 104', grade: 'B' },
        { name: 'STAT 111', grade: 'B+' },
        { name: 'MATH 121', grade: 'B' },
        { name: 'MATH 123', grade: 'A' },
        { name: 'UGRC 110', grade: 'C+' },

      ],
    },
    {
      name: 'Semester 2',
      subjects: [
        { name: 'DCIT 102', grade: 'B' },
        { name: 'STAT 112', grade: 'B+' },
        { name: 'MATH 122', grade: 'A' },
        { name: 'MATH 126', grade: 'C' },
        { name: 'UGRC 120', grade: 'A' },      ],
    },
 ];

 return (
    <div className="container">
      <h2>Grade Report</h2>
      <h3>First Year</h3>
      {semesters.map((semester, index ) => (
        <div key={index}>
          <h3>{semester.name}</h3>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, subjectIndex) => (
                <tr key={subjectIndex}>
                 <td>{subject.name}</td>
                 <td>{subject.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
 );
};

export default GradeReportPage;