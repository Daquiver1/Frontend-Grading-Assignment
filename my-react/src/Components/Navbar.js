import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState,useRef,useEffect } from "react";

const Navbar = () => {

        
        const [isOpen, setOpen] = useState(false);
        
        let [isActive,setActive] = useState(true);
        
        let [isMore,setMore] = useState(true);
        
        function handleClick() {
        setOpen((prevState) => !prevState);
        }
        
        function dropDown() {
        setActive((prevState)=> !prevState); 
        } 
        function showMore() {
        setMore((prevState)=> !prevState); 
        } 
        
        let show = isActive ? 'hidden':'flex';
        
        let display = isMore ? 'hidden':'flex';


    return ( 
<<<<<<< HEAD
        <div className="w-full  absolute top-0 bg-gray-700">
                {/* navLinks */}
            <div className="flex gap-x-16 h-18 justify-end mx-24 py-4 ">

                <div className="text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
=======
        <div className="w-full absolute top-2">

           <div className="hidden md:flex md:justify-center">
             
                {/* navLinks */}
                <div className="flex gap-x-16 justify-end mx-24 py-4 ">

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/'>Home</NavLink>
</div>

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/dashboard:id'>Dashboard</NavLink>
</div>

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/contact'>Contact</NavLink>
</div>

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/gradeform'>Transcript</NavLink>
</div>

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='report'>Report</NavLink>
</div>

<div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/help'>Help</NavLink>
</div>

<div className="mr-4 bg-[#c12c46] text-white px-4 rounded-full flex items-center justify-center">
<NavLink  to='/login'>Login</NavLink>
</div>
</div>
           </div>

            
{/* mobile view */}

<div className="flex justify-end mr-8 md:hidden items-center space-x-2">
            <span className="inline-block md:hidden" onClick={handleClick}>  
        {isOpen ? (
        <AiOutlineClose className="text-3xl text-color-1" />
        ) : (
        <GiHamburgerMenu className="text-3xl text-color-1" />
            )}
            </span>
</div>
{isOpen && (
<ul className="md:flex gap-x-5 text-sm   space-y-2 px divide-y w-48  py-2 absolute top-8 right-0 z-20 bg-[#56c1ad]">

        <li>
        <div className="   px-4 rounded-full flex items-center justify-center">
>>>>>>> 06b347391f2612774d57bb7a2c618c69cc6076c4
                <NavLink  to='/'>Home</NavLink>
                </div>
        </li>

<<<<<<< HEAD
                <div className=" text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
=======
        <li>
        <div className="   px-4 rounded-full flex items-center justify-center">
>>>>>>> 06b347391f2612774d57bb7a2c618c69cc6076c4
                <NavLink  to='/dashboard'>Dashboard</NavLink>
                </div>
        </li>

        <li>
        <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/contact'>Contact</NavLink>
</div>
        </li>

        <li>
        <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/gradeform'>Transcript</NavLink>
</div> 
        </li>

        <li>
        <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='report'>Report</NavLink>
</div>
        </li>

        <li>
        <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
<NavLink  to='/help'>Help</NavLink>
</div>
        </li>

        <li>
        <div className="py-2 bg-[#c12c46] text-white px-auto rounded-xl flex items-center justify-center">
<NavLink  to='/login'>Login</NavLink>
</div>
        </li>

</ul>
)}

<<<<<<< HEAD
                <div className=" text-white  px-4 rounded hover:bg-orange-700 uppercase font-semibold flex items-center justify-center">
                <NavLink  to='/contact'>Contact</NavLink>
                </div>

                <div className=" text-white   px-4 rounded hover:bg-orange-700 uppercase font-semibold  flex items-center justify-center">
                <NavLink  to='/gradeform'>Transcript</NavLink>
                </div>

               <div className="   text-white  px-4 rounded hover:bg-orange-700 uppercase font-semibold flex items-center justify-center">
               <NavLink  to='report'>Report</NavLink>
               </div>

              <div className="   text-white px-4 rounded hover:bg-orange-700 uppercase font-semibold flex items-center justify-center">
              <NavLink  to='/help'>Help</NavLink>
              </div>

               <div className="mr-4  text-white px-4 rounded hover:bg-orange-700 uppercase font-semibold flex items-center justify-center">
               <NavLink  to='/login'>Login</NavLink>
               </div>
            </div>
=======




>>>>>>> 06b347391f2612774d57bb7a2c618c69cc6076c4
        </div>
     );
}

export default Navbar;
