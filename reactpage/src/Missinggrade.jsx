import React, { useState } from 'react'; 
import './Missinggrade.css';
 
const Missinggrade = () => { 
 
    const [courseName, setCourseName] = useState(''); 
    const [instructorName, setInstructorName] = useState(''); 
    const [expectedGrade, setExpectedGrade] = useState(''); 
    const [explanation, setExplanation] = useState(''); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        // Here you can add logic to handle the form submission (e.g., send data to the server). 
 
        // For now, let's just display a confirmation message. 
        setIsSubmitted(true); 
    }; 
 
    return ( 
        <section style={{ marginLeft: ' 200px',marginTop:'20px', maxWidth: '600px' }}> 
            <h2 style={{ textAlign: 'center' }}>Report Missing Grade</h2> 
            {isSubmitted ? ( 
                <p style={{ textAlign: 'center', color: 'green' }}>Report submitted successfully!</p> 
            ) : ( 
                <form onSubmit={handleSubmit}> 
                    <div style={{ marginBottom: '15px' }}> 
                        <label>Course Name:</label> 
                        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required /> 
                    </div> 
                    <div style={{ marginBottom: '15px' }}> 
                        <label>Instructor Name:</label> 
                        <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} required /> 
                    </div> 
                    <div style={{ marginBottom: '15px' }}> 
                        <label>Expected Grade:</label> 
                        <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} required /> 
                    </div> 
                    <div style={{ marginBottom: '15px' }}> 
                        <label>Explanation:</label> 
                        <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} required /> 
                    </div> 
                    <div style={{ textAlign: 'center' }}> 
                        <button type="submit">Submit</button> 
                    </div> 
                </form> 
            )} 
        </section> 
    ); 
}; 
 
export default Missinggrade;