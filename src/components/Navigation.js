// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  FaUser,
  FaHome,
  FaCalendar,
  FaRegAddressCard,
  FaReadme,
  FaFacebookMessenger,
  FaSearch,
} from "react-icons/fa";
import myImage from "../assets/img/rsz_download.jpg";
import DateTime from "./DateTime";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        {" "}
        <img src={myImage} alt="logo" />
      </div>
      <div>
        <DateTime />
      </div>
      <ul>
        <li>
          <NavLink to="/" className="nav-active">
            <FaHome /> HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/LoginPage" className="nav-active">
            <FaUser /> Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardPage" className="nav-active">
            <FaCalendar /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/GradeReportPage" className="nav-active">
            <FaRegAddressCard /> Grade Report
          </NavLink>
        </li>
        <li>
          <NavLink to="/MissingGradeFormPage" className="nav-active">
            <FaReadme /> Missing Grade
          </NavLink>
        </li>
        <li>
          <NavLink to="/InstructorContactPage" className="nav-active">
            <FaFacebookMessenger /> Instructor Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-active">
            <FaSearch /> Help and Support
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
