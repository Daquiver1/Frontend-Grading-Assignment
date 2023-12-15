// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="block py-2 px-4 hover:bg-gray-700">
              Profile
            </Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
