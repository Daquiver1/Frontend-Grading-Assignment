/*import React from 'react'

function Profile() {
  return (
    <div className='w-full flex justify-center items-center'>
      <h1 className='font-bold text-5xl text-blue-500 mt-10'>Student Profile </h1> 
      <br />
      <br />
      <p>lorem</p>

      
      
    </div>
  )
}

export default Profile

import React from 'react'
import {FaBook, FaFacebookMessenger, FaGrav,FaThermometerThreeQuarters} from 'react-icons/fa'

function Profile() {
  return (
    <main>
       <div className='p-2'>
         <h1 className='font-bold text-3xl uppercase text-blue-950 p-4'>St</h1>
       </div>

      <div className='w-full flex gap-2 p-2'>
        <div className="flex-1 rounded-lg bg-blue-500 text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>12 <br />
               </span>
               <span className='text-white/70'>courses</span>
            </span>
            <div className='flex-1 flex justify---center items-center text-white/70'>
               <FaBook size={100}/>
            </div>
        </div>
        <div className="flex-1 rounded-lg bg-[#51c851] text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70 whitespace-nowrap'>Reported Grades</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaThermometerThreeQuarters size={100}/>
            </div>
        </div>
        
        <div className="flex-1 rounded-lg bg-[#46878b] text-white h-[200px] border flex justify-center items-center">
            <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>1 <br />
               </span>
               <span className='text-white/70'>Reply</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaFacebookMessenger size={100}/>
            </div>
        </div>
        <div className="flex-1 rounded-lg bg-purple-600/40 text-white h-[200px] border flex justify-center items-center">
        <span className='flex-1 flex flex-col justify-center items-center'>
               <span className='text-[5rem]'>2 <br />
               </span>
               <span className='text-white/70'>Semesters</span>
            </span>
            <div className='flex-1 flex justify-center items-center text-white/70'>
               <FaGrav size={100}/>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Profile*/

import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import esi from "../images/esi.jpg"


function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div className="profile-box">
        <div className="profile-image">
          <img src={esi} alt="Profile" />
        </div>
        <div className="profile-info">
          <FaUser className="profile-icon" />
          <span>Name: Esinam Dodoo</span>
        </div>
        <div className="profile-info">
          <FaEnvelope className="profile-icon" />
          <span>Email: esinam@example.com</span>
        </div>
        <div className="profile-info">
          <FaPhone className="profile-icon" />
          <span>Phone: (123) 456-7890</span>
        </div>
        <div className="profile-info">
          <FaCalendarAlt className="profile-icon" />
          <span>Date of Birth: March 5, 2003</span>
        </div>
        <div className="profile-info">
          <FaMapMarkerAlt className="profile-icon" />
          <span>Location: New York, USA</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

