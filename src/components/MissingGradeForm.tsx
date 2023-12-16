import { useState } from "react";
function MissingGradeForm() {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      courseName.trim() === "" ||
      instructorName.trim() === "" ||
      expectedGrade.trim() === "" ||
      explanation.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setCourseName("");
    setInstructorName("");
    setExpectedGrade("");
    setExplanation("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Missing Grade Report Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">
            <b>Course Name:</b>
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="instructorName">
            <b>Instructor's Name:</b>
          </label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            onChange={(event) => setInstructorName(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="expectedGrade">
            <b>Expected Grade:</b>
          </label>
          <input
            type="text"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(event) => setExpectedGrade(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="explanation">
            <b>Explanation:</b>
          </label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(event) => setExplanation(event.target.value)}
            required
          ></textarea>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeForm;
