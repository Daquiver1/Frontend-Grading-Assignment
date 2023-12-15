import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {

    return (
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle className={'navlink'}>
                        Home
                    </NavLink>
                    <NavLink to="/login" activeStyle className={'navlink'}>
                        Log in
                    </NavLink>
                    <NavLink to= "/dashboard" activeStyle className={'navlink'}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/report" activeStyle className={'navlink'}>
                        Grade Report
                    </NavLink>
                    <NavLink to ="/complain" activeStyle className={'navlink'}>
                        Complain
                    </NavLink>
                    <NavLink to="/contact" activeStyle className={'navlink'}>
                        Contact
                    </NavLink>
                    <NavLink to="/hnsupport" activeStyle className={'navlink'}>
                        Help and Support
                    </NavLink>
                    
                    
                </NavMenu>
            </Nav>
            
    );
};
 
export default Navbar;