import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="">
                {/* navLinks */}
            <div className="nav-link">
                <NavLink  to='/'> <div className="text-[6rem] bg-red-300">
                Home</div> </NavLink>
                <NavLink  to='/dashboard'>Dashboard</NavLink>
                <NavLink  to='/contact'>Contact</NavLink>
                <NavLink  to='/gradeform'>GradeForm</NavLink>
                <NavLink  to='report'>Report</NavLink>
                <NavLink  to='/help'>Help</NavLink>
                <NavLink  to='/login'>Login</NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;