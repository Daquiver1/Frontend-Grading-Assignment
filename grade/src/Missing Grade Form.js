import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement logic to handle the form submission (e.g., send data to server)

    // For this example, just display a confirmation message
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Missing Grade Form</h1>

      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Your missing grade report has been submitted. Thank you!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="courseName" className="form-label">
              Course Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="instructorName" className="form-label">
              Instructor Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="instructorName"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="expectedGrade" className="form-label">
              Expected Grade:
            </label>
            <input
              type="text"
              className="form-control"
              id="expectedGrade"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="explanation" className="form-label">
              Explanation:
            </label>
            <textarea
              className="form-control"
              id="explanation"
              rows="4"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MissingGradeForm;
