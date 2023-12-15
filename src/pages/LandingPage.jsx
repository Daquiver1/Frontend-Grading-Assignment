import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    
    <div className="container mx-auto mt-8 text-center text-white">
      
      <h2 className="text-4xl font-bold mb-4">Welcome to the Missing Grade Reporting System</h2>
      <p className="text-lg mb-8">
        Track and report missing grades easily. Your academic success is our priority.
      </p>
      <div className="flex justify-center">
        <Link to="/login" style={{ width: "200px", color: "darkOrange", fontSize: "40px" }} className="btn btn-primary mr-4">
          Login
        </Link>
       
      </div>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />   <br />  <br />  <br />  <br /> 
      <footer className="text-white py-4 text-center">
        
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
