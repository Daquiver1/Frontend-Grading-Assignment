import React from 'react'
import grades from './img/grades.jpg';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <section>
        <div className="content">
          <div className='textBox'>
            <h2>Missing Grade Reporting System</h2>
            <div className="btn">
              Log In to Check Grades
            </div>
          </div>
          <div className="imgBox">
            <img src={grades} alt=""className="grades" style={{height:'350px'}}/>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  )
}

export default LandingPage