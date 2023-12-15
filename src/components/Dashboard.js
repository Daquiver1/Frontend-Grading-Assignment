import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components-css/Dashboard.css'
import { faArrowRightFromBracket, faArrowUp, faBars, faBell, faCircleQuestion, faFileExcel, faGauge, faSquarePollVertical, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

// Local imports
import GradeReport from './GradeReport';
import BarChart from './BarChart';
import AcademicRecords from './AcademicRecords';
import Calender from './Calender';
import Footer from './Footer';
import MissingGrade from './MissingGrade';
import ContactInstructor from './ContactInstructor';
import Faq from './Faq';


const Dashboard = ({logout}) => {
    const [page, setPage] = useState("Dashboard")
    const [notification, setNotification] = useState(1)
    const [missing, setMissing] = useState(2)
    const [grades, setGrades] = useState([])
    const [code, setCode] = useState([])
    return (
        <>
            <div className='Dashboard'>
                <div className='sidebar'>
                    <div className='navLinks'>
                        <div className="burger" onClick={() => {
                                document.querySelector(".sidebar").classList.toggle("click");
                            }}>
                                <FontAwesomeIcon className='Close' icon={faXmark} />
                                <FontAwesomeIcon className="bars" icon={faBars} />
                        </div>
                        <div className="dashboard-logo" title='Student Report'>
                            <div className="dashboard-logo-icon"><span>UG</span></div>
                            <div className="dashboard-logo-name"><span>Student Report</span></div>
                        </div>
                        <div className='user' title='Michael Bansah'>
                            <img src={require('../Images/profile.jpg')} alt='male profile'/>
                            <div className='username'>Hello,<br/> Michael Bansah</div>
                        </div>
                        <div className='horizontal-line'></div>
                        <div className={page === "Dashboard" ? "active nav-links": "nav-links"} title='Dashboard' onClick={(e)=>{
                            setPage("Dashboard")
                        }}>
                            <FontAwesomeIcon className="link-icon" icon={faGauge}/>
                            <div className='link-name'>Dashboard</div>
                        </div>
                        <div className={page === "gradeReport" ? "active nav-links": "nav-links"}onClick={()=>{
                            setPage("gradeReport")
                        }} title='Grade Report'>
                            <FontAwesomeIcon className="link-icon" title='Grade Report' icon={faSquarePollVertical}/>
                            <div className='link-name'>Grade Report</div>
                        </div>
                        <div className={page === "missingGrade" ? "active nav-links": "nav-links"} title='Missing Grade' onClick={()=>{
                            setPage("missingGrade")
                        }}>
                            <FontAwesomeIcon className="link-icon" icon={faFileExcel}/>
                            <div className='link-name'>Missing Grade</div>
                        </div>
                        <div className={page === "contactInstructor" ? "active nav-links": "nav-links"} title='Intructor Contact' onClick={()=>{
                            setPage("contactInstructor")
                        }}>
                            <FontAwesomeIcon className="link-icon" icon={faAddressBook}/>
                            <div className='link-name'>Instructor Contact</div>
                        </div>
                        <div className={page === "Faq" ? "active nav-links": "nav-links"} title='FAQ' onClick={()=>{
                            setPage("Faq")
                        }}>
                            <FontAwesomeIcon className="link-icon" icon={faCircleQuestion}/>
                            <div className='link-name'>FAQ</div>
                        </div>
                    </div>
                    <div className='nav-links non-active logout' onClick={()=> {
                        logout(false)
                    }}>
                        <FontAwesomeIcon className='link-icon' icon={faArrowRightFromBracket} flip="horizontal" />
                        <div className='link-name'><u>Log out</u></div>
                    </div>
                </div>
                <div className='dashboard-content'>
                    <div className='user-navbar navbar'>
                        <div className='greeting'>
                            <span>Welcome Back Michael 😊</span>
                            <span>Bsc. Computer Science</span>
                        </div>
                        <div className='notification-and-user'>
                            <div className='notification' onClick={() => {
                                document.querySelector(".notificationCard").classList.toggle("notificationToggle")
                            }}>
                                <FontAwesomeIcon className='bell' icon={faBell}/>
                                <div className='badge'><span>{notification}</span></div>
                            </div>
                        </div>
                        <div className='notificationCard'>
                            <span onClick={() => {setPage("missingGrade")}}>You have 2 missing grades</span>
                        </div>
                    </div>
                    {  
                        page === "gradeReport" ? <GradeReport/> : 
                        (
                          page === "missingGrade" ? <MissingGrade/> : 
                          (
                            page === "contactInstructor" ? <ContactInstructor/> :
                            (
                                page === "Faq" ? <Faq/> :
                                ( 
                                    page === "Dashboard" ?
                                        <div className='content-of-dashboard'>
                                            <div className='first-section flex-wrap d-flex'>
                                                <div className='card one'>
                                                    <div className='gpa-report'>3.67</div>
                                                    <div className='gpa-name d-flex justify-content-between'>
                                                        <div>Grade Point Average</div>
                                                        <div className='increase-decrease'>
                                                            <div>+0.68</div>
                                                            <div><FontAwesomeIcon className='arrowUp' icon={faArrowUp} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card two'>
                                                    <div className='missing-grade-number'>{missing}</div>
                                                    <div className='missing-grade-name'>Missing Grades</div>
                                                </div>
                                                <div className='card two'>
                                                    <div className='missing-grade-number'>6</div>
                                                    <div className='missing-grade-name'>Active course(s)</div>
                                                </div>
                                            </div>
                                            <div className='second-section'>
                                                <Calender/>
                                                <BarChart grades={grades} code={code}/>
                                            </div>
                                            <AcademicRecords setCodeValue={setCode} setGradeValue={setGrades}/>
                                        </div>
                                    : ""
                                )
                            )
                          ) 
                        )
                    }
                    <div className='footer'>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Dashboard;