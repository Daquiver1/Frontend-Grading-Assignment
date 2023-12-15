import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import App from "../App";



const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <h1 className="lg:text-4x1 text-3x1 md:mb-0 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-teal-400 text-align:center"> Grade Repo <br></br> 
                    </span>
                     Experience the best of privileges and acces your acces your grades with ease
                </h1>
                <div>
                    <input type ="text" placeholder="Enter your phone number" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" />
                    <Link to = '/HelpSupportPage'>
                    <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
                        Contact Us
                    </button>
                    </Link>
                  
                </div>
                <div>
                <p className='grid grid-cols-1 footer-text'>&copy; 2023 UG All rights reserved.</p>
                </div>
                
            </div>
        </footer>
    )
    
}
export default Footer