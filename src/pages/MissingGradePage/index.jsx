import React, { useState } from 'react';
import DashboardLayout from '../../components/shared/DashboardLayout'

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
 });

 const { courseName, instructorName, expectedGrade, explanation } = formData;

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert('Report submitted successfully');
 };

  return (
    <DashboardLayout title={"/ Missing Grade Form"}>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-5">Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courseName"
            name="courseName"
            type="text"
            value={courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
            Instructor Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorName"
            name="instructorName"
            type="text"
            value={instructorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectedGrade">
            Expected Grade
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expectedGrade"
            name="expectedGrade"
            type="text"
            value={expectedGrade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="explanation">
            Explanation
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="explanation"
            name="explanation"
            value={explanation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Report
          </button>
        </div>
      </form>
    </div>
  </div>
  </DashboardLayout>
);
};




      
    

    

export default MissingGradeForm
