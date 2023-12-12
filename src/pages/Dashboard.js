import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header  from "../layout/header/Header";
// import '../assets/css/home.css';



const Dashboard = () => {
  return (
    <React.Fragment>
        <Header/>
        
        <div>
            <h1>Missing Grade Reporting System</h1>
            <p>Overview of the system.</p>
            <nav>
                <Link to="/login">Login</Link> 
            </nav>
        </div>
    </React.Fragment>
  );
};

export default Dashboard;
