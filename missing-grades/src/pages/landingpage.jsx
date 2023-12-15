import React from 'react';
import { Link } from "react-router-dom";
import './landingpage.css';
import logo from '../assets/images/logo2.png';


const landingpage = () => (

  <div className="landing-page"> 
        <header className="landingpage-header">

            <img src={logo} alt="" />

            <h1 className='headerr'> Grade Report System For Unviversity Of Ghana</h1>
            <p>Check For Your Current And Past Grades Here</p>
            <Link to={"help"}>Learn More</Link>
        </header>
        
        <section className="header">
            <div className="container">
                <div className='head-content'>
                    <h2 className='headerr'>Introduction</h2>
                    <p>
                        THIS IS THE OFFICIAL UNIVERSITY OF GHANA 
                        STUDENT WEBSITE FOR CHECKING GRADES BOTH CURRENT
                         AND PAST AS WELL AS LODGING COMPLAINTS ON MISTAKES MADE ON GRADES OR GRADES NOT 
                         SHOWING FOR A STUDENT ALTOGHETHE
                         </p>
                    <div >
                    </div>
                </div>
            </div>
        </section>
        <div className="contain">
            <section className='login'>
                
                <div className="login-content">     
                    <h2 className='headerr'>Login To Track And Report Missing Grade</h2>
                   <p><br />Click The Link Below To Login
                    </p>
                    <a href="./loginform.js"><button>Login</button></a>
                </div>
           
             </section>
        </div>
        <section>
            <div className="feature">
                <h2 className='headerr'>Fill Out Forms</h2>
                <p>
                    As you navigate through the Missing Grade Reporting System, our user-friendly interface ensures a seamless and efficient experience when filling out forms. Whether reporting a missing grade or reaching out for support, our forms are intuitively designed to capture the necessary details while minimizing complexity. The Missing Grade Form page provides a structured layout, prompting you to input essential information such as the course name, instructor details, expected grade, and an explanation field. Your input is vital to initiate the process of addressing any missing grades promptly. Likewise, on the Help and Support Page, our contact form simplifies the process of reaching out for technical assistance. We value your feedback and inquiries, and our forms are crafted to ensure a streamlined and secure interaction, facilitating effective communication between you and our support team. Your participation in completing these forms contributes to the continuous improvement of our system and enhances the overall user experience. <br></br><br></br>
                    Click Below To Fill Form            
                </p>
                <a href='./missinggrades.jsx'><button>Forms</button></a>
            </div>
            <div>
            </div>
        </section>

        

        

    <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
  </div>
);

export default landingpage;