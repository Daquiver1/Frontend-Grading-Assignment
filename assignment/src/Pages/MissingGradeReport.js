// src/pages/MissingGradeFormPage.js
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const MissingGradeFormPage = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage('Grade report submitted successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-teal-600">Report Missing Grade</h1>
          <p className="text-lg text-gray-600">Please fill in the details below to report a missing grade.</p>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Course Name:</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Instructor Name:</label>
            <input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Expected Grade:</label>
            <input
              type="text"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Explanation:</label>
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {confirmationMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MissingGradeFormPage;
