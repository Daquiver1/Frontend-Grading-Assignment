import React, {useState} from 'react';
import './help.css'

function Help() {
 
 
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className='wrapper'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq'>
        <button className='accordian'>
            How to contact lecturer
            <i class="fa-solid fa-angle-down"></i>
        </button>
        <div className="pannel">
            <p>You can contact the lecturer through his email <br/>lecturer@gmail.com</p>
        </div>
      </div>
      <div className='faq'>
        <button className='accordian'>
            How to submit a complaint.
            <i class="fa-solid fa-angle-down"></i>
        </button>
        <div className="pannel">
            <p>If you have a problem with your grade, just fill in the forms provided.</p>
        </div>
      </div>
      <div className='faq'>
        <button className='accordian'>
            How to change your grade.
            <i class="fa-solid fa-angle-down"></i>
        </button>
        <div className="pannel">
            <p>You will not be able to change your grade but you can resit for the course and try harder next time. If it does not work you can seek the lecturer for guidance.</p>
        </div>
      </div>
      <div className='faq'>
        <button className='accordian'>
            How to submit a complaint.
            <i class="fa-solid fa-angle-down"></i>
        </button>
        <div className="pannel">
            <p>If you have a problem with your grade, just fill in the forms provided.</p>
        </div>
      </div>
      <div className='faq'>
        <button className='accordian'>
           How To Change Password
           <i class="fa-solid fa-angle-down"></i>
        </button>
        <div className="pannel">
            <p>Click on forgot password and reset your password. You will need a picture of your student ID card for this. When you are done, create a new password and save your changes.</p>
        </div>
      </div>
      <div className="sidebar">
          <button onClick={toggleSidebar}>Menu</button>
          <div id="sidebar" className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
          <ul>
          <li><a href="/dashboard">Dashboard Page</a></li>
          <li><a href="/gradepoint">Grade Page</a></li>
          <li><a href="/contact">Lecturer Contact</a></li>
          <li><a href="/help">Help and Support</a></li>
          </ul>
          </div>
          </div>
    </div>
    
    
  );
};

export default Help;