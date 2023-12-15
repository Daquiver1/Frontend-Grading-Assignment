
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './MissingGradeForm.css'; 
import 'tailwindcss/tailwind.css'; 

function MissingGradeform() {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or data processing here

    // Display a confirmation message
    setConfirmationMessage('Grade report submitted successfully!');
  };

  return (
    <div className="missing-grade-form-container">
      <h1 className="text-4xl font-bold mb-4">Missing Grade Report Form</h1>
      {confirmationMessage ? (
        <p className="text-green-600">{confirmationMessage}</p>
      ) : (
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-gray-700 text-sm font-bold mb-2">
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instructorName" className="block text-gray-700 text-sm font-bold mb-2">
              Instructor Name:
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expectedGrade" className="block text-gray-700 text-sm font-bold mb-2">
              Expected Grade:
            </label>
            <input
              type="text"
              id="expectedGrade"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="explanation" className="block text-gray-700 text-sm font-bold mb-2">
              Explanation:
            </label>
            <textarea
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
export default MissingGradeform;