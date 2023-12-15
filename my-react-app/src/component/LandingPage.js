

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './LandHeader';
import Footer from './Footer';
import './LandingPage.css'; 
import Cartoon from "../images/cartoon2.jpg";
import Cartoon1 from "../images/cartoon.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
     <Header />
     

      {/* Main Content - Overview */}
      <section className="overview">
        <div className='overview-grid'>
        <div className='imageBox'>
                <img src={Cartoon} className='cartoon'/>
            </div>

            <div className='overviewBox'>
            <h1 className='welcome'>Welcome<br/></h1>
            
            <p>
            Welcome to GradeHub – Your Trusted Companion in Academic Excellence! Navigate your educational journey with ease using our innovative Missing Grade Reporting System. Here, you can effortlessly view your grades, report any discrepancies, and foster seamless communication with your instructors and academic administration. Empowering you to take control of your academic success, GradeGuard Pro ensures a transparent and engaging experience throughout your educational endeavors. Let's embark on a journey of educational empowerment together!
            </p>
            </div>
            
        </div>
      </section>
      <section className="overview">
        <div className='overview-grid'>
        <div className='imageBox'>
                <img src={Cartoon1} className='cartoon'/>
            </div>

            <div className='overviewBox'>
            <h1 className='welcome'>Access Your Account<br/></h1>
            
            <p>
            For you to access all these features you would have to login into your account
            </p>
            </div>
            
        </div>
      </section>

      <div className='LoginBox'>
       <Link to="/login"> <button className='LoginButton'>LOGIN</button></Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
