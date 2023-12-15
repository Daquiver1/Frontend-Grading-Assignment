import React from 'react';
import './MainHeader.css';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
    <header>
        <nav>
            <h1>GradeHub</h1>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/gradeReport"><li>Grade Report</li></Link>
                <Link to="/instructors"><li>Instructors</li></Link>
                <Link to="/FAQ"><li>FAQ</li></Link>
                
            </ul>
        </nav>
    </header>
 );
};

export default Header;