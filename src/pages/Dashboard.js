import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className='main-dashboard'>
      <h1>Welcome, Theoford Nana Gyanfosu</h1>


        <h2>Previous Courses</h2>
      
        <table className='table-col'>
        <tr>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT</th>
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




      <span className='alert'>ALERT!!: You have missing grades for these courses: (MATH 121 and UGRC 110). Please report it by visiting the <Link to = "/missingGrade" >MISSING GRADE</Link> page if you have not reported it already.</span>


      <h2>Current Courses</h2>
      <table className='table-col'>
        <tr>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT</th>
        </tr>

        <tr>
            <td>DCIT 101</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>DCIT 103</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
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
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>STAT 111</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
        </tr>

        <tr>
            <td>UGRC 110</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </table>
    

    <div>
            <h2>Tips for Academic Success</h2>
        <div className='tips-grade'>
            <div className='tips-code'>
                <h2>1. Check for Missing Grades:</h2>
                <p>Regularly check your dashboard for any missing grades. If you notice any discrepancies, use the Missing Grade Form to report them. </p>

                <h2>2. Stay Informed:</h2>
                <p>Stay informed about course announcements, updates, and any changes in the syllabus. Check your notifications regularly.</p>
            </div>

            <div className='tips-code'>
                <h2>3. Utilize Office Hours:</h2>
                <p>If you have questions or concerns about your grades, take advantage of your instructor's office hours. It is an opportunity to get clarification and feedback.</p>

                <h2>4. Plan Ahead:</h2>
                <p>Plan your study schedule in advance, and make sure to submit assignments and projects on time. Avoid last-minute rushes.</p>
            </div>
        </div>
    </div>

    </section>

  )
}

export default Dashboard;