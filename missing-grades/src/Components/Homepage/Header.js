import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
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
                        <li className="navbar-item"><a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login" className="navbar-link">MIS<span></span></a></li>
                        <li className="navbar-item"><a href="https://sakai.ug.edu.gh/portal/relogin"className="navbar-link">SAKAI<span></span></a></li>
                        <li className="navbar-item"><Link to="/dashboard" className="navbar-link">DASHBOARD<span></span></Link></li>
                        <li className="navbar-item"><Link to="/helpsupport" className="navbar-link">HELP & SUPPORT<span></span></Link></li>
                        <li className="navbar-item"><Link to="/login" className="navbar-link">LOGIN<span></span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;
  