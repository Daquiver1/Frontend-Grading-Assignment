import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>Student Portal</h1>
            <ul className="nav-links">
                <li className="nav-link">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/grades">Grades</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/missingrades">Missing Grades</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/help">Help</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/contactinstructor">Instructor Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;