/* eslint-disable no-unused-vars */
import React from 'react'
import Typed from 'react-typed'

export default function LandingPage() {
  return (
    <div className='text-white my-auto'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df94] font-bold p-2'>Missing Grade Reporting System</p>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 whitespace-nowrap'>Address Grade Discrepancies</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Check</p>
          <Typed 
            className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' 
            strings={['DCIT 201', 'UGRC 223', 'DCIT 205', 'MATH 223', 'DCIT 205',]} 
            typeSpeed={120} backSpeed={140} 
            loop
          />
        </div>
        <p className='md:text-[17px] text-[14px] px-20 font-bold  text-gray-500'>
        The Missing Grade Report System allows students to submit formal reports for any absent grades. It streamlines the reporting process and facilitates communication between students and academic administrators.
        </p>
        <a href="#">
        <button className='bg-[#00df94] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Log In
        </button>
        </a>
      </div>
    </div>
  )
}

