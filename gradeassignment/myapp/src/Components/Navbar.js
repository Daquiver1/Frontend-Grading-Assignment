import React ,{useRef}from 'react';
import '../styles/Navbar.css'
import { FaBars, FaTimes} from "react-icons/fa"


 function Navbar() {
  
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
        <a href='/DashboardPage'>Dashboard</a>
        <a href='/#'>GradeReport</a>
        <a href='/#'>Form</a>
        <a href='/#'>contact</a>
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