// Landing Page
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';

const LandingPage = () => {
    return (
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='p-4'>
      <div className='bg-teal-200'>header</div>
      <div>{<Outlet/>}</div>
      </div>
    </div>
    );
  };
  
  export default LandingPage;  