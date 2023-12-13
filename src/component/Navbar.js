import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full h-[5rem]">
      <div className="hidden lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4">
        <p className="font-bold text-[1.5rem] cursor-pointer ">
          GRADE<span className="text-[#cfa460]">SLEUTH</span>
        </p>

        <div className="flex-1 flex items0center justify-end space-x-10">
          <ul className="flex items-center space-x-6">
            <Link to="/login">
              <button className="w-[8rem] font-bold text-[1rem] py-2 bg-none hover:ring-2 ring-[#cfa460] rounded-full">
                Log In
              </button>
            </Link>

            <Link to="/login">
              <button className="w-[8rem] font-bold text-[1rem] py-2 bg-[#232590] text-white rounded-full hover: ">
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
