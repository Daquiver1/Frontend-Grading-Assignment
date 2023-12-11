import React, { useState } from 'react';
import Picture from '../assets/download.jpeg';
import { Link } from 'react-router-dom';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import '../styles/navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Picture} /> 
        <div className='hiddenLinks'>
        <Link to='/'> Home </Link>
       <Link to='/login'> Login </Link> 
       <Link to='/dashboard'> Dashboard </Link> 
       <Link to='missing'> Missing Grade Form </Link> 
       <Link to='/report'> Grade Report </Link> 
       <Link to='/contact'> Instructor Contact </Link> 
       <Link to='/help'> Help and Support </Link>
        </div>
      </div>
      <div className='rightSide'>
       <Link to='/'> Home </Link>
       <Link to='/login'> Login </Link> 
       <Link to='/dashboard'> Dashboard </Link> 
       <Link to='missing'> Missing Grade Form </Link> 
       <Link to='/report'> Grade Report </Link> 
       <Link to='/contact'> Instructor Contact </Link> 
       <Link to='/help'> Help and Support </Link>
       <button onClick={toggleNavbar}> 
       <ReorderOutlinedIcon />
       </button>
      </div>
    </div>
  )
}

export default Navbar
