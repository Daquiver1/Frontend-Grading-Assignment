import React, { useState } from 'react';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
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
    // You can handle the form submission logic here (e.g., send data to a server).
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Missing Grade Form Page</h2>
      {isSubmitted ? (
        <p className="text-green-500">Thank you for reporting the missing grade! Your submission has been received.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Course Name:</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Instructor Name:</label>
            <input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Expected Grade:</label>
            <input
              type="text"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Explanation:</label>
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MissingGradeForm;
