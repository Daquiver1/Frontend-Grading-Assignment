import React from 'react'
import{Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink} from './NavbarElements';
const Navbar = () => {
  return (
    <>
       <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Dashboard" activeStyle>
            Dashboard
          </NavLink>
          <NavLink to="/Grade Report" activeStyle>
            Grade Report
          </NavLink>
          <NavLink to="/Missing Grade" activeStyle>
            Missing Grade
          </NavLink>
          <NavLink to="/Instructor Contact" activeStyle>
            Instructor Contact
          </NavLink>
          <NavLink to="/Help and Support " activeStyle>
            Help and support
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
       </Nav>
    </>
  );
};

export default Navbar;