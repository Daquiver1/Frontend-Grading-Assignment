import React from "react";
import './styles.css';

function Header() {
    return (
<header id="header">
       
        <div class="top-menu-box">
            <div className="ugLogo">
                <div><img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="UG logo" width="150px" /></div>
               
            </div>
          
            <div>
                <nav className="navbar">
                    <ul >
                        <li className="navbar-item"><a href="" className="navbar-link">MIS<span></span></a></li>
                        <li className="navbar-item"><a href=""className="navbar-link">SAKAI<span></span></a></li>
                        <li className="navbar-item"><a href=""className="navbar-link">DASHBOARD<span></span></a></li>
                        <li className="navbar-item"><a href=""className="navbar-link">HELP & SUPPORT<span></span></a></li>
                        <li className="navbar-item"><a href=""className="navbar-link">LOGIN<span></span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;
  