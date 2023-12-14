import React from 'react'

function FAQ() {
    const search = () => {
    
    };
  
    const openNav = () => {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    };
  
    const closeNav = () => {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    };
  
    return (
      <>
        <header id="header">
          <nav className="nav">
            <img src="https://dcs.ug.edu.gh/img/comScience_logo.png" style={{ width: '40%' }} />
            <div className="social-media-container">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook social-media-icon"></i>
              </a>
              <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter social-media-icon"></i>
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram social-media-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin social-media-icon"></i>
              </a>
              
            <i class="fas fa-bell notification-bell"></i>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
            
            </div>
            <div className="search-container">
              <input type="text" className="search-input" id="searchInput" placeholder="Search..." />
              <button type="button" className="search-btn" onClick={() => search()}>Search</button>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          </nav>
        </header>
        
        <header id="second-header">
          <nav className="nav2">
          <div id="main">
                <button className="openbtn" onClick={openNav}>☰</button>
              </div>
            <h1>Missing Grades Report</h1>
            <ul className="header-menu">
              <li><a href="#">Date + Deadline</a></li>
              <li><a href="#">Faculty + Staff</a></li>
              <li><a href="#">Forms + Services</a></li>
              <li><a href="#">Missing Grade Forms</a></li>
              <li><a href="#">Grade Book</a></li>
            </ul>
            
            <div>
              <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>x</a>
                <a href="#">Home</a>
  
                <a href="#">Dashboard</a>
                <a href="#">Grade Report</a>
                <a href="#">Missind Grade Forms</a>
                <a href="#">Instructor Contact</a>
                <a href="#">Help and Support</a>
                <a href="#">Login</a>
                <hr/>
              </div>
            </div>
          </nav>
        </header>
        <h1>Frequently Asked Questions: Missing Grades</h1>
        <div class="container3">
            <h3>Missing Assignments Grades</h3><hr/>
            <p>
            If you are missing a grade for an assignment, please contact your instructor directly. 
             Instructors will generally give you a guideline for their grading timeline. Your instructor will be able to advise
             if the assignment was not received or if they are still in the process of grading the materials.
            </p>
            </div>
            <div class="container3">
            <h3>Missing Final Grades</h3><hr/>
            <p>
            If you are missing a final grade for a course or a residency and it has been longer than 10 business days after the last day
             of class, please contact your Student Success Advisor with information about which course/residency you are missing a grade 
             in and when the course took place.
            </p>
            </div>
            <div class="container3"> 
             <h3>Residency Grades</h3><hr/>
             <p>`Residency grades will not be posted within the residency classroom. Instead, they will be posted directly to your account and 
                will be available in your Final Grades section of your myWalden portal.
                </p><br/>
                <p>1. To determine the grade for your residency, log into your <a href="#">ug.portal</a> .</p><br/>
                <p>2.  Once logged in, go to the ME tab. On the ME tab menu, select the My Education section. 
                     At My Education, select View Final Grades on the left-side of the page.</p><br/>
                <p>3. From the drop-down menu on the following page, select the term in which your residency took place and hit Submit.</p><br/>
                <p>4. The following page should list the residency's grade, along with any other grades you may have earned for a course during that term.</p><br/>
                <p>Please note: Residency grades are either Satisfactory (S) or Unsatisfactory (U).</p><br/>
                If you have any questions about your grade, please contact your intructor by navigating to <a href="#">contact page</a> 
              </div>

              
        <footer>
      <div className="footer-section">
        <h3>STADY</h3>
        <ul>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Universities</a></li>
           <li><a href="#">Open Days</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>STUDENT</h3>
        <ul>
        <li><a href="#">Statement Examples</a></li>
        <li><a href="#">University Ranking</a></li>
        <li><a href="#">students Advice</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ACCOUNT</h3>
        <ul>
        <li><a href="#">Sigin</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Password</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>COMPANY</h3>
        <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Advertise</a></li>
        <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </footer>
     <hr/>
    <footer1>
        <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
    </footer1>

        </>
    )
}
export default FAQ