import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen -m-6 max-h-[600px] ">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <ul className="flex flex-row justify-between items-center">
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
      </div>
      <div className="">
        <h1>Welcome</h1>
        <p>
          Track your grades, effortlessly keep tabs on your academicperformance
          and gain valuable insights into your educational journey.
        </p>
        <p>
          Navigate through your courses and pinpoint any grades that may need
          attention. Stay in control of your academic records with ease.
        </p>
        <p>
          Reporting missing grades has never been simpler,just fill the form,
          and you're on your way to resolving grade-related concerns
        </p>
        <p>
          Once you've reported a missing grade, relax and await positive
          feedback. Our team is dedicated to resolving issues promptly and
          ensuring that your academic records accurately reflect your
          achievements.
        </p>
      </div>

      <div>
        <h2 className="font-bold">Ready to get started?</h2>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
};

export default Layout;
