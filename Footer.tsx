// common/Footer.tsx
import React from 'react';
import './Footer.css'; // Import a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="center-align"> {/* Add the center-align class */}
     
      <div>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li>
            Contact Us: <a href="mailto:mgrsupport@gmail.com">mgrsupport@gmail.com</a>, +233 0202392525
          </li>
        </ul>
      </div>
      <div>
        <p>Connect with us:</p>
        <div className="social-media">
          <a href="https://instagram.com/mgrteam" target="_blank" rel="noopener noreferrer"><img src="/instagram.jpg" alt="Instagram" /></a>
          <a href="https://facebook.com/mgrteam" target="_blank" rel="noopener noreferrer"><img src="facebook.jpg" alt="Facebook" /></a>
          <a href="https://twitter.com/mgrteam" target="_blank" rel="noopener noreferrer"><img src="th.jpg" alt="Twitter" /></a>
        </div>
      </div>
      <div>
        <p>&copy; 2023 MISSING GRADES REPORT SYSTEM</p>
      </div>
    </footer>
  );
};

export default Footer;
