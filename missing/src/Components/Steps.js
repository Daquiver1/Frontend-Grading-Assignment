import React from 'react'

function Steps() {
  return (
    <div className='w-full justify-center m-4 mb-20'>
    <div className="relative w-fit font-body-lg-medium py-4 text-black">
      <h2 className="text-xl font-semibold leading-7 text-gray-700">Steps to follow</h2> 
    </div>
    <div className="grid grid-cols-4 content-center mx-10 items-start gap-2">
          <div className="max-w-sm h-48 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
             <h2 className="mb-3 font-normal text-gray-300 dark:text-gray-200"> Step 1</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Login Securely:Use your Student ID and PIN to securely log in to the system.</p>
          </div>
       
          <div className="max-w-sm  h-48 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
             <h2 className="mb-3 font-normal text-gray-300 dark:text-gray-200"> Step 2</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore Your Dashboard:Get an overview of your current grades and receive alerts for any missing grades.</p>
          </div>
          <div className="max-w-sm h-48 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
             <h2 className="mb-3 font-normal text-gray-300 dark:text-gray-200"> Step 3</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade Report:Click on Missing Grade tab on the sidebar to fill the form and submit it to your Instructor.</p>
          </div>
          <div className="max-w-sm h-48 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
             <h2 className="mb-3 font-normal text-gray-300 dark:text-gray-200"> Step 4</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade Report:Click on Missing Grade tab on the sidebar to fill the form and submit it to your Instructor.</p>
          </div>
    </div>
  </div>
  )
}

export default Steps