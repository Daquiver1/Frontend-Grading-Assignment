import "../css/Dashboard.css"
// import Hearder from "./Hearder"
import { IoMdHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineGrade } from "react-icons/md";
import Footer from "./Footer"

  


const Dashboard = () => {
 
  return (
    <div>
        {/* <Hearder  /> */}
        <div className="dashboard">
          <div className="sidebar">
            <div className="logoo">  </div>
            <ul className="menu">
              <li className="active">
                <a href="#">
                 <i><RxDashboard /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/Herosection">
                 <i><IoMdHome /></i> 
                 <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/Missinggrade">
                 <i><MdOutlineGrade /></i> 
                 <span>Missing grade</span>
                </a>
              </li>
              <li>
                <a href="/Faqs">
                 <i><FaRegQuestionCircle /></i> 
                 <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="/Contact">
                 <i><MdOutlineContactPhone /></i> 
                 <span>Contact</span>
                </a>
              </li>
              <li className="logout">
                <a href="/">
                 <i><FiLogOut /></i> 
                 <span>Logout</span>
                </a>
              </li>
              
            </ul>
            
          </div>

          <div className="main--content">
            <div className="header--wrapper">
            <div className="hearder--title">
              <span>Val Kraidy</span>
              <h2>Dashboard</h2>
            </div>

            <div className="user--info">
              <div className="search--box">
                
             
              <i><IoMdSearch /></i>
              <input type="text" name=""
              placeholder="search" value=""/>
             
               </div>
               <img src="src/images/profile.jpg" alt="profile picture"/>
            </div>
              
            </div>


            <div className="card--container">
              <h3 className="main--title">qwertyu</h3>
              <div className="card--wrapper">
                <div className="grade--card light-red" >
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                        payment
                      </span>
                      <span className="amount-value"> $500.00
                      </span>
                    </div>
                    <i className="icon-react dark-red"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543111111111111</span>
                </div>

                <div className="grade--card light-purple">
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                      Payment amount
                      </span>
                      <span className="amount-value ">$500</span>
                     
                    </div>
                    <i className="icon-react dark-purple"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543211111111111</span>
                </div>
                <div className="grade--card light-green">
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                      Payment amount
                      </span>
                      <span className="amount-value ">$500</span>
                     
                    </div>
                    <i className="icon-react dark-green"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543211111111111</span>
                </div>
                <div className="grade--card light-blue">
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                      Payment amount
                      </span>
                      <span className="amount-value ">$500</span>
                    </div>
                    <i className="icon-react dark-blue"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543211111111111</span>
                </div>
                <div className="grade--card light-yellow">
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                      Payment amount
                      </span>
                      <span className="amount-value ">$500</span>
                    </div>
                    <i className="icon-react dark-yellow"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543211111111111</span>
                </div>
                <div className="grade--card light-gray">
                  <div className="card--hearder">
                    <div className="amount">
                      <span className="title">
                      Payment amount
                      </span>
                      <span className="amount-value ">$500</span>
                    </div>
                    <i className="icon-react dark-gray"><FaResearchgate /></i>
                  </div>
                  <span className="card-details">9876543211111111111</span>
                </div>
              </div>
            </div>
            <div className="tabular--wrapper">
              <div className="main--title">
                qwertyu
              </div>
              <div className="table--container">
                <table>
                  <thead>
                  <tr>
                    
                      <th>Course code</th>
                      <th>Course code</th>
                      <th>Course code</th>
                      <th>Course code</th>
                      <th>Course code</th>
                      <th>Course code</th>
                      <th>Course code</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <td>
                        122
                      </td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      
                    </tr>
                    <tr>
                      <td>
                        122
                      </td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      
                    </tr>
                    <tr>
                      <td>
                        122
                      </td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      
                    </tr>
                    <tr>
                      <td>
                        122
                      </td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      
                    </tr>
                    <tr>
                      <td>
                        122
                      </td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      <td>qwerty</td>
                      
                    </tr>
                  </tbody>
                
                </table>

                
              </div>
            </div>




          </div>
        </div>
        
        
        <Footer/>
        </div>
  )
}

export default Dashboard