import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] =useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton =() => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={
              closeMobileMenu}>
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
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gradereport' className='nav-links' onClick={closeMobileMenu}>
                Grade Report
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/instructorcontact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/helpsupport' className='nav-links' onClick={closeMobileMenu}>
                Help and Support
              </Link>
            </li>
            
           </ul>
           {button && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;
