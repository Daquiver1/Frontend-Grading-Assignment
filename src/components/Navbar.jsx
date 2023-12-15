import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LOGO from "../assets/logo.png"
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full h-[90px] bg-white'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
        <img className="w-1/5 mr-2" src={LOGO} alt="logo" />
        </div>
        <div className='hidden md:flex'>
          <div className='flex gap-x-4 text-black items-center justify-around'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </div>
            {/* <button className='ml-4'>Get Started</button> */}
        </div>


        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}


        </div>


        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' :
          'absolute left-[-100%]'}>
          <ul>

            <button className='m-8'> Get Started</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;