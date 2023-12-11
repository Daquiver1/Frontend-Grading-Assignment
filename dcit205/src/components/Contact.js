import React from 'react';
import Navbar from './Navbar';
import './contact.css';
import aziz from '../Assets/aziz.jpeg';
import eben from '../Assets/eben.jpeg';
import edward from '../Assets/edward.jpeg';
import ludu from '../Assets/ludu.jpeg';
import markatta from '../Assets/markatta.jpeg';
import matilda from '../Assets/matilda.jpeg';
import pic from '../Assets/pic.jpeg';
import ser from '../Assets/ser.jpeg';
import soli from '../Assets/soli.jpeg';

const Contact = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <section>
            <div class="row">
                <h1>Contact Us</h1>
            </div>
            <div class="row">
                <div class="column">
                <div class="card">
                    <div class="img-container">
                        <img src={soli} alt='' />
                    </div>
                    <h3> MR. MICHEAL AGBO TETTEY SOLI</h3>
                    <p>Senior Software Engineer | Lecturer</p>
                    <p>Email: agbotettey@gmail.com</p>
                    <div class="icons">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="img-container">
                        <img src={aziz} alt='' />
                    </div>
                    <h3>MR. DWUMFOUR ABDULAI AZIZ</h3>
                    <p>Lecturer</p>
                    <p>Email: adwumfour@ug.edu.gh</p>
                    <div class="icons">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
          <div class="column">
            <div class="card">
              <div class="img-container">
                <img src={pic} alt='' />
              </div>
              <h3> MR. PAUL NII AMMAH TACKIE</h3>
              <p>Lecturer</p>
              <p>Email: pammah@ug.edu.gh</p>
              <div class="icons">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
    <section>
        <div class="row">
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={eben} alt='' />
                </div>
                <h3> DR. EBENEZER OWUSU</h3>
                <p>Lecturer</p>
                <p>Email: ebeowusu@ug.edu.gh</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={ludu} alt='' />
                </div>
                <h3>MR. JULIUS YAW LUDU</h3>
                <p>Lecturer</p>
                <p>Email: mcclyconsult@gmail.com</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={markatta} alt='' />
                </div>
                <h3> MR. MARK ATTA MENSAH</h3>
                <p>Lecturer</p>
                <p>Email: mamensah@ug.edu.gh</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section>
        <div class="row">
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={ser} alt='' />
                </div>
                <h3> DR. JUSTICE KWAME APPATI</h3>
                <p>Senior Lecturer</p>
                <p>Email: jkappati@ug.edu.gh</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={edward} alt=""/>
                </div>
                <h3>DR. EDWARD DANSO ANSONG</h3>
                <p>Senior Lecturer</p>
                <p>Email: edansong@ud.edu.gh</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src={matilda} />
                </div>
                <h3> MRS. MATILDA WILSON</h3>
                <p>Lecturer</p>
                <p>Email: mwilaon@ug.edu.gh</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </section>
    </div>
  )
}

export default Contact
