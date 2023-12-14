import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Import the CSS file
const Dashboard = () => {
    const [currentGrades, setCurrentGrades] = useState([]);
    const [missingGrades, setMissingGrades] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate fetching current grades
        setTimeout(() => {
            setCurrentGrades([
                { course: 'DCIT101', grade: 'A' },
                { course: 'DCIT103', grade: 'B' },
                { course: 'DCIT104', grade: 'A' },
                { course: 'DCIT102', grade: '-' }
                // Add more courses as needed
            ]);
        }, 1000);

        // Simulate fetching missing grades
        setTimeout(() => {
            setMissingGrades([
                { course: 'Science' },
                // Add more missing grades as needed
            ]);
        }, 1500);
    }, []);

    useEffect(() => {
        // Simulate generating notifications for missing grades
        const alertsData = missingGrades.map((missingGrade) => ({
            type: 'missingGrade',
            message: `You have a missing grade for DCIT102. Please check and report.`,
        }));
        setNotifications(alertsData);
    }, [missingGrades]);

    return (
        <section className='dashboardsection'>
            <h2>Dashboard</h2>

            <div>
                <h3>Overview of Current Grades</h3>
                <ul>
                    {currentGrades.map((grade) => (
                        <li key={grade.course}>
                            {grade.course}: {grade.grade}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Notifications</h3>
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index}>{notification.message}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Dashboard;
