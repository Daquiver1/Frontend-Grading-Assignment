import React from 'react'

const CurrentGrades = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center">
        <div className='ml-[41rem]'>
          <h1 className='text-2xl font-semibold ml-[1rem] text-gray-700'>Current Grades - Level 100, Semester 2</h1>

        <table className="w-[20rem] m-5">
          <thead className="border-b border-gray-200">
            <tr>
              <td className="p-2 font-semibold">Course</td>
              <td className="p-2 font-semibold">Grade</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-2">UGRC 110 - Academic Writing I </td>
              <td className="p-2">A</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">MATH 122 - Calculus I </td>
              <td className="p-2">B</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">MATH 126 - Algebra and Geometry</td>
              <td className="p-2">C+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">STAT 112 - Introduction to Statistics and Probability II</td>
              <td className="p-2"> A </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">DCIT 104 - Programming</td>
              <td className="p-2">B</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">DCIT 102 - Computer Hardware Fundamentals and Circuits</td>
              <td className="p-2">B+</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <div className="ml-[1rem] mt-[-33rem] md:ml-0 md:order-first">
        <img
          src={require('../assets/Grades-pana.png')} 
          alt="Image Alt Text"
          className="rounded-full object-cover w-[50%] max-w-none h-auto "
        />
      </div>

    </div>
  )
}

export default CurrentGrades

