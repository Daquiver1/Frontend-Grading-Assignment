import React from 'react'

const Header1 = () => {
  return (
    <div className='header'>
   <nav className='navbar'>
    <div className='logo'>
        <h1 className='logo-text'>Portal</h1>

    </div>
    <ul>
        <li>
            <input type='text' placeholder='user ID' className='input'/>
        </li>
        <li>
            <input type='password'
            placeholder='Password' className='input'/>
        </li>
        <li>
            <button className='login'></button>
        </li>
    </ul>
   </nav>

    </div>
  )
}

export default Header1
