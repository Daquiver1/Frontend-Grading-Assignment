import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../uglogo.png';

const Navbar = () => {
  return (
    <div className="w-screen h-[84px] flex flex-col sm:flex-row items-center justify-between relative bg-blue-100 text-xl p-4">
      <div className="flex items-center">
        <img src={LOGO} alt="logo" className="w-24" />
      </div>

      <div className="flex flex-col sm:flex-row mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-5">
          <Link to="/">
            <div className="text-zinc-900 text-base font-medium font-['Inter'] leading-normal">Home</div>
          </Link>
          <Link to="/dashboard">
            <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Dashboard</div>
          </Link>
          <Link to="/report">
            <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Grade Report</div>
          </Link>
          <Link to="/missing-grade">
            <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Missing Grade</div>
          </Link>
          <Link to="/contact">
            <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Contact</div>
          </Link>
          <Link to="/help">
            <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Help</div>
          </Link>
        </div>

        <div className="mt-4 sm:mt-0 ml-0 sm:ml-5 flex items-center gap-2">
          <div className="w-[35px] h-6 relative" />
        </div>

        <div className="mt-4 sm:mt-0 ml-auto flex items-center gap-2">
          <div className="px-5 py-2.5 bg-slate-50 rounded-md">
            <Link to="/login">
              <div className="text-center text-blue-500 text-sm font-medium font-['Inter'] leading-tight">Login</div>
            </Link>
          </div>
          <div className="px-5 py-2.5 bg-blue-500 rounded-md">
            <Link to="sign">
              <div className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
