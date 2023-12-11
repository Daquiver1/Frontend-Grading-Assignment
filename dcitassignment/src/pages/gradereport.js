import React from 'react'
import '../styles/gradereport.css';

function Gradereport() {
  return (
    <div className='gradereportmaindiv'>
      <div className='header1'>Level 100:</div>
      <div className='header1'>Semester 1:</div>
      <div className='semester1courses'>
        <div className='coursecodes'>
          <p><h2>COURSE CODE</h2></p>
          <p>DCIT101</p>
          <p>DCIT103</p>
          <p>MATHS123</p>
          <p>MATHS121</p>
          <p>STATS111</p>
          <p>UGRC110</p>
          </div>
          <div className='coursename'>
            <p><h2>COURSE NAME</h2></p>
            <p>INTRODUCTION TO COMPUTER SCIENCE</p>
            <p>OFFICE PRODUCTIVITY TOOLS</p>
            <p>VECTORS AND GEOMETRY</p>
            <p>ALGEBRA AND TRIGONOMETRY</p>
            <p>INTRODUCTION TO STATISTICS AND PROBABILITY I</p>
            <p>ACADEMIC WRITING I</p>
          </div>
          <div className='coursegrade'>
            <p><h2>GRADE</h2></p>
            <p>A</p>
            <p>A</p>
            <p>D</p>
            <p>D</p>
            <p>A</p>
            <p>B+</p>
        </div>
      </div>
                <div className='header2'>Semester 2:</div>
            <div className='secondsemcourses2'>
              <div className='coursecodes2'>
                <p><h2>COURSE CODE</h2></p>
                <p>DCIT102</p>
                <p>DCIT104</p>
                <p>MATHS126</p>
                <p>MATHS122</p>
                <p>STATS112</p>
                <p>UGRC150</p>
              </div>
              <div className='coursename2'>
                <p><h2>COURSE NAME</h2></p>
                <p>HARDWARE FUNDAMENTALS</p>
                <p>PROGRAMMING FUNDAMENTALS</p>
                <p>ALGEBRA AND GEOMETRY</p>
                <p>CALCULUS I</p>
                <p>INTRODUCTION TO STATISTICS AND PROBABILITY I</p>
                <p>CRITICAL THINKING AND PRACTICAL REASONING</p>
              </div>
              <div className='grade2'>
                <p><h2>GRADE</h2></p>
                <p>A</p>
                <p>B+</p>
                <p>B</p>
                <p>B</p>
                <p>A</p>
                <p>A</p>
              </div>
            </div>

    </div>
  )
}

export default Gradereport