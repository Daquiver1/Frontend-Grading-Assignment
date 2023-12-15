import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import HeroSection from './Hero';

const Header = () => {
  const [nav,setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav)
  }
  return ( 
    <div className='bg-dblue text-white'>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h2 className="w-full text-3xl font-bold text-lgreen">logo</h2>
        <ul className=" hidden md:flex gap-4">
          <li>HOME</li>
          <li>ACCOUNT</li>
          <li>SIGN IN</li>
          <li>GET STARTED</li>
        </ul>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-dblue ease-in-out duration-700" : "fixed left-[-100%]"}>
      <h2 className="w-full text-3xl font-bold text-lgreen  m-4">logo</h2>
        <ul className="uppercase pt-24 ">
          <li className="p-4">HOME</li>
          <li className="p-4">ACCOUNT</li>
          <li className="p-4">SIGN IN</li>
          <li className="p-4">GET STARTED</li>
        </ul>
      </div>
      <HeroSection/>
    </div>
   );
}
 
export default Header;