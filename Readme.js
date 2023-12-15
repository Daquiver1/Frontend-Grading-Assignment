import React from 'react';

function README() {
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
          <h1>Missing Grades Report</h1>
          <ul className="header-menu">
          <li><a href="#"></a></li>
            <li><a href="#">Date + Deadline</a></li>
            <li><a href="#">Faculty + Staff</a></li>
            <li><a href="#">Forms + Services</a></li>
            <li><a href="#">Missing Grade Forms</a></li>
            <li><a href="#">Grade Book</a></li>
          </ul>
        </nav>
      </header>

      <div class="container3">
        <h1>
        Grade Reporting System
        </h1>
        <p>
        This project is a Grade Reporting System that allows students to view their grades, report missing grades, and communicate with instructors.
         It provides a user-friendly interface with various features and functionalities. The system is designed to be responsive, ensuring optimal user 
         experience across different devices.
        </p>
        </div>
        <div class="container3"> 
        <ul class="hot">
            <h3>
            Login Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_203936_localhost.jpeg" style={{ width: '50%' }} />
            <p>The login page ensures secure user authentication by verifying credentials such as username and password.
             It provides a smooth login experience and redirects users to the system upon successful authentication.</p><br/>
            <li>1. Secure User Authentication: The login page ensures secure access to the system by verifying the authenticity of users through a login form.</li><br/>
            <li>2. Student ID and PIN Validation: The login page validates the student's ID and PIN to ensure that the entered credentials are correct, preventing unauthorized access.</li><br/>
            <li>3. User Experience: The login page aims to provide a smooth and user-friendly login experience, guiding users through the login process, offering helpful error messages, 
                and facilitating a seamless transition to the dashboard page upon successful login.</li><br/>
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            Grade Report Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_184239_localhost.jpeg" style={{ width: '50%' }} />
            <p>
            The grade report page presents detailed course information, including individual grades, assignments, and assessments, aiding students in analyzing their academic performance.
            </p><br/>
            <li>1. Detailed Course Overview: The grade report page presents students with a comprehensive view of their performance in each course, including individual grades, assignments,
                 and assessments.</li><br/>
            <li>2. Filtering by Semester/Academic Year: The grade report page allows students to filter grades based on semesters or academic years, facilitating the review of performance within specific timeframes.</li><br/>
            <li>3. Academic Performance Analysis: The grade report page may include visual charts, graphs, or analytics to help students analyze their academic performance, providing insights into trends, comparisons, or areas of improvement.</li>
             
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            Missing Grade Form Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_201957_localhost.jpeg" style={{ width: '50%' }} />
            <p>The missing grade form page allows students to report missing grades, providing a structured way to communicate and resolve grade-related issues.</p><br/>
            <li>1. Reporting Missing Grades: The missing grade form page enables students to report any missing grades they have encountered, facilitating communication and prompt resolution of grade-related issues.</li><br/>
            <li>2. Detailed Information Collection: The form collects specific information such as course name, instructor name, expected grade, and explanation, ensuring accurate identification and rectification of missing grades.</li><br/>
            <li>3. Confirmation and Feedback: Upon submitting the missing grade form, the page displays a confirmation message, assuring students that their report has been received and providing closure to the reporting process.</li>
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            Instructor Contact Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_183926_localhost.jpeg" style={{ width: '50%' }} />
            <p> The instructor contact page lists instructors' contact details, enabling students to easily find and communicate with instructors within the system.
                These brief explanations capture the main purposes of each subtopic.</p><br/>
            <li>1.  Access to Instructor Contact Details: The instructor contact page provides students with a list of instructors along with their contact details,
                 making it easy to find and connect with instructors when needed.</li><br/>
            <li>2. Simulated Email Communication: The instructor contact page may offer a simulated email functionality that allows students to compose and send emails to instructors, facilitating communication and inquiries.</li><br/>
            <li>3. Centralized Instructor Communication: The instructor contact page acts as a centralized hub for students to access instructor information and communication tools, streamlining and enhancing communication within the system.</li><br/>
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            Home Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_203055_localhost.jpeg" style={{ width: '50%' }} />
            <p> The home page serves as the central hub of a system, providing an overview of features, resources, and announcements to help users navigate and stay informed.</p><br/>
            <li>1. Central Information Hub: The home page serves as a central information hub for the Grade Reporting System. Its purpose is to provide users with an overview of important features, 
                resources, and announcements. By consolidating key information on the home page, users can quickly access relevant sections, navigate the system efficiently, and stay informed about any updates or changes.</li><br/>
            <li>2. Personalized Experience: The home page often offers a personalized experience for users. By displaying information tailored to each user's profile, such as upcoming assignments, deadlines,
                 or personalized messages, the home page provides a customized view that enhances user engagement and promotes a sense of belonging within the system.</li><br/>
            <li>3. Navigation and Orientation: The home page plays a crucial role in facilitating user navigation and orientation within the Grade Reporting System. It typically includes clear navigation menus,
                 intuitive icons, or search functionalities that help users easily find the desired sections or functionalities. The home page acts as a starting point from which users can explore other
                  important pages and features, ensuring a seamless and user-friendly experience within the system.</li><br/>
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            Transcript Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_202622_localhost.jpeg" style={{ width: '50%' }} />
            <p>The transcript page displays a student's academic record, including courses, grades, and credits, serving as an official summary of their educational achievements and progress.</p><br/>
            <li>1. Academic Record: The transcript page acts as a comprehensive record of a student's academic accomplishments, providing an official and detailed summary of completed courses, grades attained, and accumulated credits. 
                It enables students to showcase their achievements to potential employers, educational institutions, or other relevant parties.</li><br/>
            <li>2.  Progress Evaluation: The transcript page facilitates the evaluation of a student's progress towards graduation requirements. By presenting a clear overview of completed courses and earned credits,
                 it assists students and academic advisors in tracking degree or program fulfillment. This information aids in determining remaining courses needed for graduation and planning academic paths accordingly.</li><br/>
            <li>3.  Academic History: The transcript page serves as a historical reference for students and educational institutions. It allows students to review their past performance, identify patterns, and monitor overall academic progress.
                 Educational institutions can employ the transcript page to assess students' eligibility for scholarships, honors programs, or other academic opportunities.</li><br/>
         </ul>
        </div>

        <div class="container3"> 
        <ul class="hot">
            <h3>
            FAQ Page
            </h3>
            <img src="c:\Users\AMG MONI\Downloads\Web capture_15-12-2023_18352_localhost.jpeg" style={{ width: '50%' }} />
            <p> The FAQ page compiles commonly asked questions and their answers, offering a convenient self-service resource to address user queries and reduce the need for support.</p><br/>
            <li>1. Address Common Questions: The FAQ page serves as a resource to address frequently asked questions and common queries that users may have. 
                It provides clear and concise answers to help users find solutions or information they need without the need for further assistance.</li><br/>
            <li>2. Enhance User Experience: By offering a readily accessible and organized collection of answers, the FAQ page improves the overall user experience. 
                Users can quickly find relevant information, saving time and effort. It promotes self-service support, empowering users to find answers independently and fostering a sense of satisfaction and efficiency.</li><br/>
            <li>3.  Reduce Support Workload: An effective FAQ page can significantly reduce the volume of support requests and inquiries. By proactively addressing common questions, 
                it enables users to find answers without needing to contact customer support. This helps streamline support operations, allowing support teams to focus on more complex or unique issues and provide faster responses when needed.</li><br/>
         </ul>
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
export default README