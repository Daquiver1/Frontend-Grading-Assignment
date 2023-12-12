import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="w-full absolute top-2">
                {/* navLinks */}
            <div className="flex gap-x-16 justify-end mx-24 py-4 ">

                <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
                <NavLink  to='/'>Home</NavLink>
                </div>

                <div className=" bg-[#56c1ad]  px-4 rounded-full flex items-center justify-center">
                <NavLink  to='/dashboard'>Dashboard</NavLink>
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
     );
}
 
export default Navbar;