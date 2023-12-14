import "../css/Dashboard.css"
// import Hearder from "./Hearder"
import { IoMdHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

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
                 <i><IoMdHome /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                 <i><IoMdHome /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                 <i><IoMdHome /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                 <i><IoMdHome /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                 <i><IoMdHome /></i> 
                 <span>Dashboard</span>
                </a>
              </li>
              <li className="logout">
                <a href="#">
                 <i><IoMdHome /></i> 
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
                <div className="grade--card">
                  <div className="card--hearder">
                    
                  </div>
                  
                </div>
              </div>
              
            </div>




          </div>




        </div>
        
        
        
        </div>
  )
}

export default Dashboard