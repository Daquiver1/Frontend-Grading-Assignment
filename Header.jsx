import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <>
        <div className="first-header" role="banner" aria-label="UNIVERSITY OF GHANA, LEGON Logo Banner">
            <div className="H-container">
                <div className="H-logo1">
                    <img src="/UG-LOGO.jpg" alt="UNIVERSITY OF GHANA, LEGON" className="LOGO1"title="UNIVERSITY OF GHANA, LEGON"/>
                </div>
            </div> 
            <div className="school-name">
                <h1>UNIVERSITY OF GHANA,LEGON</h1>
            </div>
            <div className="loginp">
            <Link to = "/login"><ul className='text-c'>LOGIN</ul></Link>
            </div>
            <div className="help-sp">
            <Link to = "/helpSupport"><ul className='text-c'>HELP and SUPPORT</ul></Link>
            </div>
        </div>
        <div className="second-header" role="banner"  aria-label="school name Banner">
        <div className="H-container">
            <div className="page-title">
                <div className="MGRS" aria-label="site-title">Missing Grade Reporting System</div>
            </div>
        </div>
        <div className="search-w">
            <input type="text" name="Search-bar" id="SEARCH" className="search-b" title="search box" placeholder="Search..."/>
        </div>
        </div>
        <div className="sidebar1">
            <sidebar>
            <div className="homep">
            <Link to = "/landingPage"><ul className="sidebar2">HOME</ul></Link>
                </div>
            <div className="dashp">
            <Link to = "/dashboard"><ul className="sidebar2">DASHBOARD</ul></Link>
            </div>
            <div className="gradep">
            <Link to = "/gradeReport"><ul className="sidebar2">GRADE REPORT</ul></Link>
            </div>
            <div className="missingp">
            <Link to = "/missingGradeReport"><ul  className="sidebar2">MISSING GRADE FORM</ul></Link>
            </div>
            <div className="instructorp">
            <Link to = "/instrutorContact"><ul className="sidebar2">INSTRUCTOR CONTACT</ul> </Link>
            </div>
            </sidebar>
        </div>
        </>

    );
}
export default Header