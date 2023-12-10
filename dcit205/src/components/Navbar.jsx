import React,{ useState } from "react";
import "../components/navbar.css"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState ("nav__toggler");


  const navToggle = () => {
    active === 'nav__menu' 
    ? setActive('nav__menu nav__active')  
    : setActive("nav__menu");

    //TogglerIcon

    toggleIcon === "nav__toggler"
    ? setToggleIcon("nav__toggler toggle")
    :setToggleIcon("nav__toggler")

  };


  return (
    <div>
      <nav className="nav">
        <a href="#" className="nav__brand">UG</a>
        <ul className={active}>
          <li className="nav__item"><a href="./Home.js" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Login</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Dashboard</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Forms</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Grade Report</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Help</a></li>
        </ul>
        <div onClick={navToggle}  className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;