import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard() {
 return (
    <div style={{ backgroundColor: 'greenyellow', height: '700px'}}>
        <Navbar/>
     <u> <h1>Student Dashboard</h1></u>
     <u><h2>LEVEL 200</h2></u>
     <u><h2>STUDENT ID:11135953</h2></u>
      <table>
        <thead>
          <tr>
            <th><u>Course</u></th>
            <th><u>Grade</u></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DCIT 201</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 203</td>
            <td>B</td>
          </tr>
          <tr>
            <td>DCIT 205</td>
            <td>C</td>
          </tr>
          <tr>
            <td>DCIT 207</td>
            <td>C</td>
          </tr><tr>
            <td>DCIT 209</td>
            <td>C</td>
          </tr><tr>
            <td>CBAS 210</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
      <h3><u>Alerts</u></h3>
      <p>You have not submitted a grade for CBAS 210. Please submit your grade to avoid any penalties.</p>
      <Footer/>
    </div>
 )
}