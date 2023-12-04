// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <nav>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
          Dashboard
        </Link>
        <Link to="/grade-report" className={location.pathname === '/grade-report' ? 'active' : ''}>
          Grade Report
        </Link>
        <Link to="/missing-grade-form" className={location.pathname === '/missing-grade-form' ? 'active' : ''}>
          Missing Grade Form
        </Link>
        <Link to="/instructor-contact" className={location.pathname === '/instructor-contact' ? 'active' : ''}>
          Instructor Contact
        </Link>
        <Link to="/help-and-support" className={location.pathname === '/help-and-support' ? 'active' : ''}>
          Help & Support
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
