import React, { useState, useEffect } from 'react';
import './helpSupport.css'

import UserInfo from '../User-Info/userInfo'; 
import HelpSupportNavBar from './supportNavBar.jsx';
import Footer from '../Footer/footer';

const HelpSupport = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  useEffect(() => {
    document.title = 'Help & Support';
  }, []);

  return (
    <div>
      <HelpSupportNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />

      <section id='support-section'>
        <div>
          <h1>Hello my name is Kevlar</h1>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default HelpSupport