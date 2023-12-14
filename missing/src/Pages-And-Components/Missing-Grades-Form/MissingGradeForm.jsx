import React, { useState } from 'react';
import Navbar from '../Navigation-Bar/navbar';
import Footer from '../Footer/Footer';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Missing grade reported successfully!');
  };

   

  return (
    <div>
      <Navbar />
      <div className="missing-grade-form-container">
        <h1><u>Missing Grade Form</u></h1>
        <form onSubmit={handleSubmit}>
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
      <Footer />
    </div>
  );
};

export default MissingGradeForm;

