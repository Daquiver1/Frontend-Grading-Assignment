import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Missing Report
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Login.html">
                    <BsFillArchiveFill className='icon'/> Login Page
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Missing-Grade-Form-Page.html">
                    <BsFillGrid3X3GapFill className='icon'/> Missing Grade Form
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Grade-report.html">
                    <BsPeopleFill className='icon'/> Grade Report Page  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Help-page.html">
                    <BsListCheck className='icon'/> Help and Support
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="About.html">
                    <BsMenuButtonWideFill className='icon'/> About
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Contact.html">
                    <BsFillGearFill className='icon'/> Contact
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar