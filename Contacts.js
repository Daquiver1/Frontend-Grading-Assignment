import react from 'react'
 
function Contacts() {
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
    return(
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
              ___________________________________
              <a href="#">Dashboard</a>
              <a href="#">Grade Report</a>
              <a href="#">Missind Grade Forms</a>
              <a href="#">Instructor Contact</a>
              <a href="#">Help and Support</a>
              <a href="#">Login</a>
              ___________________________________
            </div>
          </div>
        </nav>
      </header>

      <div class="container3">
        <h1>Contact Us</h1>
        <p>Whether you are on campus, at home, or somewhere in between, we are available to help you.</p>
        <h1>Email</h1>
        <p>Email us at any time at dcs@ug.edu.gh . We acknowledge messages within 1 business day. </p>
        <p>Want a shortcut for a specific question? See our Direct Service Contacts for other email options.</p>
        <h1>Phone Calls</h1>
        <p>8:00 AM - 5:30 PM (GMT)</p>
        <p>+233 501 382 035 OR +233 559 145 698</p>
        <h1>Direct Service Contacts</h1>
        <p>Courses, Schedule of Classes: courses@ug.edu</p>
        <p>Diplomas: diploma@ug.edu</p>
        <p>Registration, records, transcripts, verifications, and all other services: registrar@ug.edu</p>
        <p>Reporting, technical data services: reghelp@ug.edu</p>
        <p>Support for SIS related business units outside the registrar's office: sisbateam@ug.edu</p>
        <p>Learn more About the Office of the University Registrar.</p>
        </div>
        
        <div>
          
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
        </div>
      


      
      </>

    )
}
export default Contacts