import React from 'react'
import OIP from '../Assets/OIP (1).jpeg'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
      <img className='w-full h-full object-cover'src={OIP} alt='' />
      </div>

      <div className='bg-[#000300] flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg'>
          <h2 className=' text-4xl font-bold text-[#00df9a] text-center'>SIGN IN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label className='text-white'>Student ID</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-b lue-500 focus;bg-gray-800 focus:outline-none' type='number' />
          </div>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label  className='text-white'>PIN</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-b lue-500 focus;bg-gray-800 focus:outline-none' type='password' />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p  className='text-white flex items-center'><input className='mr-2' type='checkbox' />Remember Me</p>
            <p className='text-white'>Forgot Password</p>
          </div>
          <NavLink to='/login/dashboard'>
          <button className='bg-[#00df9a] w-full  my-5  py-2 text-black shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold rounded-lg'>Log In</button>
          </NavLink>
          
        </form>
      </div>
      </div>
  )
}
