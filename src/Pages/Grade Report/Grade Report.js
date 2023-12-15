import React from 'react';

const GradeReport = () => {
  const students = [
    { name: 'John Doe', grade: 'A' },
    { name: 'Jane Smith', grade: 'B' },
    { name: 'Bold Johnson', grade: 'C' },
    { name: 'Jane Johnson', grade: 'C' },
    { name: 'Ben Johnson', grade: 'C' },
    { name: 'Bill Johnson', grade: 'C' },
    { name: 'Ben Aaron', grade: 'C' },
    { name: 'B.Johnson', grade: 'C' },
    { name: 'Steve Johns', grade: 'C' },
    { name: 'Steve Johns', grade: 'C' },
    { name: 'Wendy Johns', grade: 'C' },
    { name: 'Bob Johnson', grade: 'C' },
    { name: 'Love Johnson', grade: 'C' },
    { name: 'Dan Yawson', grade: 'C' },
    { name: 'Emma Watson', grade: 'C' },
    { name: 'Bob Johnson', grade: 'B' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'F' },
    { name: 'Bob Johnson', grade: 'B' },
    { name: 'Bob Johnson', grade: 'E' },
    { name: 'Bob Johnson', grade: 'A' },
    { name: 'Bob Johnson', grade: 'F' },
    

    // Add more students here
  ];

  return (
    <div>
      <h1>Grade Report</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default GradeReport