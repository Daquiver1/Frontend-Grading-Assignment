import React from 'react'
import './GradeReport.css'

const GradeReport = () => {
  return (
    <section className='tablerow'>

    <h3>2022/2023 Academic Year</h3>
    <h4 className = 'chead'>First Semester</h4>
    <table className='table'>
        <tr id='header'>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT = 3.95</th>
        </tr>

        <tr>
            <td>DCIT 101</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>DCIT 103</td>
            <td>3</td>
            <td>B+</td>
            <td>10.5</td>
        </tr>

        <tr>
            <td>MATH 121</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>MATH 123</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>STAT 111</td>
            <td>2</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>UGRC 110</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </table>


    <h4 className = 'chead'>Second Semester</h4>
    <table className='table'>
        <tr id='header'>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT = 3.90</th>
        </tr>

        <tr>
            <td>DCIT 102</td>
            <td>3</td>
            <td>B</td>
            <td>9</td>
        </tr>

        <tr>
            <td>DCIT 104</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>MATH 122</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>MATH 126</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>STAT 112</td>
            <td>2</td>
            <td>A</td>
            <td>12</td>
        </tr>

        <tr>
            <td>UGRC 150</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>
    </table>
  


    <h3>2023/2024 Academic Year</h3>
    <h4 className = 'chead'>First Semester</h4>
    
    <table className='table'>
        <tr id='header'>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT</th>
        </tr>

        <tr>
            <td>DCIT 201</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 203</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 205</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>MATH 223</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 207</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>CBAS 210</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </table>



    <h4 className = 'chead'>Second Semester</h4>
    <table className='table'>
        <tr id='header'>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT</th>
        </tr>

        <tr>
            <td>DCIT 202</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 204</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 206</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 209</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 208</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>UGRC 110</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </table>


    


    </section>
  )
}

export default GradeReport;