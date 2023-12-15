

import React, { useEffect} from 'react';
import './HomePage.css';
import homePic from '../Accutrument/homepic2.jpg'; 

    
 


const HomePage = () => {

    useEffect(() => {
        document.title = 'Homepage';
 }, []);

  return (
    <div>
        <div className='container' style={{backgroundImage: `url(${homePic})`}}>
            <p>Click here to login</p>
            <a href="LoginPage.jsx" className='log3'>Login</a>
        </div>
        <div className="home-page">
      <div className="grid-container">
        <div className="grid-box red">

       
            
         
          <p>
          <h2>Welcome to our Missing Grade Reporting System!</h2>
            Ensuring a seamless academic experience, we present a user-friendly
            platform to report and resolve missing grades efficiently. Whether
            you're a student, instructor, or administrator, our system is
            tailored to meet your needs. Join us in fostering transparency,
            accountability, and academic excellence. Let's make missing grades a
            thing of the past!
          </p>

        </div>
        <div className="grid-box green">
        <p>
            <h1>Guide</h1>
            To ensure a smooth experience with our platform, please adhere to
            the following guidelines:
            <ul>
              <li>Use your secure login credentials to access the system.</li>
              <li>Clearly and accurately report any missing grades you
                encounter.</li>
              <li>Provide relevant details and context when submitting a report
                for efficient resolution.</li>
              <li>Respect the privacy and confidentiality of academic
                information.</li>
              <li>Explore the available resources and support features to
                maximize your experience.</li>
            </ul>
            Thank you for contributing to the effectiveness of our Missing
            Grade Reporting System. Your cooperation ensures a transparent,
            accountable, and positive academic environment for all users.
          </p>
        </div>
        <div className="grid-box blue">
        <p>
            <h1>Purpose</h1>
            Our Missing Grade Reporting System is dedicated to streamlining the
            process of reporting and resolving missing grades in academic
            institutions. We understand the importance of accurate and timely
            grade information for students, educators, and administrators. Our
            user-friendly platform ensures a seamless experience for reporting
            missing grades, facilitating swift resolutions, and promoting
            transparency in academic records. Whether you're a student tracking
            your progress or an instructor managing grades, our system is
            designed to meet the diverse needs of the academic community.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage
