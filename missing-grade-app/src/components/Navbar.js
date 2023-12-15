import React, { useState } from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-slate-400 text-black">
      <div className="container mx-auto px-5 lg:max-w-[1250px] flex justify-between items-center h-16">
        <p className="font-bold text-lg md:text-xl lg:text-2xl cursor-pointer">Missing Grade System</p>

        <div className="hidden lg:flex items-center space-x-1">
      <Link to="/" className=" py-1 px-1 bg-[#788480] hover:text-white rounded-md">Home</Link>

          <Link to="/Dashboard" className=" py-1 px-1 bg-[#788480] hover:text-white rounded-md">Dashboard</Link>

          <Link to="/Grade-report" className=" py-1 px-1 bg-[#788480] hover:text-white rounded-md">Grade Report</Link>

            <Link to="/Missing-grade" className=" py-1 px-1 inline-block bg-[#788480] hover:text-white rounded-md">Missing Grade</Link>

              <Link to="/Instructor-contact" className=" py-1  px-1 bg-[#788480] hover:text-white rounded-md">Instructor Contact</Link>

                <Link to="/Help-support" className=" py-1 px-1 bg-[#788480] hover:text-white rounded-md">Help & Support</Link>
        </div>

        <div className="lg:hidden">
          <TiThMenuOutline
            size={28}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="absolute top-16 left-0 right-0 bg-slate-400 border border-gray-700 py-2 px-4 z-10">
              <ul className="flex flex-col items-start space-y-2">
                <li className="cursor-pointer font-bold hover:text-white bg-[#17160f] text-white rounded-md py-1 px-3">
                  <Link to="/" className="font-bold py-2 px-4  hover:text-white rounded-md">Home</Link>
                </li>
                <li className="cursor-pointer font-bold hover:text-white bg-[#17160f] text-white rounded-md py-1 px-3">
                  <Link to="/Login">Login</Link>
                </li>
                <li className="cursor-pointer font-bold hover:text-white bg-[#17160f] text-white rounded-md py-1 px-3">
                  <Link to="/Help-support">Help & Support</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
