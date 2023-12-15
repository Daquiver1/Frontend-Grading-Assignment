// GradeManagementPage.js
import React, { useState } from 'react';
import '../styles/GradeManagementPage.css';

const GradeManagementPage = () => {
    const [searchId, setSearchId] = useState('');
    const [missingGrade, setMissingGrade] = useState({
        course: '',
        instructor: '',
        expectedGrade: '',
        explanation: '',
    });

    const [gradeData, setGradeData] = useState([
        { id: 1, name: 'Desmond Ansah', course: 'Math223', grade: 'A' },
        { id: 2, name: 'Nana Ampadu', course: 'DCIT205', grade: 'B+' },

    ]);

    const handleSearch = () => {

        console.log('Searching for student with ID:', searchId);
    };

    const handleMissingGradeSubmit = () => {

        console.log('Missing Grade Submitted:', missingGrade);
    };

    return (
        <div className="grade-management-container">
            <h2>Grade Management</h2>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="student-info">
                <h3>Student Information</h3>
                <ul>
                    {gradeData.map((data) => (
                        <li key={data.id}>
                            {data.name} - {data.course}: {data.grade}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="missing-grade-form">
                <h3>Report Missing Grade</h3>
                <div className="form-group">
                    <label htmlFor="course">Course Name:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={missingGrade.course}
                        onChange={(e) => setMissingGrade({ ...missingGrade, course: e.target.value })}
                    />
                </div>
                <button onClick={handleMissingGradeSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default GradeManagementPage;
