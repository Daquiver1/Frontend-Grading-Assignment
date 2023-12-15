import React from "react";
import SideBar from "./SideBar";
import DashNav from "./DashNav";
import Table from 'react-bootstrap/Table';
import './ContactInstructor.css';



const ContactInstructor = () =>{
    return(
        <>
        <div className='container-fluid bg-secondary min-vh-100 sidebarContainer'>
                <div className='row'>
                    <div className='col-2 bg-white vh-100'>
         <SideBar />
         </div>
         <div className='col-10'>
       <div className='px-3 overview'>
       <DashNav />
       </div>
       <div className="tableDiv">
        <p className="titleOfPage">Instructor Contact Page</p>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Instructor Name</th>
          <th>Office Location</th>
          <th>Email</th>
          <th>contact Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dwumfour Abdullai Abdul-Aziz</td>
          <td>Room CS5, Comp Sci. dept., RIPS building.</td>
          <td>adwumfour@ug.edu.gh</td>
          <td>0260541219</td>
        </tr>
        <tr>
          <td>Dr Joseph Ansong</td>
          <td>Room 12, Mathematics Department</td>
          <td>jkansong@ug.edu.gh</td>
          <td>0278210325</td>
        </tr>
        <tr>
          <td>Prof. B.F. Sehba (BS)</td>
          <td>Room 21, Mathematics Department</td>
          <td>bfsehba@ug.edu.gh</td>
          <td>0542976123</td>
        </tr>
        <tr>
          <td>Mr. E. Djabang (ED)</td>
          <td>Room 24, Mathematics Department</td>
          <td>edjabang@ug.edu.gh</td>
          <td>0552876173</td>
        </tr>
        <tr>
          <td>Mr. Mark Atta Mensah</td>
          <td>2nd Room, Dept. of Comp. Sci., RIPS Building</td>
          <td>mamensah@ug.edu.gh</td>
          <td>0208603871</td>
        </tr>
      </tbody>
    </Table>
                </div>

       </div>
       </div>

                </div>
        </>
    )
}

export default ContactInstructor;