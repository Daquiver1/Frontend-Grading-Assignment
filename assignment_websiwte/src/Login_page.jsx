import React from 'react'
import './Login_page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Login_page(){
    return(
        <>
           <div className='form_container'>
                <form action="/">
                    <div className='input-group'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input type="text"  placeholder='ID: '/>
                    </div>
                    
                    <br />
                    <div className='input-group'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </span>
                    
                    <input type="pin" placeholder='PIN:'/>
                    </div>
                    
                   <Link to= "/"><button className='sign_in'>Log in</button></Link> 
                </form>
           </div>
        </>
    )
}
