import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="react-assignment/src/home.tsx" className="title">
          {" "}
          Back{" "}
        </Link>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="react-assignment/src/home.tsx"> Home </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/Logins.tsx">Logins</NavLink>
          </li>
          <li>
            <NavLink to="react-assignment/src/grades.tsx"> Grades</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/report.tsx"> Report</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/dashboard.tsx">
              {" "}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="react-assignment/src/contact.tsx"> Contact </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/help.tsx"> Help </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
