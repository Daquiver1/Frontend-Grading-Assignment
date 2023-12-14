import React, { useState } from 'react'

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ course: '', reason: '' });
  };


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Missing Grade Form</h2>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="course" className="form-label">
                Course
              </label>
              <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Reason for Missing Grade
              </label>
              <textarea
                className="form-control"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MissingGradeForm;