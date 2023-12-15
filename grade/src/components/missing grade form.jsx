import React from 'react';
import '../components/styles/missing.css';

const MissingGradeForm = () => {
  return (
    <div className="missing-grade-form-container">
      <h2>Report a Missing Grade</h2>
      <form>
        <label>
          Your Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Course:
          <input type="text" name="course" required />
        </label>
        <label>
          Assignment:
          <input type="text" name="assignment" required />
        </label>
        <label>
          Additional Information:
          <textarea name="additional-info" />
        </label>
        <input type="submit" value="Submit Report" />
      </form>
    </div>
  );
};

export default MissingGradeForm;