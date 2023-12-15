// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "../src/pages/NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
				 <img className="navbar-logo" src='https://dcs.ug.edu.gh/img/comScience_logo.png' alt=" logo" s/>
					<NavLink to="/index" activeStyle> 
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
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/log-in'activeStyle>login</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/login">
						Login
					</NavBtnLink>
                    
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
