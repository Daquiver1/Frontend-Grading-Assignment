import { faAddressCard, faChartBar, faQuestionCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function App() {
  const [user, setUser] = useState("Enock Queenson")

  return (
    <>
    <div className="fullPage">
      <div className="sideNav">
        <div className="webName">Student Report</div>
        <div className="userAccount">
          <FontAwesomeIcon className="userIcon" icon={faUser} />
          <p>{user}</p>
        </div>
        <div className="line"></div>
        <div className="dashboard navLink">
          <FontAwesomeIcon className="userIcon" icon={faDashboard} />
          <p>Grade Repot</p>
        </div>
        <div className="gradeReport navLink">
          <FontAwesomeIcon className="userIcon" icon={faChartBar} />
          <p>Grade Repot</p>
        </div>
        <div className="missingGrade navLink">
          <FontAwesomeIcon className="userIcon" icon={faFileExcel} />
          <p>Missing Grade</p>
        </div>
        <div className="meetIntructor navLink">
          <FontAwesomeIcon className="userIcon" icon={faAddressCard} />
          <p>Meet Instructor</p>
        </div>
        <div className="FAQ navLink">
          <FontAwesomeIcon className="userIcon" icon={faQuestionCircle} />
          <p>FAQ</p>
        </div>
        <div className="logFooter">
          <p>sign out</p>
        </div>
      </div>
      <div className="pageOutput">

      </div>
    </div>
    </>
  );
}

export default App;
