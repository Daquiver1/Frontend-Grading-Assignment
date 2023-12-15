import React from "react";
import Navbar from "./Navbar";
import "../components-css/Navbar.css"



function Header() {

  return (
    
    <div id="main" >
        <Navbar/>
        <div className="name">
           <h1><span>Welcome to the Grading System</span>Check your Grades with ease!</h1>
             <p className="details" >Welcome to our website, where we revolutionize the grading system.
              Say goodbye to traditional methods and embrace a fair and efficient way of evaluating performance.
</p>
                <a href="/Login" className="cv-btn">Login Here!!</a>
        </div>
    </div>
  );
}

export default Header;