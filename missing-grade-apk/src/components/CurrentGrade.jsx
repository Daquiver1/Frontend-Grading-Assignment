import React from 'react';
import './CurrentGrade.css';

class CurrentGrade extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      subjects: [
        { name: 'Mathematics', grade: 'A' },
        { name: 'English', grade: 'B' },
        { name: 'Bio-Chemistry', grade: 'A*' },
        { name: 'Physics', grade: 'A' },
        { name: 'Chemistry', grade: 'C' },
      ],
      missingGrades: ['Social Studies'],
    };
 }

 render() {
    return (
      <div className="currentGrade">
        <h1>Dashboard</h1>
        <h2>Overview of current grades</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Alerts or notifications for any missing grades</h2>
        <ul>
          {this.state.missingGrades.map((subject, index) => (
            <li key={index}>{subject} grade is missing.</li>
          ))}
        </ul>
      </div>
    );
 }
}

export default CurrentGrade;