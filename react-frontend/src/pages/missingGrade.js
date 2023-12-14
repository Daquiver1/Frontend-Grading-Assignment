import React, { useState } from "react";
import "../styles/missingGrade.css";

const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="wrapper2">
      <div className="missingGradeForm">
        <h2>Missing Grade Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Course Name:
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Instructor Name:
            <input
              type="text"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Expected Grade:
            <select
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="A">A</option>
              <option value="B">B+</option>
              <option value="C">B</option>
              <option value="D">C+</option>
              <option value="E">C</option>
              <option value="F">D+</option>
              <option value="G">D</option>
            </select>
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
          <button type="submit">Report</button>
        </form>
        {submitted && <p>Your report has been submitted!</p>}
      </div>
    </div>
  );
};

export default MissingGradeForm;
