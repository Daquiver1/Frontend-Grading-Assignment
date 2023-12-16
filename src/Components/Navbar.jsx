import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className ='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-pink-300'>
       UG//MissingGrade.
      </h1>
      <ul className="hidden md:flex">
      <NavLink to='/dashboard/gradereport'>
        <li className='p-4'>Grades</li>
        </NavLink>
        <li className='p-4'>Home</li>
        <NavLink to='/faq'>
        <li className='p-4'>Help</li>
        </NavLink>
       <NavLink to='/dashboard/gradeform'>
        <li className='p-4'>Report</li>
        </NavLink>
        <NavLink to='/dashboard/instructors'>
        <li className='p-4'>Contact</li>
        </NavLink> 
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20} /> }
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%] '}>
      <h1 className='w-full text-3xl font-bold text-pink-300 m-4'>
      UG//MissingGrade.
      </h1>
        <ul className=' uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Help</li>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Help</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar