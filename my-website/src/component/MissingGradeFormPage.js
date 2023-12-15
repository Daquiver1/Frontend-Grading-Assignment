// src/components/MissingGradeFormPage.js
import React, { useState } from 'react';

function MissingGradeFormPage() {
    const [courseName, setCourseName] = useState('');
    const [instructorName, setInstructorName] = useState('');
    const [expectedGrade, setExpectedGrade] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleFormSubmit = () => {
        // Simulated form submission logic (replace with actual form submission logic)
        alert('Grade report submitted successfully.');
    };

    return (
        <div>
            <h2>Missing Grade Form Page</h2>
            <form>
                <label>
                    Course Name:
                    <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </label>
                <br />
                <label>
                    Instructor Name:
                    <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
                </label>
                <br />
                <label>
                    Expected Grade:
                    <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} />
                </label>
                <br />
                <label>
                    Explanation:
                    <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default MissingGradeFormPage;
