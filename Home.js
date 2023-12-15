import React from 'react';

function Home() {
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

      
    <div class="container3">
        <header>
            <h1>Welcome to the Missing Grade Reporting System</h1>
            <p>This system is designed to help students track and report grades that are not recorded in their academic profiles.</p>
            <p>Please navigate through the menu to view your grades, report missing grades, or contact instructors or academic administration.</p>
            <h1>Degree Classification</h1>
            <p>standard grading system for degree classifications based on the overall percentage achieved. The four university grade boundaries are:</p>
            <li>First-Class Honours (1st) (70% and above): Exceptional academic performance</li>
            <li>Upper Second-Class Honours (2:1) (60-70%): Strong performance, most common degree class</li>
            <li>Lower Second-Class Honours (2:2) (50-60%): Satisfactory performance, widely accepted by employers</li>
            <li>Third-Class Honours (3rd) (40-50%): Minimum passing grade for an honours degree</li>

        </header>
        </div>
        <div>
          
    <div class="side-textbox">
        <button><a href="#">Request a Transcript</a></button>
        <button><a href="#">Verify a Degree</a></button>
        <button><a href="#">Enrollment Verification</a></button>
        <button><a href="#">Class Search</a></button>
        <button><a href="#">Privacy Information</a></button>
    </div>
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
  );
}

export default Home;