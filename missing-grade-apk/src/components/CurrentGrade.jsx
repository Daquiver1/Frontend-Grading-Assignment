import React from 'react';
import Navbar from './Navbar'
import Footer from './footer'
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

 componentDidMount() {
 if (this.state.missingGrades.length > 0) {
    window.alert("You might be missing a grade or 2.");
 }
}

 render() {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
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
      <Footer />
    </div>
    );
 }
}

export default CurrentGrade;