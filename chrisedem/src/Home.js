import React from 'react';
import Footer from './Footer'
import './index.css';



const Home = () => {
  return (
    <div className="Home">
      <h1 className='wlcm'style={{ marginBottom: '10px' }}>Welcome to the Scholar Grade Support!</h1>
    
      <p>Dear Scholars, Educators, and Knowledge Seekers,

We are thrilled to welcome you to Scholar Grade Support,where excellence meets support in the realm of academia. As you embark on your educational journey, we understand the challenges that may come your way. That's why we're here to be your compass, your guide, and your unwavering support. If you're facing challenges with missing grades or have questions about
        your academic performance, you're in the right place. </p>

<h2 className='why' style={{marginBottom: '10px',marginTop:'10px'}}>Why Scholar Grade Support?</h2>
<p>Our platform is dedicated to addressing your concerns and ensuring a smooth academic journey. Here's why you should choose ScholarGrade Support:
      </p>
      <ul>
        <li>Experienced Support Team: Our team consists of experienced professionals ready to assist you.</li>
        <li>Personalized Assistance: We offer personalized solutions tailored to your specific needs.</li>
        <li>Quick Issue Resolution: We work efficiently to resolve problems with missing grades and scoring discrepancies.</li>
        <li>Accessible Anytime, Anywhere: Our platform is accessible 24/7, providing convenience and flexibility.</li>
      </ul>
      <p>
        Whether you're facing challenges with understanding your grades or need assistance with resolving issues, </p>

        <h2 className='serv' style={{marginBottom: '10px',marginTop:'10px'}}>Our Services</h2>
      <p>
        ScholarGrade Support provides a range of services to cater to your academic needs. Some of our key services include:
      </p>
      <ul>
        <li>Grade Analysis: Gain insights into your academic performance with detailed grade analysis.</li>
        <li>Tutoring Sessions: Access one-on-one tutoring sessions with our experienced educators.</li>
        <li>Feedback and Improvement Plans: Receive constructive feedback and personalized improvement plans.</li>

        <h2 className='succ' style={{marginBottom: '10px',marginTop:'10px'}}>Our Success Stories</h2>
      <p>
        Read inspiring success stories from students who have overcome challenges with the help of ScholarGrade Support.
      </p>
      <p>
        Whether you're facing challenges with understanding your grades or need assistance with resolving issues,
        ScholarGrade Support is here to help you succeed.</p>
      
      <p className='down'style={{marginBottom: '30px',marginTop:'10px'}}>
        Explore our platform, and feel free to reach out if you have any questions or concerns. 
        We're here to support you on your academic journey!</p>
      </ul>
       <Footer/>
       
    </div>
  );
    

}

export default Home;
