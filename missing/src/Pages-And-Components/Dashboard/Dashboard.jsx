import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import Navbar from '../Navigation-Bar/navbar';
import Footer from '../Footer/Footer';

const Dashboard = () => {
    const [grades, setGrades] =useState([]);
    const [userData, setUserData] = useState({
      studentName: 'Keziah Nana Arthur',
      programOffering:'Bsc Information Technology', 
      level: '200',
      studentId: '11091047',
       missingGradesCount: 2,
      })
        
  const mockGradesData = [
    // ... your mock data
  ];

  useEffect(() => {
    setGrades(mockGradesData);
  }, [mockGradesData]);

   
   
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
      <h1><u>Grades Dashboard</u></h1>

      <section id='level100-section'>
       <div>
         <h3>Academic Year: 2022/2023</h3>
       </div>
      </section>
      <div className='level100-div'>
        <div>
          <h4>First semester</h4>
          <table className='semester-table'cellSpacing={20}>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grades</th>
            </tr>
            {grades.map((grade, index) => (
            <tr key={index} className={grade.grade === 'N/A' ? 'blinking-red' : ''}>
             <td>{grade.course}</td>
             <td>{grade.courseTitle}</td>
             <td>{grade.grade === 'N/A' ? <span className="missing-grade">N/A</span> : grade.grade}</td>
            </tr>
           ))}
            <tr>
              <td>DCIT 101</td>
              <td>Introduction to Computer Science</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>DCIT 103</td>
              <td>Office Productivity Tools</td>
              <td>B</td>
            </tr>
            <tr>
              <td>DCIT 105</td>
              <td>Maths For IT Professionals</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>ECON 101</td>
              <td>Introduction to Economics I</td>
              <td>D</td>
            </tr>
            <tr>
              <td>STAT 111</td>
              <td>Introduction to Statistics I</td>
              <td>D+</td>
            </tr>
            <tr>
              <td>UGRC 110</td>
              <td>Academic Writing I</td>
              <td>N/A</td>
            </tr>
          </table>
        </div>
        <div>
          <h4>Second semester</h4>
          <table className='semester-table'cellSpacing={20}>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grades</th>
            </tr>
            <tr>
              <td>DCIT 102</td>
              <td>Computer Hardware Fundamentals And Circuits</td>
              <td>C</td>
            </tr>
            <tr>
              <td>DCIT 104</td>
              <td>Programming Fundamentals</td>
              <td>A</td>
            </tr>
            <tr>
              <td>ECON 102</td>
              <td>Introduction to Economics II</td>
              <td>B</td>
            </tr>
            <tr>
              <td>MATH 122</td>
              <td>Calculus I</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>STAT 112</td>
              <td>Introduction to Statistics II</td>
              <td>D</td>
            </tr>
            <tr>
              <td>UGRC 150</td>
              <td>Computer Hardware Fundamentals And Circuits</td>
              <td>C</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    < Footer />
    </div>
    
     
  );
};

export default Dashboard;