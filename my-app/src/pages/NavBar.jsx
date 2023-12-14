import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarNav = () => {
  const pages = [
    { path: '/Dashboard', name: 'Dashboard' },
    { path: '/GradeReportPage', name: 'Grade Report' },
    { path: '/HelpSupportPage', name: 'Help Support' },
    { path: '/InstructorContactPage', name: 'Contact Instructor' },
    { path: '/MissingGradeForm', name: 'Missing Grade Form' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-1/6 h-screen overflow-y-auto bg-gray-800"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ul className="flex flex-col items-start py-8">
        {pages.map((page) => (
          <li key={page.path} className="py-4">
            <NavLink
              to={page.path}
              className="px-3 py-2 text-gray-300 transition duration-300 rounded-md hover:text-white"
              activeClassName="bg-gray-700"
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;