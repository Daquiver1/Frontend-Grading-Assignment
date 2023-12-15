import React, { useEffect, useState } from 'react';
import './instructorContact.css';
import ContactNavBar from './contactNavBar.jsx';

import person from '../Assests/user1_.png'

import UserInfo from '../User-Info/userInfo'; 
import Footer from '../Footer/footer';

const Contacts = () => { 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  const [showContactDetails, setShowContactDetails] = useState([]);

  const handleShowContactDetails = (index) => {
    setShowContactDetails((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => { 
    document.title = 'Contact Instructor';
  }, []);

  return (
    <div>
      <ContactNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />
      <section id='contact-section'>
        <div className='text-div'>
          <h1>Instructors' Contact Details</h1>
          <p>Find the corresponding course to the instructor of your missing grades and send and email</p>
          <p>You can also decide to visit them at their various office during the appropriate office times</p>
        </div>
        <div className='lecturer-details1'>
        <div className='lecturer-box'>
            <h4>DICT 101</h4>
            <p>Introduction to Computer Science</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[0] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(0)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 102</h4>
            <p>Introduction to Hardware & Circuit</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[1] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(1)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 103</h4>
            <p>Office Productivity Tools</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[2] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(2)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 104</h4>
            <p>Programming Fundamentals</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[3] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(3)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 105</h4>
            <p>Math for IT Proffessionals</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[4] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(4)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 201</h4>
            <p>Programming 1</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[5] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00 am - 5:00 pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(5)}>View Contact Details</a></p>
          </div>
        </div>
        <div className='lecturer-details2'>
        <div className='lecturer-box'>
            <h4>DICT 202</h4>
            <p>Mobile Application Development</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[6] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00am - 5:00pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(6)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 203</h4>
            <p>Digital & Logic Systems Design</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[7] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00am - 5:00pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(7)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 204</h4>
            <p>Data Structures & Algorithms</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[8] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00am - 5:00pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(8)}>View Contact Details</a></p>
          </div>
          <div className='lecturer-box'>
            <h4>DICT 206</h4>
            <p>Systems Administration</p>
            <img src={person} alt="" />
            <p>(Lecturer's Name)</p>
            {showContactDetails[9] && (
              <div>
                <p>Email: example@st.ug.edu.gh</p>
                <p>Office Hours: 8:00am - 5:00pm</p>
              </div>
            )}
            <p><a href="#" onClick={() => handleShowContactDetails(9)}>View Contact Details</a></p>
          </div>
        </div>
      </section>

      <section id='text-under'>
        <div>
          <div>
            <p>Please note courses that did not appear here are not under the department of Computer Science. <br /> Kindly visit the various department websites for information about those lecturers/instructors.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;