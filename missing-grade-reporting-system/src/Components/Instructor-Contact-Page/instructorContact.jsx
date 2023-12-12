import React, { useEffect, useState } from 'react';
import './instructorContact.css';
import ContactNavBar from './contactNavBar.jsx';

import UserInfo from '../User-Info/userInfo'; 
import Footer from '../Footer/footer';

const Contacts = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

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

      {/* Your component content goes here */}
      <Footer />
    </div>
  );
};

export default Contacts;