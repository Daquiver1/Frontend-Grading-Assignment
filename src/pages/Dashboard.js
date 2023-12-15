import React from "react"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <section className='hero1'>
      <div className="container">
    <nav>
      <div className="side_navbar">
        <span>Augustine Ninyung</span>
        <a href="#" className="active">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">Exam History</a>
        <a href="#">My Account</a>
        <a href="#">Print Transcript</a>
        <div className="links">
          <span>Recent Exams</span>
          <a href="#">Department</a>
          <a href="#">Programme</a>
          <a href="#">Course</a>
        </div>
      </div>
    </nav>
    <div className="main-body">
      <h2>Student Dashboard</h2>
      <div className="pcard">
        <h1>Welcome Your Student Dashboard</h1>
        <span>Want to have a quick view  of your Dashboard</span>
        <button>Learn More</button>
      </div>
      <div className="history_lists">
        <div className="list1">
          <div className="row">
            <h4>History</h4>
            <a href="#">See all</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Dates</th>
                <th>Int/Asse</th>
                <th>F.Exam</th>
                <th>Total Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>DCIT 101</td>
                <td>2, May, 2023</td>
                <td>69%</td>
                <td>84%</td>
                <td>77</td>
                <td>B+</td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div className="list2">
          <div className="row">
            <h4>Resit Courses</h4>
            <a href="#">Upload Manually</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DCIT 203</td>
                <td>Logic And Digital Circuits</td>
                <td>15, Nov 2023</td>
              </tr>
              <tr>
                <td>DCIT 203</td>
                <td>Logic And Digital Circuits</td>
                <td>15, Nov 2023</td>
              </tr>
              <tr>
                <td>DCIT 203</td>
                <td>Logic And Digital Circuits</td>
                <td>15, Nov 2023</td>
              </tr>
              <tr>
                <td>DCIT 203</td>
                <td>Logic And Digital Circuits</td>
                <td>15, Nov 2023</td>
              </tr>
              <tr>
                <td>DCIT 203</td>
                <td>Logic And Digital Circuits</td>
                <td>15, Nov 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="sidebar">
      <h4>Exam Information</h4>
      
      <div className="newi">
        <div className="info">
          <h5>Date</h5>
          <span>16, June 2023</span>
        </div>
      </div>
      
      <div className="newi">
        <div className="info">
          <h5>Location</h5>
          <span>College of Basic and Applied Science</span>
        </div>
      </div>
      <div className="newi">
        <div className="info">
          <h5>Department</h5>
          <span>COMPSA</span>
        </div>
      </div>
      <div className="newi">
        <div className="info">
          <h5>Room</h5>
          <span>CC5</span>
        </div>
      </div>
    </div>
  </div>
      </section>
    </>
  )
}
export default Dashboard
