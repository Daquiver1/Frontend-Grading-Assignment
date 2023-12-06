import React from 'react'
import './Header.css'


export default function Header(){
    return(
        <>
        <div className='header_container'>
            <div className='logo'> LOGO</div>
            <div className='menu'>
            <div className='menu_item'>HOME</div>
            <div className='menu_item'>DASHBOARD</div>
            <div className='menu_item'>ABOUT</div>
            <div className='menu_item'>INSTRUCTORS</div>
            <div className='menu_item'>HELP & SUPPORT</div>
            </div>
        </div>
        </>
    )
}