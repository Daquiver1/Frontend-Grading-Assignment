import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/utils.css"

const TopBar = () => {
  const [isNotified, setIsNotified] = useState(false);
  return (
    <>
      <div className="container flex justify-around">
        <div className="text-image flex gap-5">
          <img
            className="w-10 h-10 rounded-full place-items-center"
            src="../../../public/icon-1.jpg"
            alt="Our logo"
          />
          <p className="our-name text-3xl text-blue-300">Pep&apos;s Grade Report System</p>
        </div>
        <div className="right-side flex place-items-center gap-5">
          <button className="notification text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          <details className="hover:cursor-pointer">
            <summary>
              <button>
                <div className="flex place-items-center gap-2">
                  <p className="text-2xl text-blue-600">User Account</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </button>
            </summary>
            <div>
              <p className="hover-apply hover-effect">user Name Displays here</p>
              <p className="hover-apply hover-effect">User Id displays here</p>
              <Link to="/">
                <p className="hover-apply hover-effect">Logout</p>
              </Link>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default TopBar;
