import React from 'react';
import './GradeReport.css';
import Navbar from '../navigation';
import { useState } from 'react';
import Footer from './Footer';

const GradeReport = () => {
  const [grades, setGrades] = useState([
    { subject: 'Academic Writing 2', grade: 'A' },
    { subject: 'Multimedia and Web Design', grade: 'B' },
    { subject: 'Computer Architecture Organization', grade: 'A+' },
    { subject: 'E-Business Architecture' , grade:'B+' },
    { subject: 'Programming Fundamentals', grade:'B' },
    { subject: 'Digital and Logic System Design', grade:'C'}

  ]);

  return (
    <div>
      <Navbar/>
    <div className="grade-report">
      <h2>Grade Report</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((entry, index) => (
            <tr key={index}>
              <td>{entry.subject}</td>
              <td>{entry.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  );
};

export default GradeReport;