import React from 'react'
import logo from './img/ug-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="logo-section">
            <img  className="logo"
            src={logo} 
            style={{backgroundColor: 'white',
            width:'150px',
            height:'41.7px'
            }} 
            alt='logo'/>
            </div>
            <div className='header-text'>
            <nav>
                <ul>
                    <CustomLink to='/'>
                        <button>Home</button>
                    </CustomLink>
                    <CustomLink to='/contact'>
                        <button>Instructors</button>
                    </CustomLink>
                    <CustomLink to='/missing-grades'>
                        <button>Missing Grades?</button>
                    </CustomLink>
                    <CustomLink to='/help'>
                        <button>Help & Support</button>
                    </CustomLink>
                    
                </ul>
            </nav >
            </div>
        </header>
    </div>
  )
}

function CustomLink({href, children,...props}){
    const path= window.location.pathname

    return(
        <li className={(path===href)?"active":""}>
            <Link to={href} {...props}>{children} </Link>
        </li>
     )   
}

export default Navbar