import React from 'react'
import uglogo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className="w-full h-[70vh] bg-blue-500 flex flex-col justify-center items-center relative">
        <Link to='/login' className='absolute top-4 right-4 p-4 px-9 rounded shadow-sm border bg-white '>Login</Link>
         <img src={uglogo} alt="" className='w-[400px] mt-10'/>
          <h1 className='text-3xl text-center font-bold text-white mb-8'>Grade Reporting System</h1>
      </div>
      <div className="w-full grow bg-white p-10 text-gray-500 flex flex-col gap-6 items-center">
         <p className='text-center md:w-2/3'>
         Access your grades, assignments, and campus updates effortlessly through our user-friendly interface. Stay organized, stay informed, and navigate your educational journey with ease. Welcome to a digital hub designed to enhance your student life.
         </p>

      <p className='flex items-center flex-wrap justify-center'> <span>Log into your portal Now!</span>
         <Link to='/login' className='text-white top-4 right-4 p-4 px-9 rounded shadow-sm border bg-blue-500 m-2'>Login</Link>
      </p>
      </div>
    </div>
  )
}

export default Landingpage
