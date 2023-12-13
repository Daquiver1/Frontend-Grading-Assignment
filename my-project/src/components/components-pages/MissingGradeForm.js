import React, { useState } from "react";

function MissingGradeForm() {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement logic for submitting the form data
    // For now, just show a confirmation message
    alert(
      "Missing grade report submitted. You will be contacted soon."
    );

    // Clear form fields
    setCourseName("");
    setInstructorName("");
    setExpectedGrade("");
    setExplanation("");
  };

  return (
    <div className="missing-grade-form">
      <h2>Missing Grade Report</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          value={instructorName}
          onChange={(event) => setInstructorName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input
          type="text"
          id="expectedGrade"
          value={expectedGrade}
          onChange={(event) => setExpectedGrade(event.target.value)}
          required
        />
        <br />
        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          value={explanation}
          onChange={(event) => setExplanation(event.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeForm;

















