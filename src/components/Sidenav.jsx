import React, {useState} from 'react'
import Logo from "./assets/image2.jpeg";
import{AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineLogin,AiOutlineDashboard} from 'react-icons/ai';
import { GrDocumentMissing } from "react-icons/gr";
import { MdReportProblem, MdContactSupport } from "react-icons/md"; <br />

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    
  };
  return (
    <div>
    <div className='lefftSide'>
    <img src={Logo} />
    </div>
    <div className='rightSide'></div>
      <AiOutlineMenu  onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden '

      />
      {nav ? (
          <div className='fixed w-full h-screen bg-white/90  flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
             <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <AiOutlineDashboard size={20} />
            <span className='pl-4'>Dashboard</span>
          </a>

          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <GrDocumentMissing size={20} />
            <span className='pl-4'>Missing Grade</span>
          </a>

          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <MdReportProblem size={20} />
            <span className='pl-4'> Grade Report</span>
          </a>

          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact Us</span>
          </a>

          <a onClick={handleNav} href="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <MdContactSupport size={20} />
            <span className='pl-4'>Help and Support</span>
          </a>

          <a onClick={handleNav} chref="#main"
          className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
            <AiOutlineLogin size={20} />
            <span className='pl-4'>Login</span>
          </a>
          </div>

        )
        : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
      <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'></a>
      <div>
          
      <a href='#main'>
            <AiOutlineHome size={20} />
          </a>

          <a onClick={handleNav} href='#dashboard'>
            <AiOutlineDashboard size={20} />
          </a>

          <a onClick={handleNav} href='#missinggrade'>
            <GrDocumentMissing size={20} />
          </a>

          <a onClick={handleNav} href='#ReportProblem'>
            <MdReportProblem size={20} />
          </a>

          <a onClick={handleNav} href='#Mail'>
            <AiOutlineMail size={20} />
          </a>
          
          <a onClick={handleNav} href='#ContactSupport'>
            <MdContactSupport size={20} />
          </a>

          <a onClick={handleNav} href='#Login'>
            <AiOutlineLogin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidenav
