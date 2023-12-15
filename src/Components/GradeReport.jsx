import propTypes from 'prop-types';
import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { Dashboard } from '../Components/Dashboard';
import { Instructor } from '../Components/Instructor';
import { MissingGrade } from '../Components/Missinggrade';
import '../Pagestyles/Footer.css';
import '../Pagestyles/GradeReport.css';
import '../Pagestyles/Homepage.css';
import { Bars } from './Bars';
import { Footer } from "./Footer";
import { Homepage } from './Homepage';


export const Report = () => {
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedSemester, setSelectedSemester] = useState('All');

    const levelArray = [100, 200];
    const semesterArray = ['First Semester', 'Second Semester'];

    const gradeData = [
        {grade : 'A', course: 'Introduction to computer science', level: 100, semester: 'First Semester' },
        {grade : 'A', course: 'Math for IT professionals', level: 100, semester: 'Second Semester' },
        {grade : 'A', course: 'Microsoft office', level: 100, semester: 'First Semester' },
        {grade : 'A', course: 'Statistics', level: 200, semester: 'Second Semester' },
        {grade : 'A', course: 'Web-design', level: 200, semester: 'Second Semester' },
        {grade : 'A', course: 'Programming', level: 200, semester: 'Second Semester' },
        {grade : 'A', course: 'E-business', level: 200, semester: 'Second Semester' },
    ];

    const filteredGradeData = gradeData.filter((data) => (
        (selectedLevel === "All" || data.level === parseInt(selectedLevel)) &&
        (selectedSemester === "All" || data.semester === selectedSemester)
    ));
    const navlinks = [
            {reference:'home', link:'Home'},
            { reference: 'login', id: 1, link: 'login' },
            { reference: 'dashboard', id: 2, link: 'Dashboard' },
            { reference: 'report', id: 3, link: 'Grade report' },
            { reference: 'report', id: 4, link: 'Missing grade' },
            { reference: 'instructor', id: 5, link: 'Instructor' },
            { reference: 'Faqs', id: 6, link: 'Help and support' },
          
        ]
        const [currentpage, setCurrentPage] = useState('current');
        const renderComponent = () => {
          switch (currentpage) {
            case 'current':
            return <Realreport />
            case 'home':  
              return <Homepage />;
            case 'dashboard':
              return <Dashboard />;
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

        const Realreport = () => {
            return(
                <div className="containerr">
            <nav className="navvv">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={40} width={160} />
            <div className="nnavlinks">
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


            {/* <div className="studentinfo">
                <section className="gap">
                    GPA : 3.85
                </section>
                <section className="accessinfo">
                    <p>ID:11245893</p><span> Email : webkat@48570.ug.gh</span>
                </section>
                <section className="totalcourses">
                    totalcourses:5
                </section>
            </div> */}

            <div className="level level1">
                <label htmlFor="">Filter by level:</label>
                <select name="" id="" onChange={(e) => setSelectedLevel(e.target.value)}>
                    <option value="All">All</option>
                    {levelArray.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="level level2">
                <label htmlFor="">Filter by Semester:</label>
                <select name="" id="" onChange={(e) => setSelectedSemester(e.target.value)}>
                    <option value="All">All</option>
                    {semesterArray.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <table className="tablee">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Level</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredGradeData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.course}</td>
                            <td>{data.grade}</td>
                            <td>{data.level}</td> 
                            <td>{data.semester}</td>
                            
                        </tr>
                        
                    ))}
                </tbody>
            </table>

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
Report.propTypes = {
    setCurrentPage: propTypes.func,
  };
