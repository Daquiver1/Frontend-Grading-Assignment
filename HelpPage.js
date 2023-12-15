import React from "react";
import './HelpPage.css';


function HelpPage(){
  return(
    <div className="tan">
      <div className="cos">
        <p id="ks">Frequently Asked Questions</p>
        <div className="kik">
  <form id="arc" onsubmit="handleSearch(event)">
    <input type="text" id="search-input" className="zax" placeholder="Search..." />
  </form>
  </div>
      </div>
      <div className="bim">
        <div className="Qu">
          <p id="fb">Questions By Topic</p>
          <hr />
          <ul>
            <a href="g"><li>Questions About the Department</li></a>
            <a href="d"><li>Applying for Computer Science(CS)</li></a>
            <a href="r"> <li>Applying for Information Technology(IT)</li></a>
            <a href="s"><li>Financial Aid Application</li></a>
            <a href="x"><li>Short Courses Application</li></a>
            <a href="y"><li>Study Abroad</li></a>
            <a href="z"> <li>Admission</li></a>
            <a href="k"><li>Alumni</li></a>
            <a href="c"><li>Release Grade</li></a>            
            </ul>
        </div>
        <div className="NI">
          <p id="fb">ANSWERS</p><hr />
          <a href="d">CLICK FOR MORE</a>
        </div>
      </div>
    </div>
  )
}
export default HelpPage;