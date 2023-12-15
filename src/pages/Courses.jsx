import React from 'react'
import { data1 } from '../data/data'

function Courses() {
  const colors = {
    "A": "bg-green-500/70",
    "B": "bg-blue-700/70",
    "C": "bg-purple-700/70",
    "D" : "bg-red-700/90"
  }

  return (
    <div className='p-8'>
        <table className='w-full border-2 shadow-md overflow-hidden cursor-pointer'>
                <tr className='text-white bg-blue-700 shadow-md'>
                    <td className='p-2 px-4'><input type="checkbox" /></td>
                    <td className='font-bold text-lg p-2 px-4'>Course Code</td>
                    <td className='font-bold text-lg p-2 px-4'>Course Name</td>
                    <td className='font-bold text-lg p-2 px-4'>Year</td>
                    <td className='font-bold text-lg p-2 px-4'>Semester</td>
                    <td className='font-bold text-lg p-2 px-4'>Grade</td>
                </tr>
            {
                data1.map((data, index) => (
                    <tr key={index} className='hover:bg-[#0000001a]'>
                        <td className='border-b p-4'><input type="checkbox" /></td>
                        <td className='border-b p-4 '>{data.courseCode}</td>
                        <td className='border-b p-4 text-green-500'>{data.courseName}</td>
                        <td className='border-b p-4'><p className='w-2/3 text-center shadow-sm rounded p-1 border'>L {data.year}</p></td>
                        <td className='border-b p-4'><p className={'w-2/3 text-center shadow-sm rounded p-1 border'}>{data.semester}</p></td>
                        <td className='border-b p-4'><p className={'w-2/3 text-center shadow-sm rounded p-1 border text-white ' + `${colors[data.grade[0]]}`}>{data.grade}</p></td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default Courses
