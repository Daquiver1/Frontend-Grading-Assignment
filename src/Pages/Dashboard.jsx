import React from 'react'
import Sidebar from '../Components/Sidebar'

function Dashboard() {

  const notifications = [
    { id: 1, message: 'New message received', timestamp: '2 minutes ago' },
    { id: 2, message: 'Upcoming deadline for Assignment 1', timestamp: '1 hour ago' },
    {id: 3, message: 'Resoursces added in ECONS 211', timestamp: '2 hour ago'},
    {id:4 , message: 'Assignment submitted successfully', timestamp: '3 hour ago'},
    {id:5 , message: 'Missing grade in  critical thinking', timestamp: '1 day ago'},
    {id:6 , message: 'Missing grade resolved in Academic writing', timestamp: '2 days ago'},

    // Add more notifications as needed
  ];
  
  return (
    <div>
      <h1>dfuuijh</h1>
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class="flex p-4  ">
        <div className='mx-4'>
         <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-100 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 201 </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200        </p>
          </a>
        </div>
         
          <div className='mx-4'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-200 dark:border-white dark:hover:bg-gray-700">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 203</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200     </p>
          </a>
      </div>
      <div className='mx-4'>
         <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-300 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 209</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200         </p>
          </a>
        </div>
         
          <div className='mx-4'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-400 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 207</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200    </p>
          </a>
      </div>

      <div className='mx-4'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-500 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 207</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200    </p>
          </a>
      </div>

      <div className='mx-4'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-600 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 207</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200    </p>
          </a>
      </div>

      <div className='mx-4'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-700 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">DCIT 207</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">CS Level 200    </p>
          </a>
      </div>
      
      </div>

      <div>
        <h5  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10">
          Grade Overview for Pete Griffin
        </h5>
     </div>
     <div>
     <h5  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          CGPA: 3.5
        </h5>
     </div>
     <div>
      <p className='text-white' >
        Go to Grade report for more details
      </p>
     </div>

            <div className="max-w mx-auto mt-8">
             <ul className="divide-y divide-gray-300">
              {notifications.map((notification) => (
              <li key={notification.id} className="py-4">
                <div className="text-sm font-medium text-gray-100">{notification.message}</div>
                <div className="text-xs text-gray-100">{notification.timestamp}</div>
              </li>
            ))}
          </ul>
        </div>
       
      </div>

    </div>
  )
}

export default Dashboard