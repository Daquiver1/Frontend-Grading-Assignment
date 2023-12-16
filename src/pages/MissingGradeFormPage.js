import React, { useState } from 'react';
import Header from "../components/Header";

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out before displaying success message
    if (formData.courseName && formData.instructorName && formData.expectedGrade && formData.explanation) {
      reportMissingGrade();
    }
  };

  const reportMissingGrade = () => {
    alert('🚀 Missing grade reported successfully! 🎉');
    // Replace with your desired action upon submission
    // You may want to send formData to a server or perform other actions


    // Reset form fields after submission
    setFormData({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="missing-grade-form">
        <h2>Report Missing Grade</h2>

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
            rows="4"
            value={formData.explanation}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default MissingGradeForm;