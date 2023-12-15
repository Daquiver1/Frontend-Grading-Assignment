// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with the path to your logo
            alt="Portal Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="font-bold text-lg">Student Grades Portal</span>
        </div>

        <div className="flex space-x-4">
          <a href="/home" className="hover:text-gray-300">
            Home
          </a>
          <a href="/gradereport" className="hover:text-gray-300">
            Grade Report
          </a>
          <a href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </a>
          <a href="/instructor" className="hover:text-gray-300">
            Intructor          </a>
        </div>

        <div>
          <p>&copy; {new Date().getFullYear()} Student Grades Portal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
