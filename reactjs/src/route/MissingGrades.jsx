import React, { useState } from 'react';
import './missingGrades.css'

const MissingGradeForm = () => {
    const [courseName, setCourseName] = useState('');
    const [dateMissed, setDateMissed] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send data to server here
        console.log('Course Name:', courseName);
        console.log('Date Missed:', dateMissed);
        console.log('Description:', description);

        // Clear form inputs
        setCourseName('');
        setDateMissed('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="courseName">Course Name:</label>
            <input 
                type="text" 
                id="courseName" 
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
                required 
            />

            <label htmlFor="dateMissed">Date Missed:</label>
            <input 
                type="date" 
                id="dateMissed" 
                value={dateMissed} 
                onChange={(e) => setDateMissed(e.target.value)} 
                required 
            />

            <label htmlFor="description">Description:</label>
            <textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default MissingGradeForm;