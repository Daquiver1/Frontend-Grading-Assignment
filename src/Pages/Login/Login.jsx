import React, { useState } from 'react';

const Login = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Perform any necessary actions (e.g., send data to server)
    // For this example, just set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-100 p-6 border rounded-md hover:shadow-md max-w-md mx-auto mt-8 shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">Welcome To GradeGuard<br/>Login</h2>
      {isSubmitted ? (
        <p className="text-green-600 text-center">Logged in successfully!</p>
      ) : (
        <form>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-1">
              Student ID
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700 mb-1">
            Password
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full px-4 py-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
