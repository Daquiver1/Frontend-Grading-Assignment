import React from 'react'
import Laptop from '../Assets/laptop.jpg'

function Overview() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>SYSTEM OVERVIEW</p>
          <h1 className='md:4xl sm:text-3xl text-2xl font-bold py-2'>Missing Grade Reporting System</h1>
          <p>Welcome to our Missing Grade Reporting System, designed to streamline the process of addressing and resolving missing grades for students and faculty. This comprehensive overview provides a glimpse into the key features, benefits, and functionalities of our system. The primary goal of the Missing Grade Reporting System is to facilitate a transparent and efficient mechanism for students to report missing grades and for faculty to promptly address and resolve these issues. By centralizing this process, we aim to enhance the overall academic experience for everyone involved.</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 '>Login</button>
        </div>
      </div>

    </div>
  )
}

export default Overview