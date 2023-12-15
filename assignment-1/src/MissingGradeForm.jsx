import React, { useState } from 'react';

const MissingGradeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <header>
        <b>HAVE A MISSING GRADE? SUBMIT YOUR REPORT HERE</b>
      </header>

      <main>
        <section className="missing-grade-form-section">
          <h2>Report Missing Grade</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="courseName">Course Name:</label>
              <input type="text" id="courseName" name="courseName" required />
            </div>
            <div className="form-group">
              <label htmlFor="instructorName">Instructor Name:</label>
              <input type="text" id="instructorName" name="instructorName" required />
            </div>
            <div className="form-group">
              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input type="text" id="expectedGrade" name="expectedGrade" required />
            </div>
            <div className="form-group">
              <label htmlFor="explanation">Explanation:</label>
              <textarea id="explanation" name="explanation" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>

          {isSubmitted && <p>Your missing grade report has been submitted!</p>}
        </section>
      </main>

      <footer>
        <b>MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
};

export default MissingGradeForm;
