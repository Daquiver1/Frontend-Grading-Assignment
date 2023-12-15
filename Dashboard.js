// DashboardPage.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import '../styles/Dashboard.css';

const DashboardPage = () => {

    const performanceChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Performance',
                data: [80, 75, 85, 90, 78, 88],
                fill: false,
                borderColor: '#007bff',
            },
        ],
    };

    const assignmentsChartData = {
        labels: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4'],
        datasets: [
            {
                label: 'Scores',
                data: [90, 85, 92, 88],
                backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'],
            },
        ],
    };

    // Mock data for recent assignments
    const recentAssignments = [
        { name: 'Assignment 4', course: 'Math', dueDate: '2023-03-15' },
        { name: 'Assignment 3', course: 'History', dueDate: '2023-03-10' },
        // Add more data as needed
    ];

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>

            <div className="performance-chart">
                <h3>Performance Chart</h3>
                <Line data={performanceChartData} />
            </div>

            <div className="assignments-chart">
                <h3>Assignments Chart</h3>
                <Bar data={assignmentsChartData} />
            </div>

            <div className="recent-assignments">
                <h3>Recent Assignments</h3>
                <ul>
                    {recentAssignments.map((assignment, index) => (
                        <li key={index}>
                            <strong>{assignment.name}</strong> - {assignment.course} (Due: {assignment.dueDate})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;
