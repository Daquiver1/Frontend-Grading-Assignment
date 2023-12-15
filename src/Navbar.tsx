import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


const Navbar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">MGRS</Link>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-nav`}>
      <Link to="/login" className="btn btn-primary">Student Login</Link>
        <Link to="/contact-instructors" className="btn btn-secondary">Contact Instructors</Link>
        <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
        <Link to="/grade-report" className="btn btn-secondary">Grade Report</Link>
        <Link to="/report-missing-grade" className="btn btn-secondary">Missing Grade Report</Link>
        <Link to="/help-support" className="btn btn-outline">Contact Support</Link>
      </div>
    </nav>
  );
};

export default Navbar;