import React from "react";
import { Outlet, Link } from "react-router-dom";

import NavbarComponent from "../components/NavbarComponent";

const Layout = () => {
  return (
    <div
      className="h-full w-full flex flex-col justify 
    ">
      <NavbarComponent />
      <div className=" justify-center items-center flex flex-col  min-h-[450px]">
        <h1 className="font-bold text-3xl">Welcome</h1>
        <p>
          Track your grades, effortlessly keep tabs on your academic performance
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
    </div>
  );
};

export default Layout;
