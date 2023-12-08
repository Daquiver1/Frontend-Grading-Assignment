import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div id='navbar' className={clicked ? 'navbar active' : 'navbar'}>
        <Link to="/">Home</Link>
        <Link to="/DashboardPage">Profile</Link>
        <Link to="/InstructorContactPage">Instructor</Link>
        <Link to="/GradeReportPage">Transcript</Link>
        <Link to="/MissingGradeFormPage">Inquiry</Link>
        <Link to="/HelpAndSupportPage">FAQs</Link>
        <Link to="/LoginPage">Login</Link>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
        </i>
      </div>
    </div>
  );
};
