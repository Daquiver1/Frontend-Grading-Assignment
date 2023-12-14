import react from 'react'


function GradeBook() {
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
            
            </div>
            <div className="search-container">
              <input type="text" className="search-input" id="searchInput" placeholder="Search..." />
              <button type="button" className="search-btn" onClick={() => search()}>Search</button>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          </nav>
        </header>
        <header id="second-header">
  <nav class="nav2">
    <div id="main">
      <button class="openbtn" onClick={openNav}>☰</button>
    </div>
    <h1>Missing Grades Report</h1>
    <ul class="header-menu">
      <li><a href="#"></a></li>
      <li><a href="#">Faculty + Staff</a></li>
      <li><a href="#">Forms + Services</a></li>
      <li><a href="#">Missing Grade Forms</a></li>
      <li><a href="#">Grade Book</a></li>
      <i class="fas fa-bell notification-bell"></i>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
    </ul>
    <div>
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>x</a>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Grade Report</a>
        <a href="#">Missing Grade Forms</a>
        <a href="#">Instructor Contact</a>
        <a href="#">Help and Support</a>
        <a href="#">Login</a>
        <hr/>
      </div>
    </div>
    <div class="profile-section">
      <div class="profile-picture">
        
      </div>
    </div>
  </nav> 
  
</header>

<div class="notification warning">
    <span class="icon">&#9888;</span>
    <button>View Missing Grade</button>
    <link rel="stylesheet" type="text/css" href="styles.css"></link>
    </div>


        <div className="head">
  <div className="grade">
    <div className="box">
      <h3>GPA</h3>
      <ul>
        <li>3.50</li>
      </ul>
    </div>
  </div>
  <div className="grade">
    <div className="box">
      <h3>Total Credit Completed</h3>
      <ul>
        <li>56</li>
      </ul>
    </div>
  </div>
  <div className="grade">
    <div className="box">
      <h3>Completed Course</h3>
      <ul>
        <li>19</li>
      </ul>
    </div>
  </div>
</div>
 <div class="cour">
 <table>
  <thead>
    <tr>
      <th>Course Code</th>
      <th>Grade</th>
      <th>Grade Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>UGRC 150</td>
      <td>A</td>
      <td>12</td>
    </tr>
    <tr>
      <td>DCIT 101</td>
      <td>B+</td>
      <td>10.5</td>
    </tr>
    <tr>
      <td>DCIT 103 </td>
      <td></td>
      <td>9</td>
    </tr>
    <tr>
      <td>DCIT 105</td>
      <td>A</td>
      <td>12</td>
    </tr>
    <tr>
      <td>STAT 111</td>
      <td>N/A</td>
      <td></td>
    </tr>
    <tr>
      <td>MATH 121</td>
      <td></td>
      <td>10.5</td>
    </tr>
    <tr>
      <td>MATH 123</td>
      <td>C+</td>
      <td>7.5</td>
    </tr>
    <tr>
      <td>ECON 101</td>
      <td>N/A</td>
      <td></td>
    </tr>
  </tbody>
</table>

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
export default GradeBook  