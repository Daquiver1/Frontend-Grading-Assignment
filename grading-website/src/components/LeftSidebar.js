import React from 'react';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <>
    
    <div className='right-sidebar-container'>
    <nav class="nav flex-column">
      <div className='nav-link-container'>
        <img src={process.env.PUBLIC_URL + './images/missing_grade_form-removebg-preview.png'}/>      <a class="nav-link nav-underline" href="#">Grade Form</a>
      </div>
      <div className='nav-link-container'>
        <img src={process.env.PUBLIC_URL +'./images/instructors-contact-removebg-preview.png'} />
      <a class="nav-link " href="#">Instructor Contact</a>
      </div>
      <div className='nav-link-container'>
      <img src={process.env.PUBLIC_URL +'./images/tech_support-removebg-preview.png'} />
      <a class="nav-link " href="http://localhost:3000/help">Help and Support</a>
      </div>
 
</nav>
    </div>

    </>
    
  )
}

export default LeftSidebar
