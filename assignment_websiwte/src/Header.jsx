import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <>
        <div className='header_container'>
            <div className='logo'> <img src="comScience_logo.png" alt="" className='logo_img' /></div>
            <div className='menu'>
           <Link style={{textDecoration: 'none'}} to="/"><div className='menu_item'>HOME</div></Link> 
            <Link style={{textDecoration: 'none'}} to="/dashboard"><div className='menu_item'>DASHBOARD</div></Link>
            <Link style={{textDecoration: 'none'}} to="/grade_report"><div className='menu_item'>GRADE REPORT</div></Link>
            <Link style={{textDecoration: 'none'}} to="/instructor_page"><div className='menu_item'>INSTRUCTORS</div></Link>
            <Link style={{textDecoration: 'none'}} to="/help"><div className='menu_item'>HELP & SUPPORT</div></Link>
            </div>
        </div>
        </>
    )
}