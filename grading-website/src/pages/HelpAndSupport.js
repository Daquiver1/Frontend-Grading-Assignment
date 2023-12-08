import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LeftSidebar from '../components/LeftSidebar';
import Accordion from '../components/Accordion';


function HelpAndSupport() {
 const backgroundImage=(
  <>
  <img src={process.env.PUBLIC_URL + './images/help and support page image.jpg'} />
  </>
 )
  const pageContent =(
    <>
    <div className='page-welcome-note-container'>
    <h3>Welcome to UG Grade Report Support</h3>
    <p>We're here to help</p>
    </div>
    <div className='search-input-container'>
      <div className='search-input'>
      <input type='text' placeholder='Search Support' />
      </div>
      <div className='search-icon-container'>
        <img src={process.env.PUBLIC_URL +'./images/search-icon.png'}/>
        </div>
    </div>
    <div className='faq-section-header'>
      <h4>FAQ Section</h4>
    </div>
    <div className='contact-form-header'>
      <h4>Contact Form</h4>
      </div>
    <div className='contact-form-container'>
      <div className='id-container'>  
        <p>Your Student ID</p>
       <input type='text' placeholder='Enter Student ID'/>
    </div>
    <div className='email-container'>
      <p>Your student email</p>
      <input type='text' placeholder='Enter email'/>
    </div>
    <div className='message-container'>
      <p>Your message</p>
      <textarea></textarea>
    </div>
    <div className='message-button-container'>
      <button>Send Message</button>
    </div>
    </div>
    </>
  )
  return (
    <>
    <Navbar />
    <HeroSection
    backgroundImage={backgroundImage}  pageContent={pageContent}
     />
     <LeftSidebar />
     <Accordion />
     
    </>
      
 
  )
}

export default HelpAndSupport
