import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const pages = [
    { path: '/Dashboard', name: 'Dashboard' },
    { path: '/GradeReportPage', name: 'Grade Report' },
    { path: '/HelpSupportPage', name: 'Help Support' },
    { path: '/InstructorContactPage', name: 'Contact Instructor' },
    { path: '/MissingGradeForm', name: 'Missing Grade Form' },
  ];

  const handlePageClick = (path) => {
    navigate(path); // Use the navigate function to open the specified path
    setDropdownOpen(false); // Close the dropdown if it's open
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <ul className="flex">
        {pages.map((page, index) => (
          <li key={page.path} className={index === 0 ? 'mr-auto' : 'ml-4'}>
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => handlePageClick(page.path)}
            >
              {page.name}
            </button>
          </li>
        ))}
        <li className="relative ml-4">
          <button
            type="button"
            className="text-gray-300 hover:text-white"
            onClick={toggleDropdown}
          >
            More
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 py-4 mt-2 bg-gray-800">
              {pages.map((page) => (
                <li key={page.path}>
                  <button
                    type="button"
                    onClick={() => handlePageClick(page.path)}
                    className="block px-4 py-2 text-gray-300 hover:text-white"
                  >
                    {page.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;