import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './Dashboard.css'
import Footer from '../../components/Footer/Footer';


const students = [
  { code: 201, coursetitle: 'Programming I', credithour: 3, grade: 'A', gpt:12.0},
  { code: 203, coursetitle: 'Logic Circuits', credithour: 3, grade: 'B+', gpt:9.0},
  { code: 205, coursetitle: 'Multimedia and Web Development', credithour: 3, grade: 'A' , gpt:12},
  { code: 207, coursetitle: 'Computer Architecture', credithour: 3, grade: 'A', gpt:12},
  { code: 233, coursetitle: 'Calculus II', credithour: 3, grade: 'A' , gpt:12},
  { code: 210, coursetitle: 'Academic Writing II', credithour: 3, gpt:12}
];

const Dashboard = () => {
  const averageGrade = students.reduce((total, student) => total + (student.gpt || 0), 0) / students.reduce((total, student) => total + (student.credithour || 0), 0);

  useEffect(() => {
    const studentsWithMissingGrades = students.filter(student => student.grade === undefined);
    if (studentsWithMissingGrades.length > 0) {
      alert('You have missing grades!');
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
    <div className="dashboard">
      <h1 className='dash-head'>Student Grades Dashboard</h1>
      <p><span>Average Grade:</span> {averageGrade}</p>
      <div className="student-list">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Title</th>
              <th>Credit Hour</th>
              <th>Grade</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.code}>
                <td>{student.code}</td>
                <td>{student.coursetitle}</td>
                <td>{student.credithour}</td>
                <td>{student.grade || 'N/A'}</td>
                <td>{student.gpt || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Dashboard;

