import React from 'react'
import { NavLink } from "react-router-dom";


function SideBar() {
  return (
    <div>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-blue-200">
            <a className="flex items-center pb-4 space-x-3 rtl:space-x-reverse">
                <img src="/images/logo.png" className="h-8 rounded-md" alt="" />
            </a>
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink to="/dashboard"  href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        
                        <span className="ms-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/gradereport" href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        
                        <span className="flex-1 ms-3 whitespace-nowrap">Grade Report</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/gradeforms"   href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        
                        <span className="flex-1 ms-3 whitespace-nowrap">Grade Forms</span>              
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/instructors"   href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        
                        <span className="flex-1 ms-3 whitespace-nowrap">Instructors</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                           
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            </aside>

    </div>
    
  )
}

export default SideBar