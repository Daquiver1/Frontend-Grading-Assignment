import React, { useState } from 'react';
import './MGradeForm.css';

function GradeForm() {
    const [formData, setFormData] = useState({
        courseName: '',
        instructorName: '',
        expectedGrade: '',
        explanation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Grade report submitted successfully!");
       
    };

    return (
        <div className='body'>
        <div className="grade-form-container">
            <h1>Report Form</h1>
            <form id="missingGradeForm" onSubmit={handleSubmit}>
                <label htmlFor="courseName">Course Name:</label>
                <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="instructorName">Instructor Name:</label>
                <input
                    type="text"
                    id="instructorName"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="expectedGrade">Expected Grade:</label>
                <input
                    type="text"
                    id="expectedGrade"
                    name="expectedGrade"
                    value={formData.expectedGrade}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="explanation">Explanation:</label>
                <textarea
                    id="explanation"
                    name="explanation"
                    value={formData.explanation}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default GradeForm;
