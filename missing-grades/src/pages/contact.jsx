import React from 'react';
import './contact.css';
import { Link } from "react-router-dom";
import ADaziz from '../assets/images/lecturer4.jpeg';
import MAMensah from '../assets/images/lecturer2.jpeg';
import PNATackie from '../assets/images/lec3.jpeg';

const contact = () => {
  return (
    <div className='body-contact'>
      <section>


    <div class="row">
                  <div class="column">
                  <div class="card">
                      <div class="img-container">
                          <img src={MAMensah} alt='' />
                      </div>
                      <h3> MR. MARK ATTA MENSAH</h3>
                  <p>Lecturer</p>
                  <p>Email: mamensah@ug.edu.gh</p>
                      <div class="icons">
                          <a href="/">
                              <i class="fab fa-twitter"></i>
                          </a>
                          <a href="/">
                              <i class="fab fa-linkedin"></i>
                          </a>
                          <a href="/">
                              <i class="fab fa-github"></i>
                          </a>
                          <a href="/">
                              <i class="fas fa-envelope"></i>
                          </a>
                      </div>
                  </div>
              </div>



              <div class="column">
                  <div class="card">
                      <div class="img-container">
                          <img src={ADaziz} alt='' />
                      </div>
                      <h3>MR. DWUMFOUR ABDULAI AZIZ</h3>
                      <p>Lecturer</p>
                      <p>Email: adwumfour@ug.edu.gh</p>
                      <div class="icons">
                          <a href="/">
                              <i class="fab fa-twitter"></i>
                          </a>
                          <a href="/">
                              <i class="fab fa-linkedin"></i>
                          </a>
                          <a href="/">
                              <i class="fab fa-github"></i>
                          </a>
                          <a href="/">
                              <i class="fas fa-envelope"></i>
                          </a>
                      </div>
                  </div>
              </div>



            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={PNATackie} alt='' />
                </div>
                <h3> MR. PAUL NII AMMAH TACKIE</h3>
                <p>Lecturer</p>
                <p>Email: pammah@ug.edu.gh</p>
                <div class="icons">
                  <a href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="/">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>








    <section id="contact-us">
       
            <h2>Contact Us</h2>
            <p>
               
            </p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"  placeholder='Your Name Goes Here'required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Your Email goes here' required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4"  placeholder='Leave us a Message'required></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>

        

    <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>
        &copy; 2023 University Of Ghana. All rights reserved.
        </p>
   
    </footer>
    </div>
  );
};
export default contact;