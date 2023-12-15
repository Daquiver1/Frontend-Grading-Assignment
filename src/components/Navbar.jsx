/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { MdCastForEducation } from "react-icons/md";



function Navbar() {
  const [nav, setNav] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  
  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])

  function HandleTitle(){
    if (window.innerWidth < 750) {
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] '><MdCastForEducation className='mr-3 flex self-center' />Grade Report Form</h1>)
    }
    else if (window.innerWidth > 750 && window.innerWidth < 870) {
      if(window.innerWidth > 750){
        setNav(true)
      }
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] '><MdCastForEducation className='mr-3 flex self-center' />Grade </h1>)
    }
    else if (window.innerWidth > 870 && window.innerWidth < 950) {
      if(window.innerWidth > 750){
        setNav(true)
      }
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] '><MdCastForEducation className='mr-3 flex self-center' />Grade Form</h1>)
    }
    else if (window.innerWidth > 1000){
      if(window.innerWidth > 750){
        setNav(true)
      }
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] '><MdCastForEducation className='mr-3 flex self-center' />Grade Report Form</h1>)
    }
    else {
      if(window.innerWidth > 750){
        setNav(true)
      }
      return (<h1 className='w-full text-3xl font-bold text-[#00df94] '>Grade Report Form</h1>)
    }
  }

  function HandleTitle2 (){
    if (window.innerWidth < 750) {
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] mt-8 ml-4 '><MdCastForEducation className='mr-3 flex self-center' />Menu</h1>)
    }
    else{
      return (<h1 className='w-full  flex text-3xl font-bold text-[#00df94] mt-8 ml-4'><MdCastForEducation className='mr-3 flex self-center' />Grade Report Form</h1>)
    }
  }
  

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto bg-dark-purple'>
      <HandleTitle />
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Dashboard</li>
        <li className='p-4 whitespace-nowrap'>Grade Report</li>
        <a href="./MissingGradeForm.jsx"><li className='p-4 whitespace-nowrap'>Missing Grade Form</li></a>
        <li className='p-4'>About</li>
        <li className='p-4'>{width}</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-950 h-full z-20 bg-dark-purple ease-in-out duration-500': 'fixed left-[-100%] '}>
        <HandleTitle2 />

        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Dashboard</li>
          <li className='p-4 border-b border-gray-600'>Grade Report</li>
          <li className='p-4 border-b border-gray-600'>Missing Grade Form</li>
          <li className='p-4 border-b border-gray-600'>Instructor Contact Page</li>
          <li className='p-4 '>Help and Support Page</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
