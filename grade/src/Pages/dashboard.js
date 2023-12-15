import React from 'react'
import SideBar from '../Components/SideBar'

function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
            <div className="p-4 bg-yellow-50">
                
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col text-center p-4 pl-12 border bg-white h-48">
                        <div className='pb-4'>
                            <h2 className=' text-7xl'>3.32</h2>
                        </div>
                        <h2 class="mb-2 text-2xl font-semibold text-yellow-600">CGPA</h2>
                    </div>
                    <div className="items-center text-center p-4 border bg-white h-48">
                        <div className='pb-4'>
                            <h2 className=' text-7xl'>2</h2>
                        </div>
                        <h2 class="mb-2 text-2xl font-semibold text-yellow-600">N/A Grades</h2>
                        
                    </div>
                    <div className="items-center text-center p-4 border bg-white h-48">
                    <div className='pb-4'>
                        <h2 className=' text-7xl'>16</h2>
                    </div>
                    <h2 class="mb-2 text-2xl font-semibold text-yellow-600">Number of Courses</h2>
                        
                    </div>
                </div>
                <div className='notification py-12'>
                <h1 className='text-2xl'>Notification <button  class="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-500 text-white rounded-full">7</button></h1>
                
                <div class="flex flex-col p-8 bg-white border my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3  text-yellow-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Course Registration</div>
                                <p class="text-sm text-gray-600 leading-none mt-1">If you have alternative courses in mind or if your schedule permits, consider exploring other options. Feel free to contact the registrar's office if you have any questions or concerns regarding your waitlist status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-white border my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 text-yellow-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Missing Grade Update</div>
                                <p class="text-sm text-gray-600 leading-none mt-1">If you notice a missing grade, please first check with your instructor to confirm if there has been a delay in grade submission.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-white border my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3  text-yellow-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                <div class="font-medium leading-none">Instructor Insight</div>
                                <p class="text-sm text-gray-600 leading-none mt-1">Instructors are generally expected to submit grades promptly after the completion of assessments. If you believe there's an unusual delay, it's recommended to contact your instructor or the relevant department for clarification.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-white border my-4 hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 text-yellow-400" fill="none"
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
                        
                    </div>
                </div>
                

                </div>
            </div>
            </div>
    </div>
    
  )
}

export default Dashboard