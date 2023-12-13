import React, { useState } from "react";
import "./MissingGradeFormPage.css"; // Css file

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    const formData = { courseName, instructorName, expectedGrade, explanation };
    console.log("Form submitted:", formData);
    alert("Missing Grade reported successfully!"); // Display confirmation alert

    setCourseName("");
    setInstructorName("");
    setExpectedGrade("");
    setExplanation("");
  };

  return (
    <div className="missing-grade-form-container">
      <h2 className="heading">Report Missing Grade</h2>
      <p className="overview">Please provide the following details:</p>

      {/* Missing Grade Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
