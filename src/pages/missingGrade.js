import React, { useState } from 'react';

const MissingGradeFormPage = () => {
  const [formData, setFormData] = useState({
    course: 'DCIT203',
    instructor: 'Dr. endurance Offeibea',
    expectedGrade: 'A',
    explanation: 'i was supoosed to get A in DCIT203',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Missing grade reported. This is a mock-up, no real submission.');
  };

  return (
    <div className="container mx-auto mt-8 missing flex flex-col justify-center place-items-center">
      <h2 className="text-2xl font-semibold mb-4">Report Missing Grade</h2>

      <form onSubmit={handleFormSubmit} className="max-w-md">
        <div className="mb-4 flex flex-col justify-center place-items-center">
          <label className="block text- text-sm font-bold mb-2" htmlFor="course">
            Course Name
          </label>
          <input
            type="text"
            id="course"
            name="course"
            className="w-full border p-2 rounded"
            placeholder="Course Name"
            value={formData.course}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 flex flex-col justify-center place-items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            className="w-full border p-2 rounded"
            placeholder="Instructor Name"
            value={formData.instructor}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 flex flex-col justify-center place-items-center">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="expectedGrade">
            Expected Grade
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            className="w-full border p-2 rounded"
            placeholder="Expected Grade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 flex flex-col justify-center place-items-center">
          <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="explanation">
            Explanation
          </label>
          <textarea
            id="explanation"
            name="explanation"
            rows="4"
            className="w-[500px] border p-2 rounded"
            placeholder="Explain why you are reporting a missing grade..."
            value={formData.explanation}
            onChange={handleInputChange}
          ></textarea>
          <button
          type="submit"
          className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Report Missing Grade
        </button>
        </div>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
