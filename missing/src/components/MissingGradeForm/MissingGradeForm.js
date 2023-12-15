import React, { useState } from "react";
import "./MissingGradeForm.css"; // Import the CSS file for styling

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    instructorName: "",
    expectedGrade: "",
    explanation: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., send it to a server)
    // For now, just display a confirmation message
    setSubmitted(true);
  };

  return (
    <div className="missing-grade-form">
      <h2> Report Missing Grade </h2>{" "}
      {isSubmitted ? (
        <div className="confirmation-message">
          {" "}
          Grade reported successfully!{" "}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="courseName"> Course Name: </label>{" "}
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
          <label htmlFor="instructorName"> Instructor Name: </label>{" "}
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            required
          />
          <label htmlFor="expectedGrade"> Expected Grade: </label>{" "}
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            required
          />
          <label htmlFor="explanation"> Explanation: </label>{" "}
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            required
          ></textarea>{" "}
          <button type="submit"> Submit </button>{" "}
        </form>
      )}{" "}
    </div>
  );
};

export default MissingGradeForm;
