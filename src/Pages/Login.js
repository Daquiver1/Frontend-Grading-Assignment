import React from 'react'
import FooterLog from '../Components/FooterLog'


const Login = () => {
  return (
    <>
    
    <div>
    
    <div className='flex items-center justify-center min-h-screen bg-gray-100 pb-12'>
    <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
     
      <div className='flex flex-col justify-center p-8 md:p-14'>
        <span className='mb-3 text-4xl font-bold text-gray-800'>Welcome back!</span>
        <span className='font-light text-gray-400 mb-8'>
          Please enter your details:
        </span>
        <div className='py-4'>
          <span className='mb-2 text-md font-semibold'>Student ID</span>
          <input
            type='text'
            className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
            name='studentid'
            id='studentid'/>
        </div>
        <div className='py-4'>
          <span className='mb-2 text-md font-semibold'>PIN</span>
          <input
            type='password'
            name='pin'
            id='pin'
            className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
          />
        </div>
       
        <button
          className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border
           hover:border-gray-300'>
          Sign in
        </button>
        <div className='flex justify-between w-full py-4'>
          <span className='font-bold text-md mt-[-1rem] ml-[5rem]'>Forgot password</span>
        </div>
        
        <div className='text-center text-gray-400'>
          Don't have an account?
          <span className='font-bold text-black'> Sign up for free</span>
        </div>
      </div>
      
      <div className='relative'>
        
      </div>
    </div>
  </div>
  </div>
  <FooterLog/>
  </>
  )
}

export default Login