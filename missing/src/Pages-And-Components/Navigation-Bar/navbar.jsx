import React, {useState} from 'react'
import './navbar.css'

function Navbar() {
       const [active, setActive] = useState("nav__menu");

              active === "nav__menu" 
              ? setActive('nav__menu nav__active')
              : setActive ("nav__menu")



     return (
      <nav className='nav'>
        <a href="#" className="nav__brand">
          herdoy
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Dashboard
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Login
            </a>
         </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Grades Report
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Instructor Contacts
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Missing Grades Form
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Help and Support
            </a>
          </li>
        </ul>
        <div onClick = {navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
     );
}