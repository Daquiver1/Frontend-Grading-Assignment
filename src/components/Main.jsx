import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen top-0 left-0 bg-white/50 flex object-cover object-left scale-x-[-1]' src="src/components/assets/download1.png" alt="" />
      <div className='w-full h-screen  absolute top-0 left-0 '>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
      <h2 className='flex sm:text-3xl text-2xl pt-6 text-black-700' >Message:
      <TypeAnimation
      sequence={[
        "Access the University of Ghana Undergraduates'",
        100, 
        "Official Gateway.",
        100,
        
        
        "Access the University of Ghana Undergraduates' official gateway", 
        () => {
          console.log('Sequence completed');
        },


      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', width:'w-full h-screen  absolute top-0 left-0' }}
      repeat={Infinity}
    />
      </h2>
      <div className='flex  justify-between pt-6 max-w-[100px] w-full' >
        <FaTwitter className='cursor pointer' size={20} />
        <FaFacebookF className='cursor pointer' size={20} />
        <FaLinkedinIn className='cursor pointer' size={20} />
        <FaInstagram className='cursor pointer' size={20} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Main
