import React ,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navbar.css"



const Navbar=()=>{
    const [menuOpen,setMenuOpen] =useState(false)
       
    return(
     
        
        <nav >
      
      
            <li>
            <Link to ="/Home" className="title">GradeTracker</Link>
            </li>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <ul className={menuOpen ? "open": ""}>
            <li>
            <NavLink to ="/Home">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
            <NavLink to="/About">About</NavLink>
            </li>
            <li>
            <NavLink to="/InstructorContact">InstructorContact</NavLink>
            </li>
            <li>
            <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li>
            <NavLink to="/GradeReport">GradeReport</NavLink>
            </li>
            <li>
            <NavLink to="/Contact">Contact</NavLink>
            </li>
            
        
        </ul>
      </nav>
      
           
        
    )  
}
export default Navbar; 