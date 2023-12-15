import React from 'react';
import './home.css';
import Header from './Header';
import Footer from './Footer.js';

const Home = () => {
  return (
    <div className='main'>

        <div>
            <Header />
            <h1>Missing Grade<br/> Reporting System</h1>
            <input type="text" className="placeHolder" placeholder="Search..." />
      </div>
      
      <div className='sub'>
        <img src={require('./University of Ghana.jpg')} alt='University of Ghana' />
      </div>

      <div className='sub2'>
        <h2>Navigate Your Success:<br/>  Seamlessly Manage Grades with <br/> Our Missing Grade Reporting System</h2>
        <p className='first'>The website serves as a user-friendly interface facilitating students in tracking and 
        reporting missing grades not recorded in their academic profiles. 
        <br/> It aims to provide an efficient and interactive platform for students to manage their grades and 
        communicate effectively with instructors or academic administration.</p>
      </div>

      <div className='sub3'>
      <div>
      <img src={require('./grade.png')} alt='grade' className='littleimg' />
      <h3>Grade Overview Dashboard</h3>
      <p className='little'>Provides students with an immediate overview of their current grades.<br/>
        Displays notifications for any missing grades not recorded in their academic profiles.<br/>
        Offers a concise snapshot of academic performance to aid students in tracking their progress.</p>
      </div>

      <div>
      <img src={require('./missing grade.png')} alt='missing grade'className='littleimg'  />
      <h3>Missing Grade Reporting Form</h3>
      <p className='little'>Enables students to report missing grades through a user-friendly form.<br/>
        Includes fields for essential information such as course name, instructor details etc<br/>
        Confirms the reported missing grades, guiding students in notifying instructors about the discrepancies.</p>
      </div>

      <div>
      <img src={require('./contacts-77.png')} alt='contacts' className='littleimg' />
      <h3>Instructor Contact Page</h3>
      <p className='little'>Lists instructors with their contact details for easy reference.<br/>
        Facilitates simulated communication by providing a feature to send mock emails to instructors.<br/>
        Acts as a platform for students to engage with instructors regarding grade-related concerns or inquiries.</p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
