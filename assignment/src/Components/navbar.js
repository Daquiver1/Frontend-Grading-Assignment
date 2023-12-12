import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle ("responsive_nav")
    }
    return (
        <header>
            <h3>Grade Repo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="Login.js">Login</a>
                <button className="nav-btn nav close-btn" onClick={showNavbar}>
                        <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav close-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar