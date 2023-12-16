import React from 'react'
import SideBar from '../Components/SideBar'

function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
            <div className="p-4 bg-gray-50">
            <div  class="bg-indigo-600 px-4 py-3 my-12 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p class="text-center font-medium sm:text-left">
                        Missing Course?
                        <br class="sm:hidden" />
                        What should I do if I notice a missing grade in my academic record?
                    </p>

                    <a
                        class="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
                        href="#"
                    >
                        Learn More
                    </a>
                    </div>

                
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col pt-10 justify-center p-4 pl-12 border bg-blue-200 h-48">
                        
                        <h2 class="mb-2 text-5xl font-semibold text-blue-600">CGPA:</h2>
                        <div className='pb-4'>
                            <h2 className=' text-7xl'>3.32</h2>
                        </div>
                    </div>
                    <div className="flex flex-col pt-10 justify-center p-4 pl-12 border bg-blue-200 h-48">
                        
                        <h2 class="mb-2 text-5xl font-semibold text-blue-600">Missig Grade:</h2>
                        <div className='pb-4'>
                            <h2 className=' text-7xl'>4</h2>
                        </div>
                    </div>
                    <div className="flex flex-col  pt-10 justify-center p-4 pl-12 border bg-blue-200 h-48">
                        
                        <h2 class="mb-2 text-5xl font-semibold text-blue-600">Course Offering:</h2>
                        <div className='pb-4'>
                            <h2 className=' text-7xl'>6</h2>
                        </div>
                    </div>
                </div>
                <div className='notification py-12'>
                <h1 className='text-2xl'>Notification</h1>
                
                <div class="flex flex-col p-8 bg-blue-200 border my-4 hover:shodow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3  text-blue-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                
                                <p class="text-sm text-gray-600 leading-none mt-1">If you have alternative courses in mind or if your schedule permits, consider exploring other options. Feel free to contact the registrar's office if you have any questions or concerns regarding your waitlist status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-blue-200  border my-4 hover:shodow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 text-blue-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                
                                <p class="text-sm text-gray-600 leading-none mt-1">If you notice a missing grade, please first check with your instructor to confirm if there has been a delay in grade submission.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-blue-200  border my-4 hover:shodow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3  text-blue-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                               
                                <p class="text-sm text-gray-600 leading-none mt-1">Instructors are generally expected to submit grades promptly after the completion of assessments. If you believe there's an unusual delay, it's recommended to contact your instructor or the relevant department for clarification.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="flex flex-col p-8 bg-blue-200 border my-4 hover:shodow-lg ">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-16 h-16 rounded-2xl p-3 text-blue-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex flex-col ml-3">
                                
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