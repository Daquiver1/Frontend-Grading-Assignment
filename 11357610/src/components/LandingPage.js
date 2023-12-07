import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const LandingPage = () => {
  return (
    <div className="container mx-auto my-4">
      {/* Hero section */}
      <section className="hero text-center my-8">
        <h1 className="text-5xl font-bold mb-4">
          Missing Grade Reporting System
        </h1>
        <p className="text-lg mb-8">
          Introducing a seamless way to report missing grades.
        </p>
        <Link
          to="/login"
          className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </section>

      {/* Overview section */}
      <section className="overview my-8">
        <h2 className="text-3xl font-bold mb-4">
          System Benefits and Key Features
        </h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more content as needed */}
      </section>

      {/* Navigation bar */}
      <nav className="nav bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <div className="flex space-x-4">
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/grade-report" className="hover:text-gray-300">
              Grade Report
            </Link>
            <Link to="/missing-grade-form" className="hover:text-gray-300">
              Missing Grade Form
            </Link>
            <Link to="/instructor-contact" className="hover:text-gray-300">
              Instructor Contact
            </Link>
            <Link to="/help" className="hover:text-gray-300">
              Help and Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="footer bg-gray-200 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
          <p>Contact us at: support@example.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
