import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MissingGradePage = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Report Missing Grade</h1>
          <p className="text-lg text-gray-600">
            Use the form below to report a missing grade to the instructor or academic administration.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-gray-600 text-sm font-semibold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="instructorName" className="block text-gray-600 text-sm font-semibold mb-2">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expectedGrade" className="block text-gray-600 text-sm font-semibold mb-2">
              Expected Grade
            </label>
            <input
              type="text"
              id="expectedGrade"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="explanation" className="block text-gray-600 text-sm font-semibold mb-2">
              Explanation
            </label>
            <textarea
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Report
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MissingGradePage;
