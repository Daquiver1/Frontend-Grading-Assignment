import React from "react";
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
      <div>
        <header class="bg-white">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src={logo} alt="logo"/>
                </a>
              </div>
              <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/dashboard"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="text-white"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/instructor"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="text-white"
                >
                  Instructors
                </NavLink>
                <NavLink
                  to="/missing-grade"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="text-white"
                >
                  Missing Grade
                </NavLink>
                <NavLink
                  to="/grade-report"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="text-white"
                >
                  Grade Report
                </NavLink>
                <NavLink
                  to="/help"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="text-white"
                >
                  Help&Support
                </NavLink>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900" style={{ marginTop: '10px' }}>
                    Log In
                </NavLink>
                <NavLink to="/home" className="text-sm font-semibold leading-6 hover:bg-blue-700 hover:text-white bg-blue-500 text-white py-2 px-4 rounded-md ml-1">Log Out</NavLink>
              </div>
            </nav>
          </header><hr style={{marginLeft: '30px', marginRight:'30px'}}/>
        </div>
    )
} 

export default Header;