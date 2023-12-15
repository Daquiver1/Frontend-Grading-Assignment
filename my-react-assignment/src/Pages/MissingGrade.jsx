import React, { useState } from "react";

const MissingGrade = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    instructorName: "",
    expectedGrade: "",
    explanation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation or submission logic here
    setIsSubmitted(true);
  };

  return (
    // <div className="bg-gray-100 min-h-screen">
    <div>
      <div className="min-h-screen">
        <header className=" text-black text-center py-4">
          <h1 className="text-3xl font-extrabold">Report Missing Grade</h1>
        </header>
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Missing Grade Form</h2>

            {isSubmitted ? (
              <div
                className="bg-green-100 border border-red-200 text-gray-500 px-4 py-3 rounded mb-4"
                role="alert"
              >
                <strong className="font-bold">Grade Reported!</strong> Thank you
                for reporting the missing grade.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="courseName"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Course Name:
                  </label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="instructorName"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Instructor Name:
                  </label>
                  <input
                    type="text"
                    id="instructorName"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="expectedGrade"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Expected Grade:
                  </label>
                  <input
                    type="text"
                    id="expectedGrade"
                    name="expectedGrade"
                    value={formData.expectedGrade}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="explanation"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Explanation:
                  </label>
                  <textarea
                    id="explanation"
                    name="explanation"
                    value={formData.explanation}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-400 text-black py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-200 font-semibold"
                >
                  Report Missing Grade
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissingGrade;
