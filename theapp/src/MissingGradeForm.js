import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
//import Footer from './Footer'

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: ''
  });
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission - show confirmation message
    setConfirmation(true);
    // Reset the form fields (optional)
    setFormData({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: ''
    });
  };

  return (
    <div>
        <Navigation />
      
    <div className="container mt-4">
      <h1>Report Missing Grade</h1>

      {confirmation ? (
        <div className="alert alert-success" role="alert">
          Missing grade reported successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="courseName" className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="instructorName" className="form-label">Instructor Name</label>
            <input
              type="text"
              className="form-control"
              id="instructorName"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expectedGrade" className="form-label">Expected Grade</label>
            <input
              type="text"
              className="form-control"
              id="expectedGrade"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="explanation" className="form-label">Explanation</label>
            <textarea
              className="form-control"
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default MissingGradeForm;
