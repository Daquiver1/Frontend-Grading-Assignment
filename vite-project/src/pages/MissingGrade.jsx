// MissingGrade.js
import React, { useState } from 'react';

const MissingGrade = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add API call or other logic here)
    console.log('Form submitted:', formData);
    // Show a confirmation message (you can customize this)
    alert('Missing grade reported successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Report Missing Grade</h2>

      {/* Missing Grade Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        {/* Course Name */}
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Instructor Name */}
        <div className="mb-4">
          <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Expected Grade */}
        <div className="mb-4">
          <label htmlFor="expectedGrade" className="block text-sm font-medium text-gray-700">
            Expected Grade
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Explanation */}
        <div className="mb-4">
          <label htmlFor="explanation" className="block text-sm font-medium text-gray-700">
            Explanation
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Report Missing Grade
        </button>
      </form>
    </div>
  );
};

export default MissingGrade;
