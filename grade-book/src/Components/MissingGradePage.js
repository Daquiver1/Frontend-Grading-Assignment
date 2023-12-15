import React, { useState } from "react";
import "../Styles/MissingGradePage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MissingGradePage = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted successfully!");
  };

  return (
    <div className="Page-content">
      <Navbar />
      <div className="container">
        <h2> Report A Missing Grade </h2>
        <p>
          The form serves as a formal channel for students to communicate with
          academic administrators and initiate the process of grade correction.
          Once submitted, the Missing Grade Form undergoes a review process to
          ensure accuracy and fairness in resolving the reported grading issue.
        </p>
        <p> Kindly fill out the form below;</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Instructor Name"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Expected Grade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
          <textarea
            className="form-control"
            placeholder="Explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
          <button type="submit" className="btn">
            Report
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MissingGradePage;
