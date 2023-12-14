import React, { useState } from 'react';

const GradeReport = () => {
    const [semesterFilter, setSemesterFilter] = useState('All');

    // Mock data for demonstration
    const grades = [
        { course: 'Mathematics', grade: 'A', semester: '2023 Spring' },
        { course: 'Physics', grade: 'B+', semester: '2022 Fall' },
        { course: 'Chemistry', grade: 'A-', semester: '2023 Spring' },
        // ... more courses
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Grade Report</h2>
            <div>
                <label htmlFor="semester-select">Filter by Semester:</label>
                <select 
                    id="semester-select"
                    value={semesterFilter}
                    onChange={(e) => setSemesterFilter(e.target.value)}
                >
                    <option value="All">All Semesters</option>
                    <option value="2023 Spring">2023 Spring</option>
                    <option value="2022 Fall">2022 Fall</option>
                    {/* Add more semester options as needed */}
                </select>
            </div>
            
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.course}</td>
                            <td>{grade.grade}</td>
                            <td>{grade.semester}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradeReport;
