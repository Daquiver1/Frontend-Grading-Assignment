import React from 'react';
import './DashBoard.css'; 

function DashBoard() {
  

  return (
    <div className='main'>
      <div className='head'>
      <div class="search-container">
  <form id="search-form" onsubmit="handleSearch(event)">
    <input type="text" id="search-input" class="search-input" placeholder="Search..." />
  </form>
</div>
<div className='nop'>
<div className="notification-container">
      <div className="bell" id="dropdown">
      <ul class="dropdown-content" > 
          <li><h3>Notification</h3></li>
          <li><a href="h">You Have Some Missing Grades In Your Grade Report</a></li>
          <li><a href="g"> Updated Grade Report</a></li>
          <li><a href="j">Welcome Message!</a></li>
          <li><a href='h'>See All Notifications</a></li>
        </ul>
        <span className="badge">3</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM19 17V11C19 7.93 17.54 5.36 15 4.5V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V4.5C6.46 5.36 5 7.93 5 11V17L3 19V20H21V19L19 17Z"
            fill="currentColor"
          />
        </svg>
      </div>
      </div>
      <div className="dp" id='dropdown'>
        <img src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg' alt='' width="80px" height="80px" />
        <ul class="dropdown-content" > 
          <li><p id=''>Eren T. Yeager</p><p>View Profile</p></li>
          <li><a href="h">Edit Profile</a></li>
          <li><a href="g"> Activity Log</a></li>
          <li><a href="j">Account Settings</a></li>
          <li><a href='h'>Sign Out</a></li>
        </ul>
        <span className="badge"></span>
      </div>
      </div>

      </div>

      <div className='DS'>
        <p id='hug'><h1>DashBoard</h1></p>
        <div className='sege'>
          <div className='seg'>
            <h2>GPA</h2>
            <strong><p id='tt'>N/A</p></strong>
        </div>
        
        <div className='seg'>
            <h2>Total Credit Hours</h2>
            <strong><p id='tt'>56</p></strong>
          </div>

          <div className='seg'>
            <h2>Total Courses</h2>
            <strong><p id='tt'>19</p></strong>
          </div>

          <div className='seg'>
            <h2>CGPA</h2>
            <strong><p id='tt'>3.00</p></strong>
          </div>
        </div>
      </div>

      <div className="grade">
      <table>
              <thead>
                <tr>
                  <th className="gd">Course</th>
                  <th>Grade</th>
                  <th>Level</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody id='bus'>
                <tr>
                  <td className="gd">
                    Critical Thinking and Practical Reasoning{" "}
                  </td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Introduction to Computer Science</td>
                  <td>N/A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Office Productivity Tools</td>
                  <td>B</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Mathematics for IT Professionals</td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">
                    Introduction to Statistics and Probability
                  </td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Algebra and Trigonometry</td>
                  <td>B+</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Vectors and Geometry</td>
                  <td>C+</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  );
}

export default DashBoard;
