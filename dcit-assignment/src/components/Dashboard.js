import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Footer from './Footer';
import './Dashboard.css';

const Dashboard = () => {
  const mockGrades = [
    { id: 1, subject: 'DCIT201', grade: 'A' },
    { id: 2, subject: 'DCIT203', grade: 'B' },
    { id: 4, subject: 'DCIT207', grade: 'A' },
    { id: 5, subject: 'MATH223', grade: 'B' },
  ];

  const mockMissingGrades = [
    { id: 3, subject: 'DCIT205', grade: 'C' },
    { id: 6, subject: 'CBAS210', grade: 'C' },
  ];

  const mockAssignments = [
    { id: 1, title: 'React Quiz', dueDate: '2023-12-23' },
    { id: 2, title: 'Calculus Quiz', dueDate: '2023-12-18' },
  ];

  const mockProgressData = [40, 10, 20, 60, 80, 100];

  const progressChartRef = useRef(null);

  useEffect(() => {
    const progressChart = new Chart(progressChartRef.current, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
          label: 'Progress',
          data: mockProgressData,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });

    // Clean up the chart when the component is unmounted
    return () => {
      progressChart.destroy();
    };
  }, [mockProgressData]);

  return (
    <div>
      <div className='page-body-dashboard'>
        <div className='welcome'>
          Your Dashboard
        </div>
        <div className="dashboard">
          <div className="overview">
            <h2>Overview</h2>
            <div className="grades">
              <h3>Current Grades</h3>
              <ul>
                {mockGrades.map((grade) => (
                  <li key={grade.id}>
                    <span className="subject">{grade.subject}:</span> {grade.grade}
                  </li>
                ))}
              </ul>
            </div>

            <div className="alerts">
              <h3>Alerts</h3>
              {mockMissingGrades.length === 0 ? (
                <p>No missing grades alerts.</p>
              ) : (
                <ul>
                  {mockMissingGrades.map((alert) => (
                    <li key={alert.id}>
                      <span className="subject">{alert.subject}:</span> <span style={{color:'red'}}>Missing Grade!</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="extra-components">
            <div className="recent-assignments">
              <h2>Recent Assignments</h2>
              <ul>
                {mockAssignments.map((assignment) => (
                  <li key={assignment.id}>
                    <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
                  </li>
                ))}
              </ul>
            </div>

            <div className="progress-chart">
              <h2>Progress Chart</h2>
              <div className="chart">
                 <canvas ref={progressChartRef} width="400" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;