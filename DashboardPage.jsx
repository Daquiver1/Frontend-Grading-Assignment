import React from "react";
import Header from './Header'
import Footer from './Footer'

function DashboardPage(){
    return(
        <>
        <Header></Header>
        <div className="dashboard1">
            <h2>
                DASHBORD
            </h2>
        </div>
        <div  className="dash-container1">
        <div>
            <p className="dashboard2">
                <strong>Student ID</strong>: 11259930
            </p>
            <p className="dashboard3">
                <strong>Student Name:</strong> OCRAN-STILES RACHEAL NSAAH
            </p>
            </div>
        <div>
            <p className="dashboard4">
               <strong>Date of Birth:</strong> 01-MAR-05
            </p>
            <p className="dashboard5">
                <strong>Sex:</strong> Female
            </p>
            <p className="dashboard6">
                <strong>Date Printed:</strong>12/15/2023
            </p>
        </div>
        </div> <hr />
        <div className="dash-container2">
            <div>
                <h4 className="dashboard7">
                    ACADEMIC YEAR: 2023/2024
                </h4>
            </div>
            <div>
                <h4 className="dashboard8">FIRST SEMESTER</h4>
            </div>
            <div>
                <h4 className="dashboard9">CCT:</h4>
            </div>
            <div>
                <h4 className="dashboard10">CCP:</h4>
            </div>
            <div>
                <h4 className="dashboard11">CGPA:</h4>
            </div>
        </div> <hr />
        <div className="table-container">
        <table>
        <tr>
          <th>CODE</th>
          <th>COURSE TITLE</th>
          <th>CREDIT</th>
          <th>GRADE</th>
          <th>GPT</th>
        </tr>

      <tbody>
        <tr>
          <td>CBAS201</td>
          <td>ACADEMIC WRITING II</td>
          <td>3</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>DCIT201</td>
          <td>PROGRAMMING I</td>
          <td>2</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>DCIT203</td>
          <td>DIGITAL AND LOGICAL SYSTEMS DESIGN</td>
          <td>3</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>DCIT205</td>
          <td>MULTI MEDIA AND WEB DESIGN</td>
          <td>3</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>DCIT207</td>
          <td>COMPUTER ORGANIZATION & ARCHITECTURE</td>
          <td>3</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>MATH223</td>
          <td>Calculus II</td>
          <td>3</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table> 
    </div>
        <div className="missing-grades-alert">
          <p>You have missing grades. Please check the Grade Report Page for details.</p>
        </div>
        <Footer></Footer>
        </>
    );
}




export default DashboardPage




