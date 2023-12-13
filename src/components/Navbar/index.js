import React from 'react'

import{Nav,
  NavLink,
  NavMenu,
  logo,
  NavBtn,
  NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
       <Nav>
       <NavLink to="/">
        <logo>
          <img style={{  width: "80px", height: "80px",borderRadius: "60px",objectFit: "cover"}} src="https://i.pinimg.com/564x/0d/22/a2/0d22a2af910b53ca13497d6b09504c42.jpg" alt="Logo" />
          </logo>
          </NavLink>
  
        <NavMenu>
        <NavLink to="/Login" activeStyle>
            Login
            </NavLink>
          <NavLink to="/Dashboard" activeStyle>
            Dashboard
          </NavLink>
          <NavLink to="/Grade Report" activeStyle>
            Grade Report
          </NavLink>
          <NavLink to="/Missing Grade" activeStyle>
            Missing Grade
          </NavLink>
          <NavLink to="/Contact Instructor" activeStyle>
            Contact Instructor
          </NavLink>
          <NavLink to="/Help and Support " activeStyle>
            Help and support
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Sign Out</NavBtnLink>
        </NavBtn>
       </Nav>
    </>
  );
};

export default Navbar;