// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" className="nav-active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/LoginPage" className="nav-active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardPage" className="nav-active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/GradeReportPage" className="nav-active">
            Grade Report
          </NavLink>
        </li>
        <li>
          <NavLink to="/MissingGradeFormPage" className="nav-active">
            Missing Grade
          </NavLink>
        </li>
        <li>
          <NavLink to="/InstructorContactPage" className="nav-active">
            Instructor Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-active">
            Help and Support
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
