// src/components/MissingGradeFormPage.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const MissingGradeFormPage = () => {
  // State for form fields
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });

    
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Missing Grade Form</h1>

        {/* Missing Grade Form */}
        <form onSubmit={handleSubmit} className="max-w-md">
          {/* Course Name */}
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              className="mt-1 p-2 w-full border rounded-md"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          {/* Instructor Name */}
          <div className="mb-4">
            <label htmlFor="instructorName" className="block text-sm font-medium text-gray-600">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              className="mt-1 p-2 w-full border rounded-md"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </div>

          {/* Expected Grade */}
          <div className="mb-4">
            <label htmlFor="expectedGrade" className="block text-sm font-medium text-gray-600">
              Expected Grade
            </label>
            <input
              type="text"
              id="expectedGrade"
              className="mt-1 p-2 w-full border rounded-md"
              value={expectedGrade}
              onChange={(e) => setExpectedGrade(e.target.value)}
              required
            />
          </div>

          {/* Explanation */}
          <div className="mb-4">
            <label htmlFor="explanation" className="block text-sm font-medium text-gray-600">
              Explanation
            </label>
            <textarea
              id="explanation"
              className="mt-1 p-2 w-full border rounded-md"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default MissingGradeFormPage;
