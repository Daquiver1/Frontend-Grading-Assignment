import React from "react";
import Navbar from "./Navbar";
import "../components-css/Navbar.css"


function Header() {

  return (
    
    <div id="main" >
        <Navbar/>
        <div className="name">
           <h1><span>Welcome to the Grading System</span>Check your Grades with ease!</h1>
             <p className="details" >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt perspiciatis molestiae in quidem.
               Id repudiandae delectus accusamus veniam alias!
                Ea rerum, adipisci dolor provident vitae nesciunt ut ducimus nihil id.</p>
                <a href="/" className="cv-btn">Login Here!!</a>
        </div>
    </div>
  );
}

export default Header;