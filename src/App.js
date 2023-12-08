import { faAddressCard, faChartBar, faQuestionCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Local Import
import Dashboard from "./components/Dashboard";
import MissingGrade from "./components/MissingGrade";
import GradeReport from "./components/GradeReport";
import MeetInstructor from "./components/MeetInstructor";
import Faq from "./components/Faq";
import Login from "./components/Login"



function App() {
  const [user, setUser] = useState("Enock Queenson")
  const [page, setPage] = useState("dashboard")
  const [isLogIn, setIsLogIn] = useState(false)

  console.log(page);
  return (
    <>
    {
      isLogIn === false ? <Login islogin={setIsLogIn}/> :
      <div className="fullPage">
        <div className="sideNav">
          <div className="webName">Student Report</div>
          <div className="userAccount">
            <FontAwesomeIcon className="userIcon" icon={faUser} />
            <p>{user}</p>
          </div>
          <div className="line"></div>
          <div className="dashboard navLink" onClick={()=> {
            setPage('dashboard')
          }}>
            <FontAwesomeIcon className="userIcon" icon={faDashboard} />
            <p>Dashboard</p>
          </div>
          <div className="gradeReport navLink" onClick={() => {
            setPage("gradeReport")
            }}>
            <FontAwesomeIcon className="userIcon" icon={faChartBar} />
            <p>Grade Repot</p>
          </div>
          <div className="missingGrade navLink" onClick={() => {
            setPage("missingGrade")
          }}>
            <FontAwesomeIcon className="userIcon" icon={faFileExcel} />
            <p>Missing Grade</p>
          </div>
          <div className="meetIntructor navLink" onClick={() => {
            setPage("meetInstructor")
            }}>
            <FontAwesomeIcon className="userIcon" icon={faAddressCard} />
            <p>Meet Instructor</p>
          </div>
          <div className="FAQ navLink" onClick={() => {
            setPage("Faq")
            }}>
            <FontAwesomeIcon className="userIcon" icon={faQuestionCircle} />
            <p>FAQ</p>
          </div>
          <div className="logFooter">
            <p>sign out</p>
          </div>
        </div>
        <div className="pageOutput">
            {
              page === "dashboard" && isLogIn === true ? <Dashboard/> :
              (
                page === "gradeReport" && isLogIn === true ? <GradeReport/> : 
                (
                  page === "missingGrade" && isLogIn === true ? <MissingGrade/> : 
                  (
                    page === "meetInstructor" && isLogIn === true ? <MeetInstructor/> :
                    (
                      page === "Faq" && isLogIn === true ? <Faq/> : null
                    )
                  )
                )
              )
            }
        </div>
      </div>

    }
    </>
  );
}

export default App;
