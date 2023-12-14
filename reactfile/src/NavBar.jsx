import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";


function NavBar(){
  return(
      <>
      <div className="Container">
    <img className="logo"  src="/UG LOGO.PNG"></img>
     <div className="Nav-links">
      <Link to="/"><div className="nav-item">HOME</div></Link>
      <Link to="/Login"><div className="nav-item">LOGIN</div></Link>
      <Link to= "/Dashboard"><div className="nav-item">DASHBOARD</div> </Link>
      < Link to="/GradeReport"><div className="nav-item">GRADE REPORT</div> </Link>
      <Link to= "/MissingGrade"><div className="nav-item">MISSING GRADE</div> </Link>
      <Link to="/Contact"><div className="nav-item">CONTACT US</div> </Link>
      <Link to="/Help"><div className="nav-item">HELP</div> </Link>
      
    
     </div>
     </div>
     </>
  );

}
 

export default NavBar;