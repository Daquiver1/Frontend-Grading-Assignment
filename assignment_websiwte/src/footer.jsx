import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default function Footer(){
    return(
        <>
          <div>
            <div className="footer_container">
            <div className="footer_item">
                   <h3>Follow us</h3>
                   <hr/>
                   
                   <br/>
                <div>
                    <img src="/instagram_logo.jpeg" class="follow_us_logo" id='footer_logo'/>
                    <img src="/twitter_logo.png" class="follow_us_logo" id='footer_logo'/>
                    <img src="/facebook)logo.jpeg" class="follow_us_logo" id='footer_logo'/>
                </div>
                 </div>

                <div className="footer_item">
                <Link to='/login'><h4 className="footer_menu">Logout</h4></Link>
                     </div>
                
            </div>
        </div>
    
        
        </>
    )
        
}
