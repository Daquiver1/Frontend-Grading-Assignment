import React from 'react'
import './Login_page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function LoginPage(){
    return(
        <>
        <div >
            <img src="/loginback.jpeg" alt=""  className='form_background'/>
           <div className='form_container'>
                <form action="/">
                    <div className='input-group'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input type="text"  placeholder='ID: ' className='input'/>
                    </div>
                    
                    <br />
                    <div className='input-group'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </span>
                    
                    <input type="pin" placeholder='PIN:' className='input'/>
                    </div>
                    
                   <Link to= "/Login_page/dashboard"><button className='sign_in'>Log in</button></Link> 
                </form>
           </div>
           </div>
        </>
    )
}
