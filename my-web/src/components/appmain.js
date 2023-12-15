import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../main.css';
import myImage from './images/400.png';

 
function Main(){
    return( 
    <>
     <Navbar/>
    <div className="custom-div">
        <img className="biss" src={myImage} alt="Landing " />
      </div>
      <h1 style={{ color: '#123456' }}>Welcome to Gradesk</h1>
      <main class="cards">
        <section className="card contact">
            
            <h3>About Gradesk</h3>
            <span>All your acdemics grades in one place.Gradesk also offers students ability to personaly track their grades ,let you know where you are and were you need to get to. </span>
            <button>Learn More</button>
        </section>
        <section className="card report">
    <h3>Report Missing Grades</h3>
    <span>Use our missing grade reporting system to notify instructors about any missing grades in your academic record. Ensure your grades are complete and accurate.</span>
    <button>Report Missing Grades</button>
  </section>
  <section className="card progress">
    <h3>Track Academic Progress</h3>
    <span>Monitor your academic progress over time. Gradesk provides visualizations and insights to help you understand your strengths and areas that need improvement.</span>
    <button>View Progress</button>
  </section>
    </main>
     
     <Footer/>
      
      </>

    );
    
};
export default Main;