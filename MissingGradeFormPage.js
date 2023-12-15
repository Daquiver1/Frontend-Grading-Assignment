import React, { useState } from 'react';

const MissingGradeForm = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic (e.g., send data to backend or display confirmation)
    // For now, let's just log the form data to the console
    console.log('Form submitted:', formData);
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Report Missing Grade</h2>
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
            required
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
            required
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
            required
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
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeForm;
