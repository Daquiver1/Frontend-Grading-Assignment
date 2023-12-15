import React from "react";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <nav className=" bg-teal-500 top-0 z-10 h-full max-w-full rounded-none md:px-4 md:py-2 lg:px-8 lg:py-4 flex flex-row justify-between space-x-5 w-full border-b ">
        <ul className="flex flex-row gap-4  justify-between mx-12 md:mx-0 items-center font-bold overflow-x-auto">
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
