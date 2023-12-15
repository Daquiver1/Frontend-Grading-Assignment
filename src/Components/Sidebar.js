import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className="fixed left-0 top-0 bottom-0 w-64 bg-indigo-100 text-white transition-all duration-300 ease-in-out transform translate-x-0 z-50"
    >
      <div className="flex items-center justify-center h-16 bg-indigo-100">
        <h1 className="text-white text-lg">Sidebar</h1>
      </div>
      <ul className="py-4 px-2">
        <Link to="/Home">
        <li className="py-2 pl-4 text-gray-300 hover:text-white">
        Home
        </li>
        </Link>
        
        <li className="py-2 pl-4 text-gray-300 hover:text-white">
          <a href="">About</a>
        </li>
        <li className="py-2 pl-4 text-gray-300 hover:text-white">
          <a href="">Services</a>
        </li>
        <li className="py-2 pl-4 text-gray-300 hover:text-white">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar