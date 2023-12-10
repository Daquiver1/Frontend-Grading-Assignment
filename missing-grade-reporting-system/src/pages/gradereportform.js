import React, { useState } from 'react';

const GradeReportPage = () => {
  // State for form inputs
  const [course, setCourse] = useState('');
  const [SemesterTaken, setSemesterTaken] = useState('');
  const [StudentID, setStudentID] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  // State for success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!course || !SemesterTaken || !StudentID || !otherInfo) {
      alert('Please fill in all fields');
      return;
    }

    // Perform your form submission logic here

    // Reset form fields
    setCourse('');
    setSemesterTaken('');
    setStudentID('');
    setOtherInfo('');

    // Display success message
    setSuccessMessage(' Request received successfully');
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <div>
            
        </div>
        <div className="container mx-auto mt-8 p-8 bg-Niagara-Charcoal rounded-lg w-1/2 mx-4">
        <h1 className="text-3xl font-bold mb-6">Missing/Incorrect Grade Report</h1>

        {/* Display success message if available */}
        {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{successMessage}</span>
            </div>
        )}

        {/* Grade Report Form */}
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">Course Code & Name:</label>
            <input
                type="text"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter missing/incorrect course code and name"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="SemesterTaken" className="block text-gray-700 text-sm font-bold mb-2">Year & Semester Taken:</label>
            <input
                type="text"
                id="SemesterTaken"
                value={SemesterTaken}
                onChange={(e) => setSemesterTaken(e.target.value)}
                placeholder="Enter the semester course(s) was/were taken"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="StudentID" className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
            <input
                type="text"
                id="StudentID"
                value={StudentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="Enter your Student ID"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>

            <div className="mb-6">
            <label htmlFor="otherInfo" className="block text-gray-700 text-sm font-bold mb-2">Additional Information:</label>
            <textarea
                id="otherInfo"
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
                placeholder="Enter any additional information"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
            </textarea>
            </div>

            <div className="flex items-center justify-center">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
            </div>
        </form>
        </div>
       
    </div>
  );
};

export default GradeReportPage;
