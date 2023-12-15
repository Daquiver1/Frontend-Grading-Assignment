import React from 'react';
import {Link} from 'react-router-dom'
import './gradepoint.css'; 

class GradePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { name: 'Course 1',assessment:'28', exam:'85', result:'Excellent', semester:'Semester One', grade: 'A', credits: '3'},
        { name: 'Course 2',assessment:'22', exam:'75', result:'Very Good', semester:'Semester One', grade: 'B', credits: '3'},
        { name: 'Course 3',assessment:'25', exam:'80', result:'Excellent', semester:'Semester Two', grade: 'A-', credits: '3'},
        { name: 'Course 4',assessment:'17', exam:'66', result:'Pass'     , semester:'Semester One', grade: 'C+', credits: '3'},
        { name: 'Course 5',assessment:'30', exam:'90', result:'Excellent', semester:'Semester Two', grade: 'A+', credits: '3'},
        { name: 'Course 6',assessment:'20', exam:'70', result:'Good',      semester:'Semester Two', grade: 'C', credits: '3'},
        { name: 'Course 7',assessment:'28', exam:'90', result:'Excellent', semester:'Semester One', grade: 'A+', credits: '3'},
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/gradepoint">Grade Page</Link></li>
            <li><Link to="/contact">Lecturer's Contact</Link></li>
            <li><Link to="/help">Help and Support</Link></li>
          </ul>
        </div>
  
      <div className="grade-container">
        <h1 className='headie'>Grade Page</h1>
        <table className="grade-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Credits</th>
              <th>Internal Assessment</th>
              <th>End of Term Examination</th>
              <th>Final Result</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.credits}</td>
                <td>{course.assessment}</td>
                <td>{course.exam}</td>
                <td>{course.result}</td>
                <td>{course.grade}</td>
                <td>{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div> 
    );
  }
}

export default GradePage;