import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";

const Layout = () => {
  return (
    <>
      <Navbar>
        <ul className="flex flex-row justify-center space-x-7 ">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/grade-report">Grade Report</Link>
          </li>
          <li>
            <Link to="/missing_grade_report">Missing Grade Report</Link>
          </li>
          <li>
            <Link to="/instructor_contact">Instructor Contact</Link>
          </li>
          <li>
            <Link to="/help_and_support">Help/Support</Link>
          </li>
        </ul>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
