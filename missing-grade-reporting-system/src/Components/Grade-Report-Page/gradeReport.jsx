import React, { useState, useEffect } from 'react';
import './gradeReport.css';
import { Link } from 'react-router-dom';
import GradesChart from './gradesChart.jsx';

import GradeReportNavBar from './gradeReportNavBar.jsx';
import UserInfo from '../User-Info/userInfo'; 
import Footer from '../Footer/footer';


const GradeReport = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  const gradeDistributionData1 = {
    labels: ['DCIT 101', 'DCIT 103', 'DCIT 105', 'STAT 111', 'ECON 101', 'UGRC 110'],
    values: [0, 84, 77, 88, 71, 0],
  };

  const gradeDistributionData2 = {
    labels: ['DCIT 102', 'DCIT 104', 'MATH 122', 'STAT 112', 'ECON 102', 'UGRC 150'],
    values: [70, 0, 77, 71, 88, 83, 80],
  };

  useEffect(() => {
    document.title = 'Grade Report Page';
  }, []);

  return (
    <div>
      <GradeReportNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />
      <section id='report-section1'>
        <div className='main-report-div'>
          <div>
            <h2>Missing Grades</h2>
            <p>Below are your missing grades.</p>
            <p>Find the link beside it to report to the instructor</p>
            <table cellSpacing={20}>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th> </th>
              </tr>
              <tr>
                <td>
                 <li>DCIT 101</li>
                </td>
                <td>
                  Introduction to Computer Science
                </td>
                <td>
                  <Link to="/missing-grade-form" className='link-color1'>Report Here</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <li>UGRC 110</li>
                </td>
                <td>
                 Academic Writing I
                </td>
                <td>
                  <Link to="/missing-grade-form" className='link-color1'>Report Here</Link>
                </td>
              </tr>
              <tr>
                <td>
                 <li>DCIT 104</li>
                </td>
                <td>
                  Programming Fundamentals
                </td>
                <td>
                  <Link to="/missing-grade-form" className='link-color1'>Report Here</Link>
               </td>
             </tr>
            </table>
          </div>

          <div className='note-div'>
            <h2>NOTE !!</h2>
            <p>Please do not report multiple times. Note that it could<br /> be that the instructor is busy or might not had time to <br />review all reported grades, It is therefore advised that you<br /> keep calm and wait for responds in your email.</p>
            <p>However if the issue persist from lets say <br />two week and yet no changes, it is required to report <br />to the department and find the instrutor's office <br />or schedule a meeting during his/her office hourse</p>
            <p>Also note that your exam paper might be under <br />review by the University's examination commitee</p>
          </div>

        </div>
        
      </section>
      <section id='grades-section'>  
        <div className='main-grades-div'>
          <h2>Available Grades</h2>
          <p>Find the link beside the course to raise concerns to the instructor for grades corrections</p>
          <div className='grades-div'>
            <div>
              <table cellSpacing={20}>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th> </th>
                </tr>
                <tr>
                  <td>
                    <li>DCIT 103</li>
                  </td>
                  <td>
                    Office Productivity Tools
                  </td>
                  <td>
                    <Link to="#" className='link-color2'>Raise Concern</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>DCIT 105</li>
                  </td>
                  <td>
                    Math For IT Proffessionals
                  </td>
                  <td>
                    <Link to="#" className='link-color2'>Raise Concern</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>STAT 111</li>
                  </td>
                  <td>
                    Introduction to Statistics I
                  </td>
                  <td>
                    <Link to="#" className='link-color2'>Raise Concern</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>ECON 101</li>
                  </td>
                  <td>
                    Introduction to Economics I	
                  </td>
                  <td>
                    <Link to="#" className='link-color2'>Raise Concern</Link>
                  </td>
                </tr>
            </table>
          </div>

          <div>
            <table cellSpacing={20}>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th> </th>
              </tr>
              <tr>
                <td>
                  <li>DCIT 102</li>
                </td>
                <td>
                  Introduction to Hardware & Circuit
                </td>
                <td>
                  <Link to="#" className='link-color2'>Raise Concern</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <li>MATH 122</li>
                </td>
                <td>
                  Calculus I
                </td>
                <td>
                  <Link to="#" className='link-color2'>Raise Concern</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <li>STAT 112</li>
                </td>
                <td>
                  Introduction to Statistics II
                </td>
                <td>
                  <Link to="#" className='link-color2'>Raise Concern</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <li>ECON 102</li>
                </td>
                <td>
                  Introduction to Economics II
                </td>
                <td>
                  <Link to="#" className='link-color2'>Raise Concern</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <li>UGRC 150</li>
                </td>
                <td>
                  Critical Thinking & Practical Reasoning
                </td>
                <td>
                  <Link to="#" className='link-color2'>Raise Concern</Link>
                </td>
              </tr>
            </table>
          </div>

          </div>
          
          
        </div>
        
      </section>

      <section id='report-section2'>
        <div>
          <h2>Cummulative Grades Report</h2>
        </div>
        <div className='div-graphs'>
          <div className='graph'>
            <h3>Semester 1</h3>
            <GradesChart data={gradeDistributionData1} />
          </div>
          <div className='graph'>
            <h3>Semester 2</h3>
            <GradesChart data={gradeDistributionData2} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GradeReport;