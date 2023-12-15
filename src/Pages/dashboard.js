import React from 'react'
import SideBar from '../Components/SideBar'

function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200  rounded-lg">
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center p-4 pl-12 rounded bg-blue-200 h-48">
                        <h2 class="mb-2 text-lg font-semibold text-gray-900">Current CGPA</h2>
                        <div className='pb-4'>
                                <h2 className=' text-7xl'>3.32</h2>
                        </div>
                    </div>
                    <div className="items-center justify-center p-4 pl-12 rounded bg-blue-500 h-48">
                    <h2 class="mb-2 text-lg font-semibold text-gray-900">Total Course completed</h2>
                        <div className='pb-4'>
                                <h2 className=' text-7xl'>14</h2>
                        </div>
                        
                    </div>
                    <div className="items-center justify-center p-4 pl-12 rounded bg-blue-700 h-48">
                    <h2 class="mb-2 text-lg font-semibold text-gray-900">Outstanding Cocurses</h2>
                        <div className='pb-4'>
                                <h2 className=' text-7xl'>2</h2>
                        </div>
                        
                    </div>
                    <div className="items-center justify-center p-4 pl-12 rounded bg-gray-400 h-48">
                    <h2 class="mb-2 text-lg font-semibold text-gray-900">Resit</h2>
                        <div className='pb-4'>
                                <h2 className=' text-7xl'>0</h2>
                        </div>
                    </div>
                </div>
                <div className='notification py-12'>
                <h1 className='text-2xl'>Notification</h1>
                
                <div class="flex flex-col p-8 bg-white shadow-md my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Course Registration</div>
                                <p class="text-sm text-gray-600 leading-none mt-1">Congratulations! Your course registration for the upcoming semester has been successfully processed. You are now officially enrolled in the following courses
                                </p>
                            </div>
                        </div>
                        <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-white shadow-md my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Review Calender</div>
                                <p class="text-sm text-gray-600 leading-none mt-1">Please review your schedule and ensure it aligns with your academic plan. If you have any concerns or questions, feel free to contact the registrar's office.
                                </p>
                            </div>
                        </div>
                        <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
                    </div>
                </div>
                
                

                </div>
            </div>
            </div>
    </div>
    
  )
}

export default Dashboard