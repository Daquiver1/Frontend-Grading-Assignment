
import { useState, useEffect } from 'react';
import './DashboardPage.css'; // Import the stylesheet

const DashboardPage = () => {

    const [grades, setGrades] = useState([]);
    const [missingGrades, setMissingGrades] = useState([]);

    // Simulate fetching data from the backend
    useEffect(() => {
        // Mock data for grades
        const mockGrades = [
            { course: 'DCIT 201', grade: 'A' },
            { course: 'DCIT 203', grade: 'B+' },
            { course: 'DCIT 205', grade: 'A-' },
            { course: 'DCIT 207', grade: 'B' },
            { course: 'DCIT 209', grade: 'A+' },
            { course: 'CBAS 210', grade: 'A-' },

            // ... add more courses
        ];

        // Mock data for missing grades (randomly trigger missing grades)
        const randomCourseIndex = Math.floor(Math.random() * mockGrades.length);
        const randomMissingGrade = mockGrades[randomCourseIndex];

        setGrades(mockGrades);
        setMissingGrades(randomMissingGrade ? [randomMissingGrade] : []);
    }, []);

    return (


        <div className="dashboard-container">
            {  /* Sidebar */}
            <aside className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-item" >🏠 Home</li>
                    <li className="sidebar-item active">📚 View Grades</li>
                    <li className="sidebar-item">📢 Report Missing Grades</li>
                    <li className="sidebar-item">✉️ Contact Us</li>
                </ul>
            </aside>



            <section className="overview-section">
                <header className="header">
                    <h1 className="main-heading">📊 Student Dashboard</h1>
                </header>

                {/* Display Student's Current Grades */}
                <div className="grades-container">
                    <h2 className="section-heading">Current Grades</h2>
                    <ul>
                        {grades.map((grade, index) => (
                            <li key={index}>
                                <strong>{grade.course}</strong>: {grade.grade}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Alerts for Missing Grades */}
                {missingGrades.length > 0 && (
                    <div className="alert-container">
                        <h2 className="section-heading">🚨 Missing Grades Alert!</h2>
                        <p>You have missing grades for the following course:</p>
                        <ul>
                            {missingGrades.map((missingGrade, index) => (
                                <li key={index}>
                                    <strong>{missingGrade.course}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2023 Student Dashboard. All rights reserved.</p>
            </footer>

        </div>
    );
    export default DashboardPage;