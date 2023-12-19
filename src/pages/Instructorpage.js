import React from 'react'
import Navbar1 from '../component/Navbar1'
import Footer1 from '../component/Footer1'
import Contact from '../component/Contact'
import Sidebar from '../component/Sidebar'



const Instructorpage = () => {
  return (
    <div className="text-[#232590] bg-fixed  bg-cover bg-center h-full w-full" style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }} >
        <Navbar1 />
      
      <div className='flex'>
        <Sidebar/>
       
        <Contact />

      </div>
       
       
      
      
        <Footer1/>
    </div>
  )
}

export default Instructorpage