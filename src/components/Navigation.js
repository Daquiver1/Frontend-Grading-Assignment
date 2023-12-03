import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" ClassName="nav-active" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/LoginPage" ClassName="nav-active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardPage" ClassName="nav-active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/GradeReportPage" ClassName="nav-active">
            Grade Report
          </NavLink>
        </li>
        <li>
          <NavLink to="/MissingGradeFormPage" ClassName="nav-active">
            Missing Grade
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
