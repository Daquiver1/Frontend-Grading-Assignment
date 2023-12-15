import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function GradeReport() {
 return (     <div style={{ backgroundColor: 'gray', height: '800px'}}>
        <Navbar/>
      <u><h1>Student Grade Report</h1></u>
      <h2>Semester/Academic Year:2023/2024</h2>
      <u><h2>LEVEL 200</h2></u>
      <u><h2>STUDENT ID:11135953</h2></u>
      <table>
        <thead>
          <tr>
           <th><h2><u>Course</u></h2></th>
            <th><h2><u>Grade</u></h2></th>
            <th><h2><u>Credits</u></h2></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DCIT 201</td>
            <td>A</td>
            <td>2</td>
          </tr>
          <tr>
            <td>DCIT 203</td>
            <td>B</td>
            <td>3</td>
          </tr>
          <tr>
            <td>DCIT 205</td>
            <td>A</td>
            <td>3</td>
          </tr>
          <tr>
            <td>DCIT 207</td>
            <td>B</td>
            <td>3</td>
          </tr>
          <tr>
            <td>DCIT 209</td>
            <td>C</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CBAS 210</td>
            <td>C</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      <Footer/>
    </div>
 )
}