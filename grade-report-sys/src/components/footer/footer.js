import React from 'react';
import './footer.css';
import EmailLink from '../email/emaillink';

const Footer = () => {
  return (
    <div className='footer'>

  <div className="ContactUs">
  <p><strong>Contact us</strong></p>
  <ul>
    <li>+233-(0)302-213820</li>
    <li>+233-(0)302-213820</li>
    <li><EmailLink email="servicedesk@rt.ug.edu.gh" /></li>
  </ul>
</div>
    </div>
  )
}

export default Footer