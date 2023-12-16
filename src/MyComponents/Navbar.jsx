import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <style>
        {`
          .dropdown {
            display: none;
            position: fixed;
            left: -100%;
            top: 70px; 
            width: 50%; 
            height: calc(100% - 70px); 
            background-color: black;
            transition: all 0.3s ease-in-out;
            z-index: 999;
            overflow-y: auto; 
          }

          .dropdown.active {
            display: block;
            left: 0;
          }

          .dropdown ul {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
          }

          .dropdown ul li {
            padding: 20px 0; 
            border-bottom: 1px solid #444;
            color: white;
            transition: all 0.2s ease-in-out; 
          }

          .dropdown ul li:hover {
            background-color: #333;
            cursor: pointer;
          }
        `}
      </style>
      
      <div className='flex justify-between items-center h-auto max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-green-500 cursor-pointer' onClick={handleNav}>
          Grade Alert Nexus</h1>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div className={nav ? 'dropdown active' : 'dropdown'}>
        <ul className='uppercase p-4'>
          <li className='px-4 border-b border-gray-100'>Home</li>
          <li className='px-4 border-b border-gray-100'>Dashboard</li>
          <li className='px-4 border-b border-gray-100'>Help/support</li>
          <li className='px-4 border-b border-gray-100'>Contact</li>
          <li className='px-4 border-b border-gray-100'>Login</li>
          <li className='px-4 border-b border-gray-100'>Grade form</li>
          <li className='px-4 border-b'>Report</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
