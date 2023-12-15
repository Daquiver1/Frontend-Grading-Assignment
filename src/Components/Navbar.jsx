import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
        return (
            <div className="ml-[100px] mt-[6.7px]">
                <nav className="flex justify-between">
                <Link to= "/Dashboard"> 
                    <div id="6667" className="ml-[10px] text-center text-[15pt] shadow-md p-1">
                        <button>Dashboard</button>                      
                    </div>
                    </Link>
                    <Link to= "/Gradereport">
                    <div className="ml-[10px] text-[15pt] shadow-md p-1">
                        <button>Grade Report</button>
                    </div>
                    </Link>
                    <Link to = "/Instructorcontact">
                    <div className="ml-[10px] text-[15pt] shadow-md p-1">
                        <button>Contact Instructors</button> 
                    </div>
                    </Link>
                    <Link to= "/Missing_gradeform">
                    <div className="ml-[10px] text-[15pt] shadow-md p-1">
                            <button>Missing Grade Form</button>  
                    </div>
                    </Link>
                </nav>
                
            </div>
        )
        
    }   
export default Navbar;