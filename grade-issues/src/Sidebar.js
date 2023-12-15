import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> UG | DEPARTMENT OF SCIENCE
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="./Pages/home.js">
            <BsGrid1X2Fill className="icon" /> Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/login.js">
            <BsFillArchiveFill className="icon" /> Login
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/dashboard.js">
            <BsFillGrid3X3GapFill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/gradeReport.js">
            <BsPeopleFill className="icon" /> Grade Report
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/missingGrade.js">
            <BsListCheck className="icon" /> Missing Grade Form
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/contact.js">
            <BsMenuButtonWideFill className="icon" /> Instructor Contact
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./Pages/help.js">
            <BsMenuButtonWideFill className="icon" /> Help and Support
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
