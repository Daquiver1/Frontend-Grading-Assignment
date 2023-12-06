// MissingGradeFormPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/booccccccctstrap.min.css';
import 'tailwindcss/tailwind.css';

const MissingGradeFormPage = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your submission logic goes here
    // For simplicity, let's assume a successful submission
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto my-8">
      {/* Missing grade form */}
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6">Report Missing Grade</h2>
        {isSubmitted ? (
          // Confirmation message upon successful submission
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            <p className="font-bold">Missing grade reported successfully!</p>
            <p>Your request has been submitted, and we will look into the matter.</p>
          </div>
        ) : (
          // Missing grade form
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-sm font-medium text-gray-600">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="instructorName" className="block text-sm font-medium text-gray-600">
                Instructor Name
              </label>
              <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expectedGrade" className="block text-sm font-medium text-gray-600">
                Expected Grade
              </label>
              <input
                type="text"
                id="expectedGrade"
                value={expectedGrade}
                onChange={(e) => setExpectedGrade(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="explanation" className="block text-sm font-medium text-gray-600">
                Explanation
              </label>
              <textarea
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MissingG
