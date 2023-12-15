import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <p className="font-bold text-[1.5rem] cursor-pointer text-[#232590] ">
          GRADE<span className="text-[#cfa460]">SLEUTH</span>
        </p>

        <div>
          <IoMenu size={35} className="lg:hidden" />
        </div>

        
          <div className="hidden flex-1 md:flex items-center justify-end space-x-4 lg:space-x-10">
            <ul className="flex items-center space-x-4">
              <Link to="/login">
                <button className="lg:w-[8rem] w-[6rem] font-bold text-[1rem] py-2 bg-none hover:ring-2 ring-[#cfa460] rounded-full">
                  Log In
                </button>
              </Link>

              <Link to="/login">
                <button className="lg:w-[8rem] w-[6rem] font-bold text-[1rem] py-2 bg-[#232590] text-white rounded-full hover:bg-[#1a1a7f]">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
   
  );
};

export default Navbar;
