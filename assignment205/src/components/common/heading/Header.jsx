import React, {useState} from 'react'
import Head from './Head'
import './header.css' 

const Header = () => {
    const [click, setClick] = useState(false)
    return(
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className = {click ? "mobile-nav" : "flexSB"} onClick = {() => setClick(false)}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/allcourses">Courses</a></li>
                    <li><a href="/instructors">Instructors</a></li>
                    <li><a href="/login-signup">LOGIN</a></li>
                    <li><a href="/help">HELP</a></li>
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