import React from 'react'
import './Header.css';




const Header = () => {

    return(
          <div className='header-card'>
            <img className='header-image' src='favicon.jpg'></img>
            <p className='header-label'>Students Self Service Portal</p>
            <p className='log-in'> <a href="cssps.gov.gh">login</a></p>
          </div>

        
    )
}

export default Header;