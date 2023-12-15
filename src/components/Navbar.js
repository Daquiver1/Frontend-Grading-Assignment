import React, {useState} from 'react'
import "../navbar.css";

function Navbar () {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon , setToggleIcon]=useState("nav_toggler");
    const navToggle = () => {
        active==="nav_menu" 
        ? setActive("nav_menu nav_active")
        : setActive("nav_menu");

    // TogglerIcon
        toggleIcon === "nav_toggler"
        ? setToggleIcon("nav_toggler toggle")
        : setToggleIcon("nav_toggle");
    };
  return (
    <nav className='nav'>
        <a href="/" className='title text-transform: uppercase font-weight: bold'>GradeQuest</a>
        <ul className={active}>
            <li className='nav_item'><a href="Login" className='nav_link'>Login</a></li>
            <li className='nav_item'><a href="Dashboard" className='nav_link'>Dashboard</a></li>
            <li className='nav_item'><a href="GradeReport" className='nav_link'>Grade Report</a></li>
            <li className='nav_item'><a href="/HelpPage" className='nav_link'>Help and Support</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Navbar;