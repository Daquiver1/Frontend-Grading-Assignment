import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                TRVL<i className='fab fa-typo3'/>
            </Link>
           <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/grade-report' className='nav-links' onClick={closeMobileMenu}>
                Grade Report
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/missing-grade' className='nav-links' onClick={closeMobileMenu}>
                Missing Grade?
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/instructor-contact' className='nav-links' onClick={closeMobileMenu}>
                Instructor Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/help-support' className='nav-links' onClick={closeMobileMenu}>
                Help and Support
              </Link>
            </li>
            
           </ul>
           {button}
        </div>
    </nav>
    </>
  );
}

export default Navbar;
