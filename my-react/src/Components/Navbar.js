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
        <div className="w-full  absolute top-0 bg-gray-700">
                {/* navLinks */}
            <div className="flex gap-x-16 h-18 justify-end mx-24 py-4 ">

                <div className="text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
                <NavLink  to='/'>Home</NavLink>
                </div>
        </li>

                <div className=" text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
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
        </div>
     );
}

export default Navbar;
