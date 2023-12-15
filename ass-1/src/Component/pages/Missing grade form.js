import React, { useState } from "react";
import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";

function MissingGradeForm() {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleInstructorNameChange = (e) => {
    setInstructorName(e.target.value);
  };

  const handleExpectedGradeChange = (e) => {
    setExpectedGrade(e.target.value);
  };

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Missing grade report submitted!");
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <h2 className="Heading3">Report A Missing Grade</h2>
      <div className="Login">
        <div className="missing-grade-container">
          <h2>Missing Grade Form</h2>
          {!submitted && (
            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={handleCourseNameChange}
              />
              <br />
              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={handleInstructorNameChange}
              />
              <br />
              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                value={expectedGrade}
                onChange={handleExpectedGradeChange}
              />
              <br />
              <label htmlFor="explanation">Explanation:</label>
              <textarea
                id="explanation"
                rows="5"
                value={explanation}
                onChange={handleExplanationChange}
              />
              <br />
              <button className="submit" type="submit">
                Submit Report
              </button>
            </form>
          )}
          {submitted && (
            <p>
              Your missing grade report has been submitted. We will review your
              request and contact you shortly.
            </p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MissingGradeForm;
