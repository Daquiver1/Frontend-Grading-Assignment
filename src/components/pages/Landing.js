// Landing.js

import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <Link to="/home" className="text-white text-xl font-bold">Home</Link>
          <Link to="/about" className="text-white ml-4">About</Link>
          <Link to="/contact" className="text-white ml-4">Contact</Link>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">System Overview</h1>
        <p className="text-gray-700">
          Welcome to our student grade website! This platform provides a comprehensive overview
          of student grades, performance, and other relevant information.
        </p>
      </section>

      {/* Navigation Links to Other Pages */}
      <section className="container mx-auto mt-8 flex justify-center">
        <Link to="/grades" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
          View Grades
        </Link>
        <Link to="/profile" className="bg-green-500 text-white ml-4 px-6 py-3 rounded-full font-semibold hover:bg-green-600">
          My Profile
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
