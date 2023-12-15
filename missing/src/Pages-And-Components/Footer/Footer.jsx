import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>Academics</h4>
                    <a href='/Undergraduate'>
                        <p>Undergraduate</p>
                    </a>
                    <a href='/Graduate'>
                        <p>Graduate</p>
                    </a>
                    <a href='/Academic Affairs'>
                        <p>Academic Affairs</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Contact Us</h4>
                    <a href='P.O.Box'>
                        <p>University of Ghana P.O. Box LG 25, Legon</p>
                    </a>
                    <a href='Phone'>
                        <p>+233 501 382 035</p>
                    </a>
                    <a href='Email'>
                        <p>pad@ug.edu.gh</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Quick Links</h4>
                    <a href='Home'>
                        <p>Home</p>
                    </a>
                    <a href='Contact Us'>
                        <p>Contact Us</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Follow Us</h4>
                    <div className='socialmedia'>
                     <FaFacebook className='icon' />
                     <FaInstagram className='icon' />
                     <FaTwitter className='icon' />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @(2023) University of Ghana. All right reserved.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
};

export default Footer;