import React, { useState, useEffect } from 'react';
import './gradeReport.css';

import GradeReportNavBar from './gradeReportNavBar.jsx';
import UserInfo from '../User-Info/userInfo'; 
import Footer from '../Footer/footer';


const GradeReport = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  useEffect(() => {
    document.title = 'Grade Report Page';
  }, []);

  return (
    <div>
      <GradeReportNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>

      <Footer />
    </div>
  );
};

export default GradeReport;