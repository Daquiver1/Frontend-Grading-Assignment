import React from 'react'
import { NavLink } from "react-router-dom";


function SideBar() {
  return (
    <div>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
            <a className="flex items-center pb-4 space-x-3 rtl:space-x-reverse">
                <img src="/images/ug.png" className="h-12 " alt="" />
            </a>
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink to="/dashboard"  href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-blue-900 group">
        
                        <span className=" text-bold ms-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/gradereport" href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-blue-900 group">
                        
                        <span className="flex-1 text-bold  ms-3 whitespace-nowrap">Grade Report</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/gradeforms"   href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-blue-900  group">
                        
                        <span className="flex-1 text-blod ms-3 whitespace-nowrap">Grade Forms Page</span>              
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/instructors"   href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-blue-900  group">
                        
                        <span className="flex-1 text-bold ms-3 whitespace-nowrap">Lecturer Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-blue-900 group">
                           
                        <span className="flex-1 text-bold ms-3 whitespace-nowrap">Log Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            </aside>

    </div>
    
  )
}

export default SideBar