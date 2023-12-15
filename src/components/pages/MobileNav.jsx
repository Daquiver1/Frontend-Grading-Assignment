import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/utils.css";

const MobileNav = () => {
  return (
    <>
      <div className=" flex flex-col gap-5 place-items-center right-24 text-xl bg-blue-900 w-screen rounded-md sliding-semi-text text-black hover:bg-slate-500 hover:text-blue-900 hover:cursor-pointer">
        <div className="">
          <img
            className="rounded-full w-20"
            src="../../../public/icon-1.jpg"
            alt="Company icon"
          />
        </div>
        <Link to="/">
          <button
            className=""
            title="Click to login if you already have an account"
          >
            HOME
          </button>
        </Link>
        <Link to="/login">
          <button
            className=""
            title="Click to login if you already have an account"
          >
            LOGIN
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="" title="Click to go to the dashboard">
            DASHBOARD
          </button>
        </Link>
        <Link to="/help">
          <button className="" title="Click here for help">
            HELP
          </button>
        </Link>
        <Link to="/create-account">
          <button className="" title="Click here for help">
            CREATE ACCOUNT
          </button>
        </Link>
        <Link to="/report">
          <button className="" title="Click here for help">
            GRADE REPORT
          </button>
        </Link>
        <Link to="/missing">
          <button className="" title="Click here for help">
            MISSING GRADE
          </button>
        </Link>
        <Link to="/instructor">
          <button className="" title="Click here for help">
            INSTRUCTOR
          </button>
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
