import React, { useState } from "react";

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    instructorName: "",
    expectedGrade: "",
    explanation: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Form submitted successfully!");
    setFormData({
      courseName: "",
      instructorName: "",
      expectedGrade: "",
      explanation: "",
    });
  };

  return (
    <div className="max-w-xl p-6 rounded-lg md mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-white">Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseName" className="block mb-2 text-white">
            Course Name:
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructorName" className="block mb-2 text-white">
            Instructor Name:
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expectedGrade" className="block mb-2 text-white">
            Expected Grade:
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="explanation" className="block mb-2 text-white">
            Explanation:
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>

        {successMessage && (
          <p className="mt-3 text-green-500">{successMessage}</p>
        )}
      </form>
   
      <footer className="text-white py-4 text-center">
       
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MissingGradeForm;
