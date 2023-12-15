import react from 'react'

function Transcripts(){
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
        
      <div class="side-text">
              <button><a href="#">Request a Transcript</a></button>
              <button><a href="#">Verify a Degree</a></button>
              <button><a href="#">Enrollment Verification</a></button>
              <button><a href="#">Class Search</a></button>
              <button><a href="#">Privacy Information</a></button>
          </div>
            
      
      <div class="container3">
        <h1>
            TRANSCRIPTS
        </h1>
        <p>
        A transcript is a record of all courses attempted and all results obtained by a student. 
        Students can access their academic records through the MIS web portal.
        </p>
        <p>
        An official transcript can be obtained 48 hours after submitting a request. There is also an option to request EXPRESS TRANSCRIPTS.
         To activate this option you must place your request before 11:30am, following the steps outlined below. Your transcripts will be ready FOUR HOURS later.
        </p>
        <p>
            NOTE: Transcripts of all students who graduated from the University before 1996 will be ready for collection within ONE WEEK.
        </p>
        <p>
        Receipts for transcripts of graduate students should be submitted at the Graduate School.  
        </p>
        <h3>
        Undergraduate Transcripts
        </h3>
        <p>
        Students who graduated after 1996 should do the following:
        </p>
        <li>Pay for the transcript at the University's Cash Office</li>
         <li>Collect your transcript from Room D2 after 48 hours.</li>
           <li>Take the receipt of payment for the transcript to Room D2.</li>
             <p>Continuing students and those who have completed their programmes but have not yet been presented for graduation should do the following:</p>
                <li>Print out your online transcript (academic records) and check to be sure the information is correct.</li>
                  <li>If you are satisfied with your records, proceed to request for your transcript.</li>
                      <li>Pay for the transcript at the University's Cash Office.</li>
                           <li>Take the receipt of payment to Room D2.</li>
                      <li>Collect transcripts from Room D2 after 48 hours (after 2pm).</li>
                  <h3> Additional Information</h3>
               <p>Students who find their online transcript to be incomplete and/or inaccurate should make a report to their Department
                  and send an e-mail to academic@ug.edu.gh.</p>
                  <p>
                  Under the 48 hour regime, if a request for a transcript is placed on Friday, the transcript will be ready on the following Tuesday at 2pm.
                  </p>
                  <p>
                  For more information, please call +233 302-213850 ext. 6785 0r 6174,  0553765051, 0503248360 and one of our team members will be happy to assist.
                  </p>
                  <h3>Requesting Records</h3>
                   <p><h3>Effective July 30, 2022, new Online Academic Transcript Request Portal</h3>
                   is to be used to place all records requests for current and former students of the University of Ghana.<br/>
                   All requests and payment should be submitted online on the STS https://sts.ug.edu.gh/services/login. Mail, phone, or fax requests are not accepted.
                    Same day service is not available
                    </p>

                    <h3>Current Rates for Transcript Request</h3>
                    
         <div id="flex"> 
      <div>
      <ul>
        <h3>Mode</h3>
        <li>Physical Copy (by Pick up at AAD)</li>
        <li>Physical Copy (With Courier Delivery within Ghana)</li>
        <li>Physical Copy (With Courier Delivery outside Ghana)</li>
        <li>Digital copy (Online Delivery)</li>
        </ul>
      </div>
      <div>
      <ul>
        <h3> First copy (GH¢)</h3>
        <li>GH¢30</li><br/>
        <li>GH¢30, plus Ghc50 delivery fee = Ghc80</li>
        <li>US$ 55 or Cedi equivalent</li>
        <li>US$ 10 or Cedi equivalent</li>
        </ul>
      </div>
      <div>
      <ul>
        <h3>Additional Copies</h3>
        <li>GH¢30 for first copy + GH¢25 for each additional copies.</li><br/>
        <li>GH¢25 for each additional up to 10 copies, plus Ghc50 delivery fee. No courier permitted beyond 10 copies pick up only.</li>
        <li>US$ 55 for first copy + US$ 5 for each additional copy.  (or Cedi equivalent)</li>
        <li>N/A</li>
        </ul>
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
                
      </div>
       

        </>

    )
}
export default Transcripts
