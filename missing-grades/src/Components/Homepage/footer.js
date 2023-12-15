import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="footContainer">
   
      
        <div className="cont-change0">
          <h2>Contact Us</h2>
        </div>
        <div className="footyMargin">
          <div className="footContainer-col1">
            <div>
              <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="University of Ghana Logo" />
            </div>
          </div>
          <div>
            <div className="cont-change">
              <h3>Location</h3>
              <p>University of Ghana <br /> Legon campus<br />
                Opposite Mathematics Department</p>
            </div>
          </div>
          <div>
            <div className="cont-change">
              <h3>Phone and Mail</h3>
              <p>+233 501 382 035<br />
                +233 559 145 698<br />
                dcs@ug.edu.gh Legon campus<br />
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
