import React, {useState} from 'react'
import Head from './Head'
import './header.css'
import {
    BrowserRouter as Link
  } from "react-router-dom";

const Header = () => {
    const [click, setClick] = useState(false)
    return(
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className = {click ? "mobile-nav" : "flexSB"} onClick = {() => setClick(false)}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/help">HELP</Link></li>
                </ul>
                <div className='start'>
                    <div className="button">GET STARTED</div>
                </div>
                <button className='toggle' onClick = {() => setClick(!click)}>
                    {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header