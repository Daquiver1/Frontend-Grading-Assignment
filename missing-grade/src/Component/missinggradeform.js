import React from "react";
import MissingBackground from "../Assets/forms.avif";
import "./styles/missinggade.css";

const MissinggradeForm = () => {
  return (
    <div className="missing-section-container">
      <div className="missing-background-image-container">
        <img src={MissingBackground} alt="" />
      </div>

      <div className="missing-section-text-container">
        <h1 className="missing-heading">Missing Grade Report Form</h1>
        <p className="missing-text">
          Fill out the form to report a missing grade
        </p>

        <form className="missing-grade-form">
          <label htmlFor="courseName">Course Name:</label>
          <input type="text" id="courseName" name="courseName" required />

          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            required
          />

          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input type="text" id="expectedGrade" name="expectedGrade" required />

          <label htmlFor="explanation">Explanation:</label>
          <textarea id="explanation" name="explanation" rows="4" required />

          <button type="submit">Report</button>
        </form>
      </div>
    </div>
  );
};

export default MissinggradeForm;
