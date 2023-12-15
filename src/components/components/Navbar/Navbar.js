import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSolution } from "react-icons/ai";
import { LuHelpCircle } from "react-icons/lu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h1>
              <span>UG</span> | GradeTracker
              <span>
                <AiOutlineSolution />
              </span>
            </h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <GoHome />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Login" className="nav-links" onClick={closeMobileMenu}>
                <CgProfile />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Faq" className="nav-links" onClick={closeMobileMenu}>
                <LuHelpCircle />
              </Link>
            </li>

            

           

            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log Out
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
