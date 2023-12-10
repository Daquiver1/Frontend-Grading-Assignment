import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../assets/css/home.css';



const Login = () => {
  return (
    <React.Fragment>
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

export default Login;
