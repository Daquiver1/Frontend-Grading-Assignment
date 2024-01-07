/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { MdCastForEducation } from "react-icons/md";


export default function Navbar2() {
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Dashboard</li>
        <li className='p-4 whitespace-nowrap'>Grade Report</li>
        <a href="./MissingGradeForm.jsx"><li className='p-4 whitespace-nowrap'>Missing Grade Form</li></a>
        <li className='p-4'>About</li>
        {/* <li className='p-4'>{width}</li> */}
      </ul>
    </div>
  )
}

 
