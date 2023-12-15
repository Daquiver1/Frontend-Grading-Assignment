import { useState } from 'react';
import './GradeReport.css'; // Import the stylesheet

const GradeReport = () => {
    // Mock data for grades (replace with actual data from your backend)
    const [grades] = useState([
        { course: 'DCIT 201', grade: 'A', assignments: ['Homework 1', 'Quiz 1', 'Final Exam'], semester: 'LEVEL 200' },
        { course: 'DCIT 203', grade: 'B+', assignments: ['Essay 1', 'Midterm Exam'], semester: 'LEVEL 200' },
        { course: 'DCIT 205', grade: 'A-', assignments: ['Lab Report', 'Final Project'], semester: 'FIRST SEMESTER' },
        { course: 'DCIT 207', grade: 'B', assignments: ['Lab Work', 'Midterm Exam'], semester: 'FIRST SEMESTER' },
        { course: 'NONE', grade: '-', assignments: ['Programming Project', 'Final Exam'], semester: 'SECOND SEMESTER' },
        { course: 'DCIT 209', grade: 'A+', assignments: ['Essay 2', 'Book Review'], semester: 'LEVEL 200' },
        { course: 'DCIT 102', grade: 'A', assignments: ['Lab Report', 'Research Paper'], semester: 'LEVEL 100 FIRST SEMESTER' },
        { course: 'ECON 102', grade: 'B-', assignments: ['Case Study', 'Midterm Exam'], semester: 'LEVEL 100 FIRST SEMESTER' },
        { course: 'UGRC 150', grade: 'C+', assignments: ['Behavioral Analysis', 'Final Project'], semester: 'LEVEL 100 FIRST SEMESTER' },
        { course: 'DCIT 201', grade: 'A', assignments: ['Homework 1', 'Quiz 1', 'Final Exam'], semester: 'LEVEL 100 SECOND SEMESTER' },
        { course: 'DCIT 201', grade: 'A', assignments: ['Homework 1', 'Quiz 1', 'Final Exam'], semester: 'LEVEL 100 SECOND SEMESTER' },
        { course: 'DCIT 201', grade: 'A', assignments: ['Homework 1', 'Quiz 1', 'Final Exam'], semester: 'LEVEL 100 SECOND SEMESTER' },
        { course: 'DCIT 201', grade: 'A', assignments: ['Homework 1', 'Quiz 1', 'Final Exam'], semester: 'LEVEL 200' },

        // { course: 'Spanish', grade: 'A', assignments: ['Conversation Practice', 'Written Exam'], semester: 'Fall 2022' },
        // Add more courses and grades as needed
    ]);

    const [selectedSemester, setSelectedSemester] = useState('');

    const handleSemesterFilter = (semester) => {
        setSelectedSemester(semester);
    };

    const SideBar = () => {
        <aside className="sidebar">
            <ul className="sidebar-nav">
                <li className="sidebar-item">🏠 Home</li>
                <li className="sidebar-item active">📚 View Grades</li>
                <li className="sidebar-item">📢 Report Missing Grades</li>
                <li className="sidebar-item">✉️ Contact Us</li>
            </ul>
        </aside>
    }
    return (
        <div className="dashboard-container">

            <SideBar />
            {/* Main Content */}
            <main className="main-content">
                <header className="user-header">
                    <h1>Hey, Nana Osei!</h1>
                </header>

                <section className="grades-section">
                    <h1 className="main-heading">📚 View Your Grades</h1>

                    {/* Semester Filter Section */}
                    <div className="filter-section">
                        <label htmlFor="semesterFilter">Filter by Semester:</label>
                        <select
                            id="semesterFilter"
                            onChange={(e) => handleSemesterFilter(e.target.value)}
                            value={selectedSemester}
                        >
                            <option value="">All Semesters</option>
                            {grades.map((course, index) => (
                                <option key={index} value={course.semester}>
                                    {course.semester}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Detailed View of Grades */}
                    <div className="grades-container">
                        {grades
                            .filter((course) => !selectedSemester || course.semester === selectedSemester)
                            .map((course, index) => (
                                <div key={index} className="grade-card">
                                    <h2>{course.course}</h2>
                                    <p>Grade: {course.grade}</p>
                                    <p>Assignments: {course.assignments.join(', ')}</p>
                                    <p>Semester: {course.semester}</p>
                                </div>
                            ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default GradeReport;

