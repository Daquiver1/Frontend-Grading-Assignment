import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImg from '../assets/logo.png'
function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return ( 
        <>
        <header>
            <h3>Grade Repo </h3>
               < img src={loginImg} />
           
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to ="/Dashboard">Dashboard</Link>
                <Link to= "/InstructorContactPage"> Instructor </Link>
                <Link to ="/HelpSupportPage">Contact</Link>
                <button className="nav-btn nav close-btn" onClick={showNavbar}>
                        <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        </>
        
        
        
    )
}

export default Navbar