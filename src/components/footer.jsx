import React from 'react';
import  "./Styles/footer_styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";



 

function Footer (){
  return(
    <div>
      <footer>
        <div className="f-content">

          <div className="f-items">
            <h3>Contact Info</h3>
            <h4>Phone & Email</h4>
            <p><a>mmm@gmail.com</a></p>
            <p>(555) 123-4567</p>
            <p>(525) 143-9067</p>
          </div>

          <div className="f-items">
            <h3>Communication</h3>
            <p><Link to="/help-support">Help and Support</Link></p>
            <p><a href="#">Contact Us</a></p>
          </div>

          <div className="f-items">
            <h3>Follow Us</h3>
            <div className="f-content">
              <div className="f-items icon-footer">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="f-items icon-footer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="f-items icon-footer">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="f-items icon-footer">
                <FontAwesomeIcon icon={faXTwitter} />
              </div>
            </div>
          </div>
          <div className="f-items">
            <h3>Security</h3>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Data Collection</a></p>
            <p><a href="#">Use of Information</a></p>
          </div>
        </div>
        
        <div className="copy">Copyright &copy;2023 All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default Footer