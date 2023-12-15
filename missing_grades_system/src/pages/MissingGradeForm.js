import React, { useState } from 'react';
import '../styles/MissingGradeForm.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MissingGradeFormPage() {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="missing-grade-form-page">
      <Navbar></Navbar>
      <h1>Missing Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          required
        />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input
          type="text"
          id="expectedGrade"
          value={expectedGrade}
          onChange={(e) => setExpectedGrade(e.target.value)}
          required
        />

        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && <p>Grade report submitted successfully!</p>}
      <Footer />
    </div>
  );
}

export default MissingGradeFormPage;
