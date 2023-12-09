import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Home() {
  const reviews = [
    {
      id: 1,
      name: 'Mirabel Aba',
      job: 'Student',
      text: 'Grade-Tracker-360 has revolutionized how I manage my academic progress...',
      image: '/Images/test-1.jpg' ,
    },
    {
      id: 2,
      name: 'Bene Brown',
      job: 'Student',
      text: 'This app made it incredibly easy for me to track my grades and stay organized.',
      image: '/Images/test-2.jpg',
    },
    {
      id: 3,
      name: 'Kwadwo Izzy',
      job: 'Student',
      text: 'I highly recommend Grade-Tracker-360 for every student looking to manage their academic progress efficiently.',
      image: '/Images/test-3.jpg',
    },
  ];

  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="main-content">
      <div className="main-home">
        <div id="index-banner">
          <img alt="banner" src="/Images/home.jpeg" /> 
        </div>
        <div className="index-contents">
          <div className="index-contents-heading">
            <h2>Welcome to Grade-Tracker-360</h2>
            <div className="underline-h2"></div>
            <div className="description-home">
              <p>Empower your academic journey with Grade-Tracker-360, your personalized academic companion.</p>
              <p>Effortlessly monitor and manage your grades, connect with instructors, and stay on top of your education with our comprehensive features:</p>
              <h2 id="subtitle">Key Features</h2>
              <div className="key-features">
                  <div className="features" >
                      <img alt="grade-tracker" src="/Images/grade-tracker.jpg" /> 
                        <h3>Real-time Grade Tracking</h3>
                        <p>Stay updated on your academic progress with instant access to your grades and performance.</p>
                  </div>
                  <div className="features" >
                      <img alt="grade-tracker" src="/Images/instructor.jpg" />
                        <h3>Instructor Communication</h3>
                        <p> Seamlessly connect with your instructors to ask questions, seek guidance, and receive feedback.</p>
                  </div>
                  <div className="features" >
                      <img alt="grade-tracker" src="/Images/grade-tracker2.jpg" />
                        <h3>Academic Transcript Access</h3> 
                        <p>Easily view and track your academic history and achievements in one place.</p>
                  </div>
                  <div className="features" >
                      <img alt="grade-tracker" src="/Images/grade-tracker3.jpg" />
                        <h3>Missing Grade Inquiries & Support</h3> 
                        <p>Submit inquiries for missing grades or seek support whenever you need assistance.</p>
                  </div>
              </div>
              <Link to="/LoginPage"><button className="explore-button">Explore Features</button></Link>
              <div className="testimonial-container">
                    <div className="testimonial-image">
                      <img src={reviews[index].image} alt="Reviewer" />
                    </div>

                   
                    <div className="testimonial-details">
                      <h3>{reviews[index].name}</h3>
                      <p>{reviews[index].job}</p>
                      <p>{reviews[index].text}</p>
                    </div>

                   
                    <div className="testimonial-buttons">
                      <button onClick={leftShiftHandler}>
                        <FiChevronLeft />
                      </button>
                      <button onClick={rightShiftHandler}>
                        <FiChevronRight />
                      </button>
                    </div>


                <div className='surprise-button mt-6'>
                      <button
                        onClick={surpriseHandler}
                        className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                        Testify
                      </button>
                    </div>
              </div>


              <div className="cta-section">
                  <h2>Ready to Get Started?</h2>
                  <div className="cta-buttons">
                    <button className="cta-button">Get Started Today!</button>
                    <button className="cta-button">Explore Our Features</button>
                    <button className="cta-button">Sign Up for Free</button>
                    <button className="cta-button">Learn More</button>
                    <button className="cta-button">Start Your Journey</button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
