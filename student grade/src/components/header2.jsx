import React from 'react';
import {NavLink} from "react-router-dom"

const Header2 = ({ logoPath }) => {
    const HandleLoginPage = () => {
        //handle Login Logic
        console.log('Login button clicked');
    }
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-4 flex items-center justify-between">
      {/* Logo */}
      <img src={logoPath} alt="Logo" className="h-8 w-8" />

      {/* Navigation Links */}
      <nav className="flex-grow text-center">
        {/* Add your navigation links here */}
        <NavLink to="/home" className="text-white hover:text-gray-300 px-4">Home</NavLink>
        <NavLink to="/about"className="text-white hover:text-gray-300 px-4">About</NavLink>
        <NavLink to="/help"className="text-white hover:text-gray-300 px-4">Help&Support</NavLink>
        {/* Add more links as needed */}
      </nav>
      <NavLink to="/login"  className="text-white hover:text-gray-300 px-4">Login </NavLink>
    </header>
  );
};

export default Header2;
