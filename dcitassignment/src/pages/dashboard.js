import React from 'react'
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div>
      <div className='dashheader'>END OF SECOND SEMESTER RESULTS</div>
    <div className='dashboardmaindiv'>
      
      <div>
        <p className='coursetopic'><h2>COURSE CODE</h2></p>
        <p>DCIT104</p>
        <p>DCIT102</p>
        <p>MATHS122</p>
        <p>MATHS126</p>
        <p>STATS112</p>
        <p>UGRC150</p>
      </div>
      <div>
        <p className='coursetopic'><h2>COURSE NAME</h2></p>
        <p>PROGRAMMING FUNDAMENTALS</p>
        <p>COMPUTER HARDWARE FUNDAMENTALS</p>
        <p>CALCULUS I</p>
        <p>ALGEBRA AND GEOMETRY</p>
        <p>STATISTICS AND PROBABILITY II</p>
        <p>CRITICAL THINKING AND PRACTICAL REASONING</p>
      </div>
      <div>
        <p className='coursetopic'><h2>CREDITS</h2></p>
        <p>3 credits</p>
        <p>3 credits</p>
        <p>3 credits</p>
        <p>3 credits</p>
        <p>3 credits</p>
        <p>3 credits</p>
        </div>
      
      </div>
      <div className='totalcredits'>Total credits: 18credits</div>
      </div>
  )
}

export default Dashboard