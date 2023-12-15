import React from 'react'

//This component is used to display grades and their credits which are used to calculate a student's GPA

const Gradesideeye = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  ">
        <div className='ml-[10rem]'>
          <h1 className='text-2xl font-semibold ml-[2rem] text-gray-700'>Grade Credits</h1>

        <table className="w-[20rem] m-5">
          <thead className="border-b border-gray-200">
            <tr>
              <td className="p-2 font-semibold">Grade</td>
              <td className="p-2 font-semibold">Credits</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-2">A</td>
              <td className="p-2">12</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">B+</td>
              <td className="p-2">10.5</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">B</td>
              <td className="p-2">9</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2">C+</td>
              <td className="p-2"> 7.5</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">C</td>
              <td className="p-2">6</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">D+</td>
              <td className="p-2">4.5</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2"> D</td>
              <td className="p-2">3</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">E</td>
              <td className="p-2">1.5</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2">F</td>
              <td className="p-2">0</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
  )
}

export default Gradesideeye

