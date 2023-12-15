import React, {useState} from "react";
import '../navbar.css';

function Navbar(){
    const [active, setActive] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('nav-toggle');

    const navToggle = () => {
        active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu');

        toggleIcon === 'nav-toggle' ? setToggleIcon('nav-toggle toggle') : setToggleIcon('nav-toggle');
    }
    return(
        <nav className="nav">
            <a className="nav-logo">
                <img src='' alt='logo'/>
            </a>
            <ul className={active}>
                <li className="nav-item"><a href='/dashboard/main' className="nav-link">Dashboard</a></li>
                <li className="nav-item"><a href='/dashboard/grade-report' className="nav-link">Report</a></li>
                <li className="nav-item"><a href='dashboard/missing-grade-form' className="nav-link">Form</a></li>
                <li className="nav-item"><a href='/dashboard/instructor-contact' className="nav-link">Contact</a></li>
                <li className="nav-item"><a href='/dashboard/help-and-support' className="nav-link">Support</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="nav-toggle-bar1"></div>
                <div className="nav-toggle-bar2"></div>
                <div className="nav-toggle-bar3"></div>
            </div>

        </nav>
    )
}

export default Navbar;