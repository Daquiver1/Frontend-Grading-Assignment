/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const instructors = [
  { id: 1, name: 'Instructor 1', email: 'instructor1@example.com', department: 'Mathematics' },
  { id: 2, name: 'Instructor 2', email: 'instructor2@example.com', department: 'Physics' },
  // Add more instructors as needed
];

function GradeReport() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [gradeDetails, setGradeDetails] = useState({
    studentName: '',
    course: '',
    untrackedGrade: '',
    additionalDetails: '',
  });

  const handleInstructorChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selected = instructors.find((instructor) => instructor.id === selectedId);
    setSelectedInstructor(selected);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGradeDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the logic for submitting the grade report
    console.log('Grade report submitted:', { selectedInstructor, gradeDetails });
    // You may want to send this data to a server or perform other actions
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Grade Report</h1>

      <p className="mb-4">
        Below is a list of instructors you can report untracked grades to. Please select the instructor and provide the necessary details.
      </p>

      <div className="mb-6">
        <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
          Select Instructor
        </label>
        <select
          id="instructor"
          name="instructor"
          onChange={handleInstructorChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="">Select an instructor</option>
          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name} - {instructor.department}
            </option>
          ))}
        </select>
      </div>

      {selectedInstructor && (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={gradeDetails.studentName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={gradeDetails.course}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="untrackedGrade" className="block text-sm font-medium text-gray-700">
              Untracked Grade
            </label>
            <input
              type="text"
              id="untrackedGrade"
              name="untrackedGrade"
              value={gradeDetails.untrackedGrade}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={gradeDetails.additionalDetails}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Grade Report
          </button>
        </form>
      )}
    </div>
  );
}


export default GradeReport ;
