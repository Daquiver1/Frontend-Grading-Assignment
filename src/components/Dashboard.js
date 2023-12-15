import React, { useState } from 'react';

import GradeReport from './GradeReport';
import MissingGrade from './MissingGrade';
import ContactInstructor from './ContactInstructor';
import Faq from './Faq';
import "./Dashboard.css"
import DashboardContent from './DashboardContent';
import Footer from './Footer';

const Dashboard = ({ gradesData, missingGrades }) => {

  const [page, setPage] = useState("dashboard");
  return (
    <div className='dashboard'>
      <div className='navbar'>
        <div className='Logo'>Missing Grade Report System </div>
        <div className='navLinks'>
          <li onClick={()=> {setPage("dashboard")}}>Dashboard</li>
          <li onClick={()=> {setPage("grade-report")}}>Grade Report</li>
          <li onClick={()=> {setPage("missing-grade")}}>Missing Grade</li>
          <li onClick={()=> {setPage("contact-instructor")}}>Contact Instructor</li>
          <li onClick={()=> {setPage("faq")}}>FAQ</li>
        </div>
      </div>
      <div className='outlet'>
        {
          page === "dashboard" ? <DashboardContent/> : 
          (
            page === "grade-report" ? <GradeReport/> :
            (
              page === "missing-grade" ? <MissingGrade/> :
              (
                page === "contact-instructor" ? <ContactInstructor/> :
                (
                  page === "faq"? <Faq/>: null
                )
              )
            )
          )
        }
      </div>
      <div> 
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
