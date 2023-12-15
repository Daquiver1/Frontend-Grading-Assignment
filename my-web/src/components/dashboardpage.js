import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const DashboardPage = () => {
    // Mock data for demonstration
    const grades = [
        { course: 'DCIT207', grade: 'A', status: 'Recorded' },
        { course: 'DCIT205', grade: 'B+', status: 'Missing' },
        { course: 'DCIT203', grade: 'A', status: 'Recorded' },
        { course: 'DCIT201', grade: 'A', status: 'Recorded' },
        { course: 'CBAS210', grade: 'A', status: 'Recorded' },
        { course: 'DCIT209', grade: 'A', status: 'Recorded' },
        // ... more courses
    ];

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <ul>
                    <li><Link to="/dashboard">DashboardPage</Link></li>
                    <li><Link to="/grade-report">GradeReportPage</Link></li>
                    <li><Link to="/missinggrade">MissingGrade</Link></li>
                    <li><Link to="/instructor-contact">InstructorContact</Link></li>
                    <li><Link to="/help-support">HelpAndSupport</Link></li>
                </ul>
            </div>
            <div className="content">
                <h2 className="mb-3">Student Dashboard</h2>
                <div className="alert alert-info">
                    Welcome to your dashboard! Here you can view your grades and report any missing ones.
                </div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index} className={grade.status === 'Missing' ? 'table-danger' : ''}>
                            <td>{grade.course}</td>
                            <td>{grade.grade}</td>
                            <td>{grade.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Link to="/missing-grade-form" className="btn btn-primary">
                    Report Missing Grade
                </Link>
            </div>
        </div>
    );
};

export default DashboardPage;
