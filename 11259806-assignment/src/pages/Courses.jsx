import React, { useEffect, useState } from 'react'
import { data1 } from '../data/data'

function Courses() {
  const [data,setData] = useState([])
  const [filt,setFilt] = useState(0)

  const colors = {
    "A": "bg-green-500/70",
    "B": "bg-blue-700/70",
    "C": "bg-purple-700/70",
    "D" : "bg-red-700/90"
  }

  useEffect(() => {
    if(filt == "0"){
      setData(data1)
    }else{
      setData(
        data1.filter((data) => data.semester  === Number(filt) || data.year === Number(filt)) 
       )
    }
  },[filt])

  
  return (
    <div className='md:p-8'>
        <table className='w-full border-2 shadow-md overflow-hidden cursor-pointer'>
                <tr className='text-white bg-blue-700 shadow-md'>
                    <td className='p-2 md:px-4'><input type="checkbox" /></td>
                    <td className='font-bold text-[10px] md:text-lg p-2 md:px-4'>Course Code</td>
                    <td className='font-bold text-[10px] md:text-lg p-2 md:px-4'>Course Name</td>
                    <td>
                    <select className='text-white bg-inherit border-none outline-none' value={filt} onChange={(e)=> setFilt(e.target.value)}>
                        <option className='text-black' value="0">Year</option>
                        <option className='text-black' value="100">Level 100</option>
                        <option className='text-black' value="200">Level 200</option>
                    </select>
                    </td>
                    <td className='font-bold text-[10px] md:text-lg p-2 md:px-4'>
                      <select className='text-white bg-inherit border-none outline-none' value={filt} onChange={(e)=> setFilt(e.target.value)}>
                        <option className='text-black' value="0">Semester</option>
                        <option className='text-black' value="1">Semester 1</option>
                        <option className='text-black' value="2">Semester 2</option>
                      </select>
                    </td>
                    <td className='font-bold text-[10px] md:text-lg p-2 md:px-4'>Grade</td>
                </tr>
            {
                data.map((data, index) => (
                    <tr key={index} className='hover:bg-[#0000001a]'>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4'><input type="checkbox" /></td>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4 '>{data.courseCode}</td>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4 text-green-500'>{data.courseName}</td>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4'><p className='w-2/3 text-center shadow-sm rounded p-1 border'>{data.year}</p></td>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4'><p className={'w-2/3 text-center shadow-sm rounded p-1 border'}>{data.semester}</p></td>
                        <td className='border-b py-2 text-[10px] p-1 md:p-4'><p className={'w-2/3 text-center shadow-sm rounded p-1 border text-white ' + `${colors[data.grade[0]]}`}>{data.grade}</p></td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default Courses