import {useState} from 'react';
import Sidebar from '../components/Sidebar';



const HelpAndSupport = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">

      <Sidebar/>

      

      

      <div className="bg-gradient-to-r from-brown-500 via-gray-500 to-green-500 ">
        <h1 className = "text-2xl font-semibold"> Welcome to Help and Support.</h1>
      </div>



    </div>
  )
    
}

export default HelpAndSupport;