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

    // Here, you can handle the form submission, such as sending the report to the server or displaying a success message.

    // Reset the form fields after submission
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
            placeholder="Enter the course name"
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
            placeholder="Enter the instructor's name"
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
            placeholder="Enter the expected grade"
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
            placeholder="Enter an explanation for the missing grade"
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
