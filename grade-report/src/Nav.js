import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" class="site-title">GradeReport</Link>
            <ul>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/Grades">Grades</Link>
                </li>
                <li>
                    <Link to="/Form">Form</Link>
                </li>
                <li className=""> 
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Support">Help/FAQ</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
