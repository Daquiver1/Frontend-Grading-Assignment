import React from 'react';
import { Link } from 'react-router-dom';
import "./ms-header-styles.css";



function Header() {
  return (
    <header>
      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <Link to="/home">HOME</Link>
            <div className="dropdown">
              <ul>
                <li><Link to="/dashboard">DASHBOARD</Link></li>
                <li><a>GRADES</a></li>
                <li><a href="#">GRADE HISTORY</a></li>
              </ul>
            </div>
          </li>
          <li>
            <span>GRADE INFORMATION</span>
            <div className="dropdown">
              <ul>
                <li><span>ABOUT GRADE</span></li>
                <li><span>GRADE TRACK</span></li>
                <li><Link to="/gradereport">GRADE REPORT</Link></li>
                <li><Link to="/instructor">INSTRUCTOR INFO</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <span>FAQs</span>
            <div className="dropdown">
              <ul>
                <li><Link to="/help">HELP</Link></li>
                <li><span>ABOUT US</span></li>
                <li><span>FOR ENQUIRIES</span></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/">LOGIN</Link>
            <div className="dropdown">
              <ul>
                <li><Link to="/">LOGIN</Link></li>
                <li><span>LOGOUT</span></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;