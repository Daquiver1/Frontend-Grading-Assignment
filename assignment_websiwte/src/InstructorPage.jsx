import React from "react";
import './InstructorPage.css'
import Header from "./Header";
import Footer from "./footer";

export default function IntructorPage(){
    return(
        <>
        <Header/>
        <h2>OUR TNSTRUCTORS</h2>
        <div className="instructor_container">
            <div className="instructor">
                <img src="/prof_1.jpeg" alt="prof1" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Evelyn Cobbinah</h4>
                    <h6>Professor, Computer Science Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <br />
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>
            <div className="instructor">
                <img src="prof_5.jpg" alt="prof2" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Vasco Nomenyor</h4>
                    <h6>Professor, Mathematics Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>
            <div className="instructor">
                <img src="prof_3.jpeg" alt="prof3" id="profs"  className="prof3"/>
                <div className="prof_info">
                    <h4 id="h4">Valentina Starks</h4>
                    <h6>Professor, Statistics Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>

                </div>
            </div>
            <div className="instructor">
                <img src="prof_4.jpg" alt="prof4" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Arya Stark</h4>
                    <h6>Professor, Computer Science Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>

                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>

        </div>

        <div className="instructor_container">
            <div className="instructor">
                <img src="/prof_1.jpeg" alt="prof1" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Evelyn Cobbinah</h4>
                    <h6>Professor, Computer Science Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <br />
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>
            <div className="instructor">
                <img src="prof_5.jpg" alt="prof2" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Vasco Nomenyor</h4>
                    <h6>Professor, Mathematics Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>
            <div className="instructor">
                <img src="prof_3.jpeg" alt="prof3" id="profs"  className="prof3"/>
                <div className="prof_info">
                    <h4 id="h4">Valentina Starks</h4>
                    <h6>Professor, Statistics Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>
                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>

                </div>
            </div>
            <div className="instructor">
                <img src="prof_4.jpg" alt="prof4" id="profs"/>
                <div className="prof_info">
                    <h4 id="h4">Arya Stark</h4>
                    <h6>Professor, Computer Science Department</h6>
                    <p id="para">College Of Basic Applied SCience</p>

                    <input type="email"  placeholder="Email" id="msg_instructor"/>
                    <br />
                    <br />
                    <button id="send_mail">Send</button>
                </div>
            </div>

        </div>

        <Footer/>
        </>
    )
}