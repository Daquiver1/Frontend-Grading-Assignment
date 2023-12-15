import React from 'react'


import Header from './Header'
import './Home.css'
import './footer'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <Header/>
        
        <div className="hero-image">
            <img src="/hero_6.jpg" alt="hero" id='hero_image'/>
            
    <div className="hero-text">
        <h1>Welcome</h1>
        <br />
    
        
        <br />
        <br />
        <Link to="/Login_page"><button className='login_btn'>Login</button></Link>
    </div>
</div>

    <div id='home_content'>
        <h4 id='topic'>
        Welcome to the Missing Grade Reporting System!
        </h4>
        <p>
        The Missing Grade Reporting System is a comprehensive 
        solution designed to assist students in tracking and reporting 
        missing grades from their academic profiles. Our user-friendly 
        interface provides students with a seamless experience to view 
        their grades, report any missing grades, and communicate directly 
        with their instructors or academic administration.
        </p>

        <br />
        <h5>Key Features</h5>
        <hr />
        <ul>
            <li>Grade Tracking:</li>
                <p>
                Easily access and view your current grades for
                all your courses in one centralized location. Stay informed about
                your academic progress and identify any missing grades.
                </p>
            <li>Missing Grade Reporting:</li>
            <p>
            Report any missing grades directly through the system.
             Provide essential details 
            such as the course, assignment, and date to ensure accurate
             and prompt resolution.
            </p>
            <li>Communication Channels:</li>
            <p>
            Initiate direct communication with your instructors or academic 
            administration regarding missing grades. Collaborate
             with them to address any concerns or seek clarification on
              grading discrepancies.
            </p>
            <li>Documentation and History:</li>
            <p>
            Maintain a comprehensive record of all reported missing grades, 
            communications, and resolutions for future reference. Keep track
             of your academic progress and ensure accurate grade reporting.

            </p>
            <li>User-Friendly Interface:</li>
            <p>
            Enjoy a visually appealing and intuitive interface that makes
             navigating the system effortless. Access your grades and report 
             missing grades with just a few clicks.
            Start using the Missing Grade Reporting System today
             and empower yourself to track, report, and resolve missing
              grades efficiently!
        
            </p>
        </ul>
    </div>
        <Footer/>
        
        </>
    )
}
