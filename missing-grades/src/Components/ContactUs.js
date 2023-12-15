import React, { useState } from 'react';
import './contactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function ContactPage() {
  const [isNavActive, setNavActive] = useState(false);
  const [instructors] = useState([
    { name: 'MARK ATTA MENSAH', bio: 'SOFTWARE AND DATA MINING', profilePicture: 'https://th.bing.com/th/id/OIP.N_1DS3_4F1IpZ50bqC8jAAHaHa?rs=1&pid=ImgDetMain' },
    { name: ' DWUMFOUR ABDULLAI ABDUL-AZIZ', bio: ' Digital and Logic System Design', profilePicture: 'https://i1.rgstatic.net/ii/profile.image/909208878866433-1593783697363_Q128/Abdullai-Dwumfour.jpg' },
    { name: 'SOLI MICHAEL AGBO TETTEY', bio: 'MULTI MEDIA AND WEB DESIGN', profilePicture: 'https://media.licdn.com/dms/image/C4E03AQGTpx5t09-ADA/profile-displayphoto-shrink_200_200/0/1595237435787?e=2147483647&v=beta&t=Xz8814JOsYjzB1FidpYLeVz7vU2sppWBHh0BNkJS5CE' },
    { name: 'APIETU FERDINAND KATSRIKU', bio: 'INTRO TO COMPUTER SCIENCE', profilePicture: 'https://i.ytimg.com/vi/0V81uwO-f68/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXShUMA8=&rs=AOn4CLDUIDl6qI7qxwJ0erMlyFo5P7GffA' },
   
  ]);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [currentInstructorIndex, setCurrentInstructorIndex] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('Email sent successfully!');

  const openEmailModal = (index) => {
    setIsEmailModalOpen(true);
    setCurrentInstructorIndex(index);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
    setEmailSubject('');
    setEmailMessage('');
  };

  const sendEmail = () => {
    setIsEmailSent(true);
    closeEmailModal();
  };

  function toggleNav() {
    setNavActive(!isNavActive);
  }

  return (
    <div className="instructors-container">
      <header id="header">
        <div className="top-menu-box">
          <div className="ugLogo">
            <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="UG logo" width="150px" />
          </div>
          <div>
            <div className={`sidenav ${isNavActive ? 'active' : ''}`}>
              <ul className="sideList">
                <li className="navbar-item"><a href="www.sakai ug.edu.gh" className="navbar-link">SAKAI<span></span></a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">HOMEPAGE<span></span></a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">MISWEB<span></span></a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">GRADE REPORT<span></span></a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">MISSING GRADE<span></span></a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">HELP & SUPPORT<span></span></a></li>
              </ul>
            </div>
            <nav className="navbar">
              <ul>
                <li className="navbar-item"><div className="menu-icon" onClick={toggleNav}>&#9776;</div></li>
                <li className="navbar-item">
                  <FontAwesomeIcon className="avatar" icon={faUserCircle} /> <span className="user-name">Mr. BEN</span>
                  <a href="#" className="navbar-link">LOGOUT<span></span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  
      {instructors.map((instructor, index) => (
        <div key={index} className="instructor">
          <img src={instructor.profilePicture} alt="Profile Picture" />
          <h2>{instructor.name}</h2>
          <p>{instructor.bio}</p>
          <button onClick={() => openEmailModal(index)}>Contact</button>
        </div>
      ))}


      {isEmailModalOpen && (
        <div className="email-modal">
          <h2>Send Email</h2>
          <label htmlFor="to">To:</label>
          <input type="text" id="to" value={`Instructor: ${instructors[currentInstructorIndex].name}`} readOnly />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} />

          <button onClick={sendEmail}>Send</button>
          <button onClick={closeEmailModal}>Back</button>
        </div>
      )}

      {isEmailSent && <p>{confirmationMessage}</p>}
      
    </div>
  );
}

export default ContactPage;
