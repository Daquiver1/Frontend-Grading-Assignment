import React from 'react';
import './footer.css';

import facebook_icon from '../Assests/facebook_.png';
import twitter_icon from '../Assests/twitter_.png';
import google_icon from '../Assests/google_.png';
import youtube_icon from '../Assests/youtube_.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className='academics'> 
          <p className='li-big-font'>Academics</p>
          <li>Undergraduate</li>
          <li>Graduate</li>
          <li>Academic calendar</li>
        </div>

        <div className="contact-info">
          <p className='li-big-font'>Contact Us</p>
          <li>Address: Post Office Box LG 85, Legon</li>
          <li>Email: pad@ug.edu.gh</li>
          <li>Phone: +233-(0)302-213850</li>
        </div>

        <div className="quick-links">
            <p className='li-big-font'>Quick Links</p>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
        </div>

        <div className="social-media">
          <p className='li-big-font'>Follow Us</p>
          <div className='socials'>
            <div><a href="https://www.facebook.com/univofgh"><img src={facebook_icon} alt="" className='social-icons' /></a></div>
            <div><a href="https://twitter.com/UnivofGh"><img src={twitter_icon} alt="" className='social-icons' /></a></div>
            <div><a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"><img src={google_icon} alt="" className='social-icons' /></a></div>
            <div><a href="https://www.youtube.com/user/universityghana"><img src={youtube_icon} alt="" className='social-icons' /></a></div>
          </div>
        </div>

      </div>

      <div className="copyright">
        <p>&copy; 2023 University of Ghana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;