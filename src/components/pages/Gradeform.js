import React, { useState } from 'react';
import Footer from './Footer';

function GradeForm() {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the submission logic or display a confirmation message here.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6">Report Missing Grade</h1>
        
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-gray-700 text-sm font-bold mb-2">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructorName" className="block text-gray-700 text-sm font-bold mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expectedGrade" className="block text-gray-700 text-sm font-bold mb-2">
            Expected Grade
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="explanation" className="block text-gray-700 text-sm font-bold mb-2">
            Explanation
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            className="w-full p-2 border rounded-md resize-none"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default GradeForm;
