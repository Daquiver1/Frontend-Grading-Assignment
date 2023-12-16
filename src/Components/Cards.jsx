import React from 'react'
import Download from '../Assets/download.jpeg'
import OIP from '../Assets/OIP.jpeg'
import Th from '../Assets/th.jpeg'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Download} alt='/' />
         <h1 className='text-2xl font-bold text-center py-8'>Student reporting</h1>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Log into the system using your credentials</p>
          <p className='py-2 border-b mx-8'>Select course and provide details about missing grade</p>
          <p className='py-2 border-b mx-8'>Attach relevant documents if available</p>
         </div>
        </div>
        
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white'src={OIP} alt='/' />
         <h1 className='text-2xl font-bold text-center py-8'>Faculty resolution</h1>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Faculty members receive timely notifications of reported missing grades.</p>
          <p className='py-2 border-b mx-8'>Review details provided by students and take appropriate action.</p>
          <p className='py-2 border-b mx-8'>Communicate resolution to students through the system.</p>
         </div>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Th} alt='/' />
         <h1 className='text-2xl font-bold text-center py-8'>Notification and Updates</h1>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Users receive notifications on the status of reported missing grades.</p>
          <p className='py-2 border-b mx-8'>Regular updates keep you informed throughout the resolution process.</p>
         
         </div>
        </div>
        

      </div>
    </div>
    
  )
}

export default Cards