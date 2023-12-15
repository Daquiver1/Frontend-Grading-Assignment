import React, { useState } from "react";
import "./missing.css";
import Header from './Header';


const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });
    setSubmitted(true);
  };

  return (
    <div className="l">
        <Header /> 
      <div className="missing-grade-form">
        <h2>Report a Missing Grade</h2>
        {submitted ? (
          <p>Thank you for your report!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Course Name:</label>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Instructor Name:</label>
              <input
                type="text"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Expected Grade:</label>
              <input
                type="text"
                value={expectedGrade}
                onChange={(e) => setExpectedGrade(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Explanation:</label>
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MissingGradeForm;
