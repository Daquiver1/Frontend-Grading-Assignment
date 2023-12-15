import React from 'react'
import {FaBook, FaCheck, FaChurch, FaFacebookMessenger, FaGrav, FaReply, FaSchool, FaThermometerThreeQuarters, FaTimes} from 'react-icons/fa'

function StDashBoard() {
  return (
    <main>
       <div className='p-2'>
         <h1 className='font-bold text-3xl uppercase text-blue-950 p-4'>Student Dashboard</h1>
       </div>

      <div className='w-full flex gap-2 p-2 flex-wrap'>
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-blue-500 text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>12 <br />
               </span>
               <span className='text-white/70'>courses</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaBook size={100}/>
            </div>
        </div>
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-[#51c851] text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70 whitespace-nowrap'>Reported Grades</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaThermometerThreeQuarters size={100}/>
            </div>
        </div>
        
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-[#46878b] text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>1 <br />
               </span>
               <span className='text-white/70'>Reply</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaFacebookMessenger size={100}/>
            </div>
        </div>
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-purple-600/40 text-white h-[200px] border flex justify-center items-center">
        <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70'>Semesters</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaSchool size={100}/>
            </div>
        </div>
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-green-600/40 text-white h-[200px] border flex justify-center items-center">
        <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70'>Passed</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaCheck size={100}/>
            </div>
        </div>
        <div className="flex-1 w-full sm:min-w-[350px] rounded-lg bg-red-600/40 text-white h-[200px] border flex justify-center items-center">
        <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70'>Failed Courses</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaTimes size={100}/>
            </div>
        </div>
    </div>
    </main>
  )
}

export default StDashBoard
