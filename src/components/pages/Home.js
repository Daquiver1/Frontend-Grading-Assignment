import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6">Student Grading Portal</h1>
          <p className="text-gray-600 mb-6">
            Welcome to the Student Grading Portal. Here, you can view your grades, course information,
            and stay updated on your academic progress.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
