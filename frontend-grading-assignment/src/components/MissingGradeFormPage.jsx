import React, { useState } from 'react';

function MissingGradeFormPage() {
 const [courseName, setCourseName] = useState('');
 const [instructorName, setInstructorName] = useState('');
 const [expectedGrade, setExpectedGrade] = useState('');
 const [explanation, setExplanation] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (mock-up, no real submission)
    console.log('Form submitted with values:', { courseName, instructorName, expectedGrade, explanation });
 };

 return (
    <div className="container">
      <h2 className="report-title">Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="courseName" className="text-block">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="instructorName" className="text-block">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="expectedGrade" className="text-block">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="explanation" className="text-block">Explanation:</label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
 );
}

export default MissingGradeFormPage;