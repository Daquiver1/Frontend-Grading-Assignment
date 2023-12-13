import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/grades">Grades</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/missingrades">Missing Grades</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Help</NavLink>
                </li>
                <li>
                    <NavLink to="/contactinstructor">Instructor Contact</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar;