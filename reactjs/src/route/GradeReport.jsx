import React from 'react';
import './GradeReport.css'

const subjects = [
 { id: 1, name: 'CRITICAL THINKING', grade: 'A' },
 { id: 2, name: 'DCIT 201', grade: 'B' },
 { id: 3, name: 'DCIT 203', grade: 'A' },
 { id: 4, name: 'DCIT 205', grade: 'C' },
 { id: 5, name: 'DCIT 207', grade: 'B' },
 { id: 6, name: 'DCIT 209', grade: 'A' },
 { id: 7, name: 'CBAS', grade: 'C' },
];

const GradeReport = () => {
 return (
    <div className="containerx">
      <h1>Grade Report</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default GradeReport;