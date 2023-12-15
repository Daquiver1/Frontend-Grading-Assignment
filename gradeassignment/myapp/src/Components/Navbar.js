import React ,{useRef}from 'react';
import '../styles/Navbar.css'
import { FaBars, FaTimes} from "react-icons/fa"


 function Navbar() {
  switch(window.location.pathname){}
  const navRef = useRef();
  const Navbar = {toggle(){console.log("Navbar toggled");}}
  const showNavbar =() => {
    if(Navbar){
    navRef.current.classlist.Navbar.toggle("responsive_nav");
  }
}

  return (
    <header>
      <nav ref={navRef}>
        <a href='./LandingPage'>Home</a>
        <a href='./DashboardPage'>Dashboard</a>
        <a href='/Gradreport'>GradeReport</a>
        <a href='/Form'>Form</a>
        <a href='/Contact'>Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}
 
export default Navbar;