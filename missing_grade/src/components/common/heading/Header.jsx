import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <> 
        <Head />
        <header className='header'>
            <nav className='flexSB'>
                <ul className={click? 'moblie-nav':'flexSB'} onClick={() => setClick(false)}>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to= "/grade-overview">Grade Overview</Link></li>
                    <li><Link to= "/instructor">Instructor</Link></li>
                    <li><Link to= "/help">Help</Link></li>
                </ul>
                <div className="start">
                    <div className="button"> REPORT GRADE</div>
                </div>
                <button className='toggle' onClick={() => setClick(!click)}>
                    {click ? <i className='fa fa-times' ></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header