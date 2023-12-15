import React from 'react';

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
        <a href="#" className="text-white hover:text-gray-300 px-4">Home</a>
        <a href="#" className="text-white hover:text-gray-300 px-4">About</a>
        <a href="#" className="text-white hover:text-gray-300 px-4">Help&Support</a>
        {/* Add more links as needed */}
      </nav>
      <button onClick={HandleLoginPage} className="text-white hover:text-gray-300 px-4">Login </button>
    </header>
  );
};

export default Header2;
