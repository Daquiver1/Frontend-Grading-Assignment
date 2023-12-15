import React from 'react'
import Navbar from '../../components/navbar'
import IMAGE from "../../assets/home.jpg"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center w-full h-screen overflow-hidden" style={{ backgroundImage: `url(${IMAGE})` }}>
        <div className='bg-blue-600 w-full h-full z-10 absolute opacity-20' />
        <div className="text-white p-8 rounded-lg  z-20 flex flex-col items-center justify-center gap-y-1">
          {/* <img src={IMAGE} alt="Home" className="mb-4 rounded-lg" /> */}
          <h1 className="text-4xl font-bold mb-4">Welcome to the Missing Grade Reporting System</h1>
          <p className="text-gray-100">With ease, report and track missing grades!</p>
          <div className="mt-6">
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default HomePage