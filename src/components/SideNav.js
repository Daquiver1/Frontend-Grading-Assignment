import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import undraw_rocket from "../assets/icons/undraw_rocket.svg";
import { StudentContext } from "../StudentContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTachometerAlt, faTable, faExclamationTriangle, faSignInAlt, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const SideNar = () => {
  const { student } = useContext(StudentContext);
  const isLogin = student.studentId !== "" ? true : false;

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-text mx-3">UG STUDENT REPORT SYS</div>
      </div>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <div className="nav-link">
          <FontAwesomeIcon icon={faHome} />
          <NavLink to="/">Home</NavLink>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Student Info</div>

      {isLogin ? (
        <>
          <li className="nav-item active">
            <div className="nav-link">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <FontAwesomeIcon icon={faTable} />
              <NavLink to="/grades">Grades Report</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <NavLink to="/missing-grade-report">Report Missing Grade</NavLink>
            </div>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <div className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} />
            <NavLink to="/login">Login</NavLink>
          </div>
        </li>
      )}

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Contact and Support</div>

      <li className="nav-item">
        <div className="nav-link">
          <FontAwesomeIcon icon={faPhone} />
          <NavLink to="/instructor-contact">Contact Instructor</NavLink>
        </div>

        <div className="nav-link">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <NavLink to="/help">Help and Support</NavLink>
        </div>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div className="sidebar-card d-none d-lg-flex">
        <img className="sidebar-card-illustration mb-2" src={undraw_rocket} alt="..." />
        <p className="text-center mb-2">
          <strong>UG STUDENT REPORT Pro</strong> is packed with premium features, components, and more!
        </p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};

export default SideNar;
