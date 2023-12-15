import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';



const Navigationbar = () => {
    return(
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>
                    <Link to='homepage'>Home</Link>
                </li>
                <li>
                    <Link to='Contactpage'>Contact</Link>
                </li>
                <li>
                    <Link to="/Support">Help and Support</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/GradeReport">Report Grade</Link>
                </li>
                <li>
                    <Link to="/Missingrade">Missing Grades</Link>
                </li>
                <li></li>
                <li></li>
            </ul>

        </nav>
    )
}

export default Navigationbar;