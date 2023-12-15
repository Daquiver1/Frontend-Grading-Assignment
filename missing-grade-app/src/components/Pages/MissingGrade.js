import React, { useState } from 'react';

const MissingGrade = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic or display confirmation message here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container px-6 mx-auto h-full w-full bg-white">
      <h1 className="mb-5 text-5xl font-bold text-gray-700 dark:text-[#788480] group-hover:text-white w-full bg-black py-3 px-12 text-center transition-colors duration-300 hover:text-white cursor-pointer">
        Missing Grade Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseName" className="block font-semibold mb-1">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block font-semibold mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expectedGrade" className="block font-semibold mb-1">
            Expected Grade
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="explanation" className="block font-semibold mb-1">
            Explanation
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-3 w-full h-24"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MissingGrade;
