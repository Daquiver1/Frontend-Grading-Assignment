import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">UG | DEPARTMENT OF SCIENCE</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="./Pages/home.js">
            <IoHomeOutline className="icon" /> Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/login.js">
            <IoIosLogIn className="icon" /> Login
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/dashboard.js">
            <MdOutlineSpaceDashboard className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/gradeReport.js">
            <MdOutlineReportGmailerrorred className="icon" /> Grade Report
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/missingGrade.js">
            <SiReacthookform className="icon" /> Missing Grade Form
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/contact.js">
            <MdOutlineContactMail className="icon" /> Instructor Contact
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/help.js">
            <FaHandsHelping className="icon" /> Help and Support
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
