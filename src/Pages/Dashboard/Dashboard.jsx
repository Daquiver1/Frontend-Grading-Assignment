import React from 'react';
import { FaBook, FaCheck, FaFacebookMessenger, FaSchool, FaThermometerThreeQuarters, FaTimes } from 'react-icons/fa';

function Dashboard() {
  return (
    <main className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-300 text-white min-h-screen p-4">
      <h1 className="font-bold text-3xl mb-8 text-center">Student Dashboard</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Course Count */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">12</span>
            <FaBook size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Courses Enrolled</p>
        </div>

        {/* Reported Grades */}
        <div className="bg-[#51c851] text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">2</span>
            <FaThermometerThreeQuarters size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Reported Grades</p>
        </div>

        {/* Reply Count */}
        <div className="bg-[#46878b] text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">1</span>
            <FaFacebookMessenger size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Replies</p>
        </div>

        {/* Semesters Count */}
        <div className="bg-purple-600/40 text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">2</span>
            <FaSchool size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Semesters</p>
        </div>

        {/* Passed Count */}
        <div className="bg-green-600/40 text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">2</span>
            <FaCheck size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Passed</p>
        </div>

        {/* Failed Count */}
        <div className="bg-red-600/40 text-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">2</span>
            <FaTimes size={40} color="#fff" />
          </div>
          <p className="mt-4 text-sm text-center">Failed Courses</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
