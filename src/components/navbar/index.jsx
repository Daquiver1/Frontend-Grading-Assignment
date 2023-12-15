import React from 'react'
import LOGO from "../../assets/u logo.jpg"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className=' flex items-center justify-between px-10 py-5'>
        <img src={LOGO} alt="Logo" className="w-16 h-16" />

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Homepage</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          {/* <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/gradereport" className="text-gray-700 hover:text-blue-600">Gradereport</Link>
          <Link to="/missing" className="text-gray-700 hover:text-blue-600">Missing</Link> */}
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600">Support</Link>
        </div>
        <div />
      </nav>
    </>
  )
}

export default Navbar
