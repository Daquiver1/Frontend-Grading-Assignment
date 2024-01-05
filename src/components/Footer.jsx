import React from 'react'

function Footer() {
  return (
    // [ Contact Us | About Us | Disclaimer | Terms & Conditions | Privacy & Security Statement | Powered By ]
    <div className='bg-dark-purple text-white border-t sm:text-[14px] text-[11px]'>
      <ul className='flex justify-center '>
        <li className='mr-1 hover:text-[#00df94] py-3 px-1  ease-in-out hover:scale-[1.1] duration-[0.5s] '>[ Contact Us </li>
        <li className='mr-1 hover:text-[#00df94] py-3 px-1  ease-in-out hover:scale-[1.1] duration-[0.5s] '>| About Us </li>
        <li className='mr-1 hover:text-[#00df94] py-3 px-1  ease-in-out hover:scale-[1.1] duration-[0.5s] '>| Disclaimer </li>
        <li className='mr-1 hover:text-[#00df94] py-3 px-1  ease-in-out hover:scale-[1.1] duration-[0.5s] '>| Terms & Conditions </li>
        <li className='mr-1 hover:text-[#00df94] py-3 px-1  ease-in-out hover:scale-[1.1] duration-[0.5s] '>| Privacy & Security Statement ]</li>
        {/* <li>Powered By </li> */}
      </ul>
    </div>
  )
}

export default Footer