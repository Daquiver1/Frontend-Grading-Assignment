// Navbar.js
import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  // create a state variable to track the list visibility
  const [isListOpen, setIsListOpen] = useState(false);

  // add an event listener to the window object to update the list visibility based on the window width
  useEffect(() => {
    // define a breakpoint for the screen size
    const breakpoint = 768;
    // define a function to update the list visibility
    const updateListVisibility = () => {
      // if the window width is less than or equal to the breakpoint, hide the list
      if (window.innerWidth <= breakpoint) {
        setIsListOpen(false);
      } else {
        // otherwise, show the list
        setIsListOpen(true);
      }
    };
    // call the function once when the component mounts
    updateListVisibility();
    // add the event listener to the window resize event
    window.addEventListener('resize', updateListVisibility);
    // return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateListVisibility);
    };
  }, []);

  // define a function to toggle the list visibility when the nav button is clicked
  const handleNavButtonClick = () => {
    // set the list visibility to the opposite of its current value
    setIsListOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <Nav>
        <Bars onClick={handleNavButtonClick} />

        {/* render the list component only when the list visibility is true */}
        {isListOpen && (
          <NavMenu>
            <img
              className="navbar-logo"
              src="https://dcs.ug.edu.gh/img/comScience_logo.png"
              alt=" logo"
              s
            />
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/report" activeStyle>
              Grade
            </NavLink>
            <NavLink to="/dashboard" activeStyle>
              Dashboard
            </NavLink>
            <NavLink to="/missinggrade" activeStyle>
              Grade Form
            </NavLink>
            <NavLink to="/instructor" activeStyle>
              Contact
            </NavLink>
            <NavLink to="/help" activeStyle>
              Help
            </NavLink>
          </NavMenu>
        )}
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
	  
    </>
  );
};

export default Navbar;
