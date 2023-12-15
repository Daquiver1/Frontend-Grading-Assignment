import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MissingGradeFormPage = () => {
  const [course, setCourse] = useState('');
  const [instructor, setInstructor] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
    console.log('Form submitted:', { course, instructor, expectedGrade, explanation });
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </label>
        <br />
        <label>
          Instructor:
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expected Grade:
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
        </label>
        <br />
        <label>
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default MissingGradeFormPage;
