import React from "react";
import "./MissingGradeFormPage.css";

const MissingGradeFormPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic or mock submission
    console.log("Form submitted!");
  };

  return (
    <div className="missing-grade-form-container">
      <h2 className="missing-grade-form-title">Report Missing Grade</h2>
      <form onSubmit={handleSubmit} className="missing-grade-form">
        <label htmlFor="courseName">Course Name:</label>
        <input type="text" id="courseName" required />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input type="text" id="instructorName" required />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input type="text" id="expectedGrade" required />

        <label htmlFor="explanation">Explanation:</label>
        <textarea id="explanation" rows="4" required />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
