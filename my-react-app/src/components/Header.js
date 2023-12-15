


import { Link } from 'react-router-dom';
import "../CSS/Header.css";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/grade-report">Grade Report</Link>
                    </li>
                    <li>
                        <Link to="/missing-grade">Missing Grade Form</Link>
                    </li>
                    <li>
                        <Link to="/instructor-contact">Instructor Contact</Link>
                    </li>
                    <li>
                        <Link to="/help-support">Help and Support</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;
