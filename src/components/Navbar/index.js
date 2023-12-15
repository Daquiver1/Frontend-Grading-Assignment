

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/Login" activeStyle>
						Login
					</NavLink>
					<NavLink to="/Dashboard" activeStyle>
						Dashboard
					</NavLink>
					<NavLink to="/GradeReport" activeStyle>
						Grade Report
					</NavLink>
					<NavLink to="/MissingGradeReport" activeStyle>
						Missing Grade Report
					</NavLink>
					<NavLink to="/Contact" activeStyle>
						Contact Instructor
					</NavLink>
					<NavLink to="/Help" activeStyle>
						Help And Support
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
