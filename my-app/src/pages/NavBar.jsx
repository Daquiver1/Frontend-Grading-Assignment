import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <ul className="flex">
        <li className="mr-auto">
          <Link to="/dashbaord" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/GradeReport.jsx" className="text-gray-300 hover:text-white">
            Grade Report
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/help-support" className="text-gray-300 hover:text-white">
            Help Support
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/instructor-contact"
            className="text-gray-300 hover:text-white"
          >
            Contact Instructor
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/missing-grade-form" className="text-gray-300 hover:text-white">
            Missing Grade Form
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
