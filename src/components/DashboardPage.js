import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Footer from './FooterCode';



const initialChartData = {
  labels: ['First Semester(L100)', 'Second Semester(L100)', 'First Semester(L200)', 'Second Semester(L200)', 'First Semester(L300)'],
  datasets: [
    {
      label: 'GPA 3.5',
      data: [3.5, 3.8, 3.7, 4.0, 3.9],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const DashboardPage = () => {
  const [chartData] = useState(initialChartData);


  const chartOptions = {
    scales: {
      xAxes:{
        type: 'linear', 
        position: 'bottom',
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };


  const [missingGrades] = useState([
    { id: 1, course: 'DCIT 205', instructor: 'Dr Soli', expectedGrade: 'A', explanation: 'Forgot to submit assignment', status: 'Pending' },
  ]);

  const [recentCourses] = useState([
    { id: 1, course: 'CBAS', instructor: 'OPD', grade: 'B+' },
  ]);

  const [activeSemester, setActiveSemester] = useState('Fall 2023');

  const navigate = useNavigate();


  const handleLogout = () => {
    
    navigate('/login');
  };

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  useEffect(() => {
    
  }, []);

  console.log('Rendering DashboardPage');
  console.log('ChartData:', chartData);

  return (
    <div>
      <div className="dashboard-container">


        <div className="dashboard-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/Stephen.JPG" alt="Passport" style={{ width: '50px', height: '50px', borderRadius: '30%', marginRight: '10px' }} />
            <h1>Stephen</h1>
          </div>
          <button onClick={handleLogout} style={{ marginLeft: 'auto' }}>Back</button>
        </div>

        

        <div className="graphical-overview">
          <h2>Graphical Overview</h2>
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="missing-grades-section">
          <h2>Missing Grades</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Expected Grade</th>
                <th>Explanation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {missingGrades.map(grade => (
                <tr key={grade.id}>
                  <td>{grade.course}</td>
                  <td>{grade.instructor}</td>
                  <td>{grade.expectedGrade}</td>
                  <td>{grade.explanation}</td>
                  <td>{grade.status}</td>
                  <td>
                    <button onClick={() => console.log('Resolve clicked')}>Resolve</button>
                    <button onClick={() => console.log('View Details clicked')}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="recent-courses-section">
          <h2>Recent Courses</h2>
          <ul>
            {recentCourses.map(course => (
              <li key={course.id}>
                {course.course} - {course.instructor} - Grade: {course.grade}
              </li>
            ))}
          </ul>
        </div>

        <div className="semester-selector">
          <label>Select Semester:</label>
          <select value={activeSemester} onChange={e => setActiveSemester(e.target.value)}>
            <option value="Fall 2023">First Semester(L100)</option>
            <option value="Fall 2023">Second Semester(L100)</option>
            <option value="Fall 2023">First Semester(L200)</option>
            <option value="Fall 2023">Second Semester(L200)</option>
            <option value="Fall 2023">First Semester(L300)</option>
            <option value="Fall 2023">Second Semester(L300)</option>
            <option value="Fall 2023">First Semester(L400)</option>
            <option value="Fall 2023">Second Semester(L400)</option>
          </select>
        </div>

        <div className="search-section">
          <label>Search Courses:</label>
          <input type="text" placeholder="Enter course name" onChange={(e) => handleSearch(e.target.value)} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
