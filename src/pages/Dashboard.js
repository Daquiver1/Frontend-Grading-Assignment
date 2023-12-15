import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { FaBook, FaChartBar, FaExclamationCircle } from 'react-icons/fa'; // Example icons from react-icons library

const Dashboard = () => {
  const [gradesData, setGradesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sampleGradesData = [
          { id: 1, subject: 'Game Engine Architecture', grade: null },
          { id: 2, subject: 'Database Management Administration', grade: 88 },
          { id: 3, subject: 'Data Structures & Algorithm I', grade: 90 },
          { id: 4, subject: 'Systems Administration', grade: null },
          { id: 5, subject: 'Operating Systems', grade: 80 },
          { id: 6, subject: 'Information Security Management', grade: 90 },
          { id: 7, subject: 'Computer Vision', grade: 84 },
        ];

        setGradesData(sampleGradesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAverageGrade = () => {
    const totalGrades = gradesData.reduce((acc, grade) => acc + (grade.grade || 0), 0);
    return (totalGrades / gradesData.length).toFixed(2);
  };

  const calculateGradeLetter = averageGrade => {
    if (!averageGrade) return 'N/A';
    if (averageGrade >= 80) return 'A';
    if (averageGrade >= 75) return 'B+';
    if (averageGrade >= 65) return 'B';
    if (averageGrade >= 60) return 'C+';
    if (averageGrade >= 55) return 'C';
    if (averageGrade >= 50) return 'D+';
    if (averageGrade >= 45) return 'D';
    if (averageGrade >= 40) return 'E';
    return 'F';
  };

  const countMissingGrades = () => {
    return gradesData.filter(grade => grade.grade === null).length;
  };

  const handleReportMissingGrade = () => {
    console.log('Report a missing grade');
  };

  return (
    <div>
      <Header />
      <div className="dashboard-page">
        <Sidebar />
        <div className="dashboard-container-custom">
          <div className="header-custom">
            <h1>Welcome to Your Dashboard</h1>
          </div>

          <div className="overview-custom">
            <div className="grades-summary-custom">
              <div className="icon-custom">
                <FaBook />
              </div>
              <div className="content-custom">
                <h2>Current Grades</h2>
                <p>Average Grade: {calculateGradeLetter(parseFloat(calculateAverageGrade()))}</p>
              </div>
            </div>

            <div className="progress-bars-custom">
              <div className="icon-custom">
                <FaChartBar />
              </div>
              <div className="content-custom">
                <h2>Progress</h2>
                <div className="progress-custom">
                  <div
                    className="progress-bar-custom"
                    style={{
                      width: `${parseFloat(calculateAverageGrade())}%`,
                      backgroundColor: `rgba(52, 152, 219, ${parseFloat(calculateAverageGrade()) / 100})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="alerts-custom">
              <div className="icon-custom">
                <FaExclamationCircle />
              </div>
              <div className="content-custom">
                <h2>Alerts</h2>
                <p>Missing Grades: {countMissingGrades()}</p>
                <Link to ="/Report">
                    {countMissingGrades() > 0 && (
                      <button onClick={handleReportMissingGrade}>Report Missing Grade(s)</button>
                    )}
                </Link>
              </div>
            </div>
          </div>

          <div className="results-table">
            <h2>2022/2023 Academic Year(Second Semeter)</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {gradesData.map(grade => (
                  <tr key={grade.id}>
                    <td>{grade.subject}</td>
                    <td>{grade.grade !== null ? `${grade.grade}%` : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
