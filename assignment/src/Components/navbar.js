import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle ("responsive_nav")
    }
    return ( 
        <>
        <header>
            <h3>Grade Repo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Dashboard</a>
                <a href="/#">Contact </a>
                <a href="Login.js">Login</a>
                <button className="nav-btn nav close-btn" onClick={showNavbar}>
                        <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        <div>
            <h1>SDFGHJ</h1>
        </div>
        </>
        
        
        
    )
}

export default Navbar