import propTypes from 'prop-types';
import { useState } from "react";
import { FaTimes, FaUser } from 'react-icons/fa';
import { Instructor } from '../Components/Instructor';
import { MissingGrade } from '../Components/Missinggrade';
import '../Pagestyles/Dashboard.css';
import '../Pagestyles/Footer.css';
import '../Pagestyles/Homepage.css';
import { Bars } from "./Bars";
import { Footer } from "./Footer";
import { Report } from './GradeReport';
import { Homepage } from './Homepage';

export const Dashboard = () => {
    const [currentpage, setCurrentPage] = useState('dashboard');
    // const [selectedLevel, setSelectedLevel] = useState('All');
    // const [selectedSemester, setSelectedSemester] = useState('All');

    // const levelArray = [100, 200];
    // const semesterArray = ['First Semester', 'Second Semester'];

    const gradeData = [
        {grade : 'A', course: 'Introduction to computer science', level: 100, semester: 'First Semester' },
        {grade : 'A', course: 'Math for IT professionals', level: 100, semester: 'Second Semester' },
        {grade : 'A', course: 'Microsoft office', level: 100, semester: 'First Semester' },
        {grade : '', course: 'Statistics', level: 200, semester: 'Second Semester' },
        {grade : 'B+', course: 'Web-design', level: 200, semester: 'Second Semester' },
        {grade : '', course: 'Programming', level: 200, semester: 'Second Semester' },
        {grade : 'B+', course: 'E-business', level: 200, semester: 'Second Semester' },
        {grade : 'A', course: 'E-business', level: 3000, semester: 'Second Semester' },
        {grade : 'B+', course: 'Networking', level: 300, semester: 'Second Semester' },
        {grade : 'A', course: 'Databases', level: 200, semester: 'Second Semester' },
        {grade : 'B', course: 'Computer organization', level: 3000, semester: 'Second Semester' },
    ];

    // const filteredGradeData = gradeData.filter((data) => (
    //     (selectedLevel === "All" || data.level === parseInt(selectedLevel)) &&
    //     (selectedSemester === "All" || data.semester === selectedSemester)
    // ));
    const navlinks = [
        { reference: 'home', id: 1, link: 'Home' },
        { reference: 'dashboard', id: 3, link: 'Dashboard' },
        { reference: 'current', id: 7, link: 'Current Report' },
        { reference: 'report', id: 4, link: 'Missing grade' },
        { reference: 'instructor', id: 5, link: 'Instructor' },
        { reference: 'Faqs', id: 6, link: 'Help and support' },
    ]
   
  const renderComponent = () => {
    switch (currentpage) {
      case 'home':  
        return <Homepage />;
        case 'current':
            return <Report />
      case 'dashboard':
        return <Realdash />;
      case 'report':
        return <MissingGrade />;
      case 'instructor':
        return <Instructor />;
      case 'Faqs':
        return <Bars />;
      default:
        return '';
    }
  };    

    const Realdash = () => {
        return(
            <div className="containerr">
            <nav className="dashboard-nav">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={40} width={160} />
            <div className="dash-navlinks">
                <ul>
                    {navlinks.map(link => (<li key={link.id}><a href=""
                    onClick={(e) => { e.preventDefault(); setCurrentPage(link.reference); }}
                    >{link.link}</a></li>))}
                    <div className="user">
                    <FaUser color='white' />
                  </div>
                </ul>
            </div>
            </nav>


            <div className="studentinfo">
                <section className="gap">
                    GPA : 3.85
                </section>
                <section className="accessinfo">
                    <p>ID:11245893</p><span> Email : webkat@48570.ug.gh</span>
                </section>
                <section className="totalcourses">
                    totalcourses:5
                </section>
               
            </div>

            {/* <div className="level">
                <label htmlFor="">Filter by level:</label>
                <select name="" id="" onChange={(e) => setSelectedLevel(e.target.value)}>
                    <option value="All">All</option>
                    {levelArray.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="level">
                <label htmlFor="">Filter by Semester:</label>
                <select name="" id="" onChange={(e) => setSelectedSemester(e.target.value)}>
                    <option value="All">All</option>
                    {semesterArray.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div> */}

           <div className="table-alerts">
           <table className="table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Level</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {gradeData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.course}</td>
                            <td>{data.grade}</td>
                            <td>{data.level}</td> 
                            <td>{data.semester}</td>
                            
                        </tr>
                        
                    ))}
                </tbody>
            </table>

            <div className='talerts'>
              <section style={{backgroundColor:'rgb(247, 195, 195)', color:'white'}}><strong>Missing grades !!</strong></section>
              <section>Statistics <FaTimes color='red'/></section>
              <section>Programming <FaTimes color='red'/></section>
              <button>Report missing grade</button>
            </div>
           </div>

            <Footer />
        </div>
        )
    }
    return (
       <>
       {renderComponent()}
       </>
    );
};
Dashboard.propTypes = {
    setCurrentPage:propTypes.func,
}