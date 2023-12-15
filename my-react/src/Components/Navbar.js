import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="w-full  absolute top-0 bg-gray-700">
                {/* navLinks */}
            <div className="flex gap-x-16 h-18 justify-end mx-24 py-4 ">

                <div className="text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
                <NavLink  to='/'>Home</NavLink>
                </div>

                <div className=" text-white rounded hover:bg-orange-700 uppercase font-semibold px-4 flex items-center justify-center">
                <NavLink  to='/dashboard'>Dashboard</NavLink>
                </div>

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