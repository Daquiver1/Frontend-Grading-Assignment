import React from "react";
import { Outlet, Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

const Layout = () => {
  return (
    <>
      <div className=" flex flex-col bg-gray-800 text-white">
        <NavbarComponent />
        <div className=" justify-center items-center flex flex-col bg-gray-800 h-full  min-h-[550px] font-bold text-2xl m-9">
          <h1 className="font-bold text-5xl md:text-8xl">Welcome</h1>
          <div className=" ">
            <p>
              Track your grades, effortlessly keep tabs on your academic
              performance and gain valuable insights into your educational
              journey.
            </p>
            <p>
              Navigate through your courses and pinpoint any grades that may
              need attention. Stay in control of your academic records with
              ease.
            </p>
            <p>
              Reporting missing grades has never been simpler,just fill the
              form, and you're on your way to resolving grade-related concerns
            </p>
            <p>
              Once you've reported a missing grade, relax and await positive
              feedback. Our team is dedicated to resolving issues promptly and
              ensuring that your academic records accurately reflect your
              achievements.
            </p>
          </div>
        </div>

        <div className="mt-7">
          <h2 className="font-bold">Ready to get started?</h2>
          <button>
            <Link to="/login">
              <button className="w-full my-5 py-2 bg-teal-500 text-white font-semibold rounded-lg p-10">
                Login
              </button>
            </Link>
          </button>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
