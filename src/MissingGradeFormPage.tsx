import React, { useState } from 'react';
import './MissingGradeFormPage.css'
import 'bootstrap/dist/css/bootstrap.css'


const MissingGradeFormPage: React.FC = () => {
  const [formState, setFormState] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Your missing grade report has been submitted.');
    setFormState({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
    <div className="missing-grade-form-page">
      <h2 className="page-title">Report Missing Grade</h2>
      <form onSubmit={handleSubmit} className="missing-grade-form">
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formState.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formState.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formState.expectedGrade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formState.explanation}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;