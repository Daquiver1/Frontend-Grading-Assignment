import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Gradesideeye from '../Components/Gradesideeye'


const GradeReport = () => {

  return (
    <>
     <Navbar/>

    <div className="max-w-6xl mx-auto pt-40 pb-10 px-4">
      <div className='text-red-700 text-[1.2rem] font-semibold'>NB: Missing grade courses are displayed in red</div>
      <br/>
      <br/>
      <br/>

      {/* Level 100 */}
      <hr/>
      <div className="mb-3 group" >

      <label htmlFor="level100" className="hover:bg-gray-100 block px-5 py-3 cursor-pointer text-xl font-bold mb-1 ml-36">
          Level 100
        </label>
        
        {/* <div className="transition-all duration-300 max-h-0 overflow-hidden "> */}
        <div className='hidden group-hover:block transition-all duration-1000 ease-in-out'>
          <hr/>
          <h2 className=" text-xl font-bold ml-36">Semester 1</h2>
          <ul className=" text-base ml-36 mb-5">
            <li>UGRC 150 - Critical Thinking and Practical Reasoning - A</li>
            <li>MATH 121 - Algebra and Trigonometry - B+</li>
            <li>MATH 123 - Vectors and Geometry - B</li>
            <li>DCIT 101 - Introduction to Computer Science - A</li>
            <li>DCIT 103 - Office Productivity Tools - A</li>
            <li>STAT 111 - Introduction to Statistics and Probability I- A</li>
          </ul>

          <h2 className="text-xl font-bold ml-36">Semester 2</h2>
          <ul className="text-base ml-36">
            <li>UGRC 110 - Academic Writing I - A</li>
            <li>MATH 122 - Calculus I - B</li>
            <li>MATH 126 - Algebra and Geometry - C+</li>
            <li>STAT 112 - Introduction to Statistics and Probability II - A</li>
            <li>DCIT 104 - Programming - B</li>
            <li>DCIT 102 - Computer Hardware Fund. and Circuits- B+</li>
          </ul>
        </div>
      

      <hr/>
      </div>

      {/* Level 200 */}
      <div className="mb-3 group">
        
        <label className="hover:bg-gray-100 block px-5 py-3 cursor-pointer text-xl font-bold mb-1 ml-36" >
          Level 200
        </label>

        <div className="hidden group-hover:block transition-all duration-1000 ease-in-out">
          <hr/>
          <h2 className="text-xl font-bold ml-36">First Semester</h2>
          <ul className="text-base ml-36 mb-5">
            <li>UGRC 210 - Academic Writing II - A</li>
            <li className='text-red-700'>DCIT 201 - Programming I -</li>
            <li className='text-red-700'>DCIT 203 - Digital and Logic Systems Design -</li>
            <li className='text-red-700'>DCIT 205 - Multi Media and Web Design -</li>
            <li>DCIT 207 - Computer Architecture & Organisation - B+</li>
            <li className='text-red-700'>MATH 223 - Calculus II -</li>
          </ul>

          <h2 className="text-xl font-bold ml-36">Second Semester</h2>
          <ul className="text-base ml-36">
            <li>UGRC 220 - Introduction to African Studies</li>
            <li>DCIT 202 - Mobile Application Development</li>
            <li>DCIT 204 - Data Structures & Algorithm I</li>
            <li>DCIT 206 - Systems Administration</li>
            <li>DCIT 208 - Software Engineering</li>
            <li>DCIT 212 - Numerical and Computational Methods</li>
          </ul>
        </div>
      </div>

      <hr/>

      {/* Level 300 */}
      <div className="mb-5 group">
        
        <label className="hover:bg-gray-100 block px-5 py-3 cursor-pointer text-xl font-bold mb-1 ml-36" >
          Level 300
        </label>

        <div className="hidden group-hover:block transition-all duration-1000 ease-in-out">
          <hr/>
          <ul className="text-base ml-36 mb-5">
            <li>No courses taken yet</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Level 400 */}
      <div className="mb-5 group">
        
        <label className="hover:bg-gray-100 block px-5 py-3 cursor-pointer text-xl font-bold mb-1 ml-36">
          Level 400
        </label>

        <div className="hidden group-hover:block transition-all duration-1000 ease-in-out">
          <hr/>
          <ul className="text-base ml-36 mb-5">
            <li>No courses taken yet</li>
          </ul> 
        </div>
      </div>

      <hr />
    </div>


    <Gradesideeye/>


    <Footer/>
    
  </>
  )
}

export default GradeReport