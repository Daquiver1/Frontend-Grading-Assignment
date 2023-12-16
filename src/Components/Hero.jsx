import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-pink-300 font-bold p-2'>UNIVERSITY OF GHANA</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Missing Grade Reporting System</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Track and report all grades that are not recorded.</p>
        </div>
        <p className='md:text-2xl text xl font-bold text-gray-500'>View your grades, report missing grades and communicate with your instructors.  </p>
        <NavLink to ="/login">
          <button className='bg-pink-300 w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black'>Login</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero