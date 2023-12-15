import React from "react";
import './Sidebar.css';


function Sidebar() {
  return(
    <>
    <div className="sidenav">
     <div className="ip">
      <img src="https://sts.ug.edu.gh/apps/givetoug/assets/images/UGLOGO.png" alt="" width="200px"></img>
     </div>
     <div> 
    <a href="n">Dashboard</a>
    <a href="h">Grade Report</a>
    <a href="my-react-app/src/Component/GradeForms.js">Missing Grade Form</a>
    <a href="j">Instructor Contact</a>
    <a href="k">Help and Support</a>
    <a href="my-react-app/src/Component/LogInPage.js">Login</a>
    <hr />
    </div>
  </div>
  </>
  )
}

export default Sidebar;