// src/components/Footer.jsx
import React from 'react';
import logo from "../assets/images/logo.png"
import fb from "../assets/images/fb.png"
import gt from "../assets/images/gt.png"
import instagram from "../assets/images/instagram.jpg"
import youtube from "../assets/images/youtube.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '40px', borderRadius: '10px',}}>
            <div className="flex items-center" style={{marginLeft:'30px', marginBottom: '20px'}}>
                <img className="w-16 h-16" src={logo} alt="Logo" />
                <div className="ml-4 flex items-center justify-end">
                    <h2 className="text-2xl font-bold mb-2" style={{marginLeft:'400px'}}><u>Grading System</u></h2>
                </div>
            </div>
            <h4 style={{marginLeft: '30px', marginBottom: '15px'}}>Making the life of students simpler and easier.</h4>
            <div className='flex items-center' style={{marginLeft: '30px', marginRight: '40px'}}>
                <img src={fb} alt="Facebook" className="w-6 h-6" />
                <img src={instagram}  alt="Instagram" className="w-6 h-6 ml-4" />
                <img src={gt}  alt="github" className="w-6 h-6 ml-4" />
                <img src={youtube}  alt="youtube" className="w-6 h-6 ml-4" />
            </div>
            <div className="grid grid-cols-4 gap-2" style={{marginLeft: '30px', marginTop: '20px'}}>
                <h4 className="text-yellow-500">Further Enquiries</h4>
                <h4 className="text-yellow-500">Academics</h4>
                <h4 className="text-yellow-500">Instructors</h4>
                <h4 className="text-yellow-500">Help and Support</h4>
                <p>Grade Report</p>
                <p>Dashboard</p>
                <p>Contact</p>
                <p>FAQ</p>
                <p>Administator</p>
                <p>Missing Grade</p>
                <p></p>
                <p>Employer</p>
            </div>
            <div>
                <hr style={{ width: '80%', height: '1px', backgroundColor: '#ccc', margin: '20px auto', border: 'none', marginBottom: '10px'}} />
                <p style={{marginLeft: '50px'}}>© 2020 Your Company, Inc. All rights reserved.</p>
            </div>
    </footer>
  );
};

export default Footer;
