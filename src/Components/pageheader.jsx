import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Landing_header = () => {
    return (
        <div className="flex mr-0 shadow-md">
            <img src="/Media_Files/unilogo.png" alt="University Logo" className=" w-52 h-auto mr-[10px] "></img>
            <Navbar/>
            <div className="float-left ml-[30px]">
            <nav className="mt-2 mr-0 ml-28">
                <ul className="flex justify-between">
                    <Link to ="/Login"><button className="p-2 w-[100 px] font-bold text-green-50 bg-[#4c4c4e] px-5 hover:shadow-lg mr-2 rounded-[50px]">Log Out</button></Link>
                    <Link to ="/Help"><button className="p-2 font-bold bg-[#4c4c4e] text-green-50 px-5 rounded-[50px] hover:shadow-lg">Help</button></Link>
                </ul>
            </nav>
            </div>
            
        </div>
    )
        
        
    
    
    
}

export default Landing_header;