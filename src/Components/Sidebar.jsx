import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-pink-200">
      <ul class="space-y-2 font-medium">
         <li>
            <NavLink to='/dashboard' href="#" class="flex items-center p-2 text-gray-100 rounded-lg">
               
               <span class="ms-3 text-black">Dashboard</span>
            </NavLink>
         </li>
         <li>
            <NavLink to='/dashboard/gradereport' href="#" class="flex items-center p-2 text-gray-100 rounded-lg">
               
               <span class="flex-1 ms-3 whitespace-nowrap text-black">Grade Report</span>
            
            </NavLink>
         </li>
         <li>
            <NavLink to='/dashboard/gradeform' href="#" class="flex items-center p-2 text-gray-100 rounded-lg group">
               
               <span class="flex-1 ms-3 whitespace-nowrap text-black">Missing Grade</span>
            </NavLink>
         </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <NavLink to='/dashboard/instructors' href="#" class="flex items-center p-2 text-gray-100 transition duration-75 rounded-lggroup">
               <span class="ms-3 text-black">Contact</span>
            </NavLink>
         </li>
         
        
      </ul>
   </div>
</aside>


   </div>
  )
}

export default Sidebar
