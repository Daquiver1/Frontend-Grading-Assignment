import React, { useState } from "react";
import "../Css/MissingGradeFormPage.css";
import SideNavBar from "./SideNavBar";

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleFormSubmit = () => {
    // Implement form submission logic here
    console.log("Form Submitted:", {
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });
  };

  return (
    <div className="content">
      <SideNavBar />
      <div className="missing-grade-form-container">
        <header>
          <h1>Missing Grade Form</h1>
        </header>

        <form onSubmit={handleFormSubmit}>
          <label>
            Course Name:
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </label>

          <label>
            Instructor Name:
            <input
              type="text"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
            />
          </label>

          <label>
            Expected Grade:
            <input
              type="text"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
            />
          </label>

          <label>
            Explanation:
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MissingGradeFormPage;
