import React from 'react';

const SidebarNav = () => {
  const pages = [
    { path: '/Dashboard', name: 'Dashboard' },
    { path: '/GradeReportPage', name: 'Grade Report' },
    { path: '/HelpSupportPage', name: 'Help Support' },
    { path: '/InstructorContactPage', name: 'Contact Instructor' },
    { path: '/MissingGradeForm', name: 'Missing Grade Form' },
  ];

  const handleNavigation = (path) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <nav className="fixed top-0 left-0 w-1/6 h-screen overflow-y-auto bg-gray-800" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <ul className="flex flex-col items-start py-8">
        {pages.map((page) => (
          <li key={page.path} className="py-4">
            <button
              type="button"
              className="px-3 py-2 text-gray-300 transition duration-300 rounded-md hover:text-white"
              onClick={() => handleNavigation(page.path)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;