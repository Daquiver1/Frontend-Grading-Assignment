import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {

    return (
        <div>
            <body className="Body">
                <h1 className="OverviewHeading">Welcome to Our System</h1>
                <p className='Overview'>
          The login page for the Grade Tracking and Reporting System is designed to empower students by offering a user-friendly interface for tracking, reporting, and communicating about their academic grades.
          Its key features include secure user authentication, a personalized dashboard for grade insights, visualization tools for easy comprehension, and the ability to report missing grades. 
          Integrated communication channels facilitate direct interaction with instructors and academic administration, and a notification system ensures students stay informed. 
          With a focus on a user-friendly design, the login page enhances transparency, accountability, and collaboration in managing academic progress.
        </p>
        <button className='button1'><Link to="/login" className="nav-link">Login</Link></button>
            </body>
        </div>
    );
};

export default Landing;