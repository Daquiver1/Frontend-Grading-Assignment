import {useState} from 'react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import HelpAndSupportFAQ from './HSP';



const HelpAndSupport = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">

      <Sidebar/>

      

      

      <div className=" flex-1 items-center bg-Thistle-Niagara ">
      <h1 className="text-4xl font-bold mb-8 pl-40">Help and Support</h1>

      <HelpAndSupportFAQ/>
      </div>



    </div>
  )
    
}

export default HelpAndSupport;