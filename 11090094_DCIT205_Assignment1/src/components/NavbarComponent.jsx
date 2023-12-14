import React from "react";
// import { nav } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      {/* LOGO */}

      <nav className=" bg-teal-500 top-0 z-10 h-full  max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 flex flex-row justify-between space-x-5 w-full border-b ">
        <p className="flex flex-row">AnimwaaExpress</p>
        <ul className="flex flex-row gap-4  justify-between items-center font-bold">
          <li className="hover:font-bold ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:font-bold ">
            <Link to="/grade-report">Grade Report</Link>
          </li>
          <li className="hover:font-bold ">
            <Link to="/missing_grade_report">Missing Grade</Link>
          </li>
          <li className="hover:font-bold ">
            <Link to="/instructor_contact">Instructor's Contact</Link>
          </li>
          <li className="hover:font-bold ">
            <Link to="/help_and_support">Help & Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComponent;
