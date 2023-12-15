import React, { useEffect } from 'react';
import './overviewPage.css';

import student_img from '../Assests/student_img.jpg'

const Overview = () => {

  useEffect(() => {
    document.title = 'Overview';
  }, []);

  return (
    <div>
      <div className='container' style={{ backgroundImage: `linear-gradient(rgba(40, 40, 40, 0.5), rgba(0, 0, 0, 0.5)), url(${student_img})` }}>
        <h1 className='biggger-font-h1'>Students Enquiry</h1>
        <p className='biggger-font'>Welcome to the University of Ghana students' enquiry page. <br />Here, you can check and report your missing grades, view your GPA progress <br />and also your local academic report.</p>
      <div className="center-content">
        <p>Click here to login and check your dashboard</p>
        <a href="/login">Login</a>
      </div>  

      <div id='flex-div'>
        <div className='report1'>
        <a href="/dashboard"><div>View your academic results report and missing grades</div></a>
      </div> 

      <div className='report2'>
        <a href="/grade-report#report-section2"><div>Check your overraw performance and lectures report</div></a>
      </div>

      <div className='report3'>
        <a href=""><div>View your cummulative GPA and alternate GPA progress</div></a>
      </div> 
      </div>
      

      </div>
    </div>
  );
};

export default Overview;