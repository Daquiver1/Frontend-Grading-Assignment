import React from 'react';
import StudentProfile from './Student';
import projectimages from "../Project images/Mark-Mensah-3.jpg";

const StudentGradingDashboard = () => {

  const student = { 
    name: "Manuel", 
    studentId: "10290284", 
    email: "Manuel@gmail.com", 
    courseTitle: "INFORMATION TECHNOLOGY",
    avatarUrl: projectimages
  }

  return (
    <div className="flex flex-col min-h-screen">
      <StudentProfile student={student} />
      <header className="bg-gray-100 flex items-center justify-between px-4 py-2">
        <span className="text-xl font-bold">Gradebook</span>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 font-medium hover:text-gray-700 focus:outline-none focus:shadow-sm transition-colors duration-150 ease-in-out active">
            Home
          </span>
          <span className="text-gray-600 font-medium hover:text-gray-700 focus:outline-none focus:shadow-sm transition-colors duration-150 ease-in-out">
            Courses
          </span>
          <span className="text-gray-600 font-medium hover:text-gray-700 focus:outline-none focus:shadow-sm transition-colors duration-150 ease-in-out">
            Assignments
          </span>
          {/* Add other navigation options as needed */}
        </div>
      </header>
      <main className="flex-grow px-4 py-6 space-y-4">
        <div className="flex items-center justify-between bg-white rounded-md p-4 shadow-md">
          <span className="text-lg font-medium">GPA</span>
          <span className="text-xl font-bold">3.85</span>
        </div>
        <div className="flex flex-col bg-white rounded-md p-4 shadow-md space-y-4">
          <h2 className="text-lg font-medium mb-2">Recent Courses</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Calculus 101</span>
              <span className="text-green-600 font-bold">A</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">DCIT 104</span>
              <span className="text-green-500 font-bold">B</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">DCIT 102</span>
              <span className="text-yellow-500 font-bold">C</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">DCIT 105</span>
              <span className="text-yellow-600">C+</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">ECON 102</span>
              <span className="text-red-500">UNAVAILABLE</span>
            </li>
            {/* Add more recent courses as needed */}
          </ul>
        </div>
        <div className="flex flex-col bg-white rounded-md p-4 shadow-md space-y-4">
          <h2 className="text-lg font-medium mb-2">Upcoming Assignments</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Chemistry Lab Report</span>
              <span className="text-gray-500">Due in 3 days</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Physics Midterm</span>
              <span className="text-gray-500">Due in 1 week</span>
            </li>
            {/* Add more upcoming assignments as needed */}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default StudentGradingDashboard;
