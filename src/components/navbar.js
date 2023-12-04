import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Missing Grades System</Link>
      {/* Add navigation links here */}
    </nav>
  );
}

export default Navbar;
