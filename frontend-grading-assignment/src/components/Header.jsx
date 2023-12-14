import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
 return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/grades" activeClassName="active">Grade Report</NavLink>
        <NavLink to="/missing-grade-form" activeClassName="active">Missing Grade Form</NavLink>
        <NavLink to="/instructor-contact" activeClassName="active">Instructor Contact</NavLink>
        <NavLink to="/help-support" activeClassName="active">Help & Support</NavLink>
      </nav>
    </header>
 );
}

export default Header;