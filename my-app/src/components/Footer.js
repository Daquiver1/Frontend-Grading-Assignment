import React from "react";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import logo from '../images/UG-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: Logo or Site Name */}
                <div className="flex items-center">
                    <img
                        src={logo}  
                        alt="Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-lg font-bold">University of Ghana Grade Systems</span>
                </div>
                

                {/* Center Section: Navigation Links */}
                <nav className="flex space-x-4">
                  <Link to="/" className="hover:text-gray-300">Home</Link>
                </nav>

                {/* Right Section: Social Media Links */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-xl hover:text-gray-300">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-gray-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-gray-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;