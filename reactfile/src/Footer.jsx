import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
  
  
    <div className="footer-container">
                <div className="footer-items" id="footer-section">
                    <div>HOME</div>
                    <div>ABOUT US</div>
                    <div>FACULTY</div>
                    <div>EVENTS</div>
                    <div>CONTACT US</div>
                </div>
            

              
                <div className="footer-items" id="footer_section">
                     The University of Ghana is one of the Africa's most preeminent public universities.
                     If you are inspired by a big challenge, 
                    you've come to the right place! The computer science community at 
                    the university of Ghana encourages it's people to be vibrant and brave
                     in taking on new challenges that push boundries beyond imagination. 
                     </div>


                <div className="footer-items" id="pinned">
                    <img src="/facebook.png" id="pinned-images"/> 
                    <img src="/twit.png" id="pinned-images"/>
                    <img src="/goog.png" id="pinned-images"/>
                    <img src="/Instagram.webp" id="pinned-images"/> 
                    <img src="/git.png" id="pinned-images"/>
                </div>

                <div className="footer-items">
                    <h5> Copyright ©2023 All rights reserved </h5>

            </div>
            </div>
            
        
            </>
            

);
}
export default Footer;
