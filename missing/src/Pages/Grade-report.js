import Sidebar from '../Components/Sidebar';

import React, { useState } from 'react';

function GradeReport() {
    const [semesterFilter, setSemesterFilter] = useState('');
    const result = [
        {
          date: "First Semester",
          dateTime: "Level 100",
          student: [
            {
              id: 1,
              courseName: "Web Design Development",
              courseCode: "DCIT 205",
              score: "E",
              grade: "1.0",
            },
            {
              id: 2,
              courseName: "Web Design Development",
              courseCode: "DCIT 205",
              score: "E",
              grade: "1.0",
            },
            {
              id: 3,
              courseName: "Web Design Development",
              courseCode: "DCIT 205",
              score: "E",
              grade: "1.0",
            },
          ],
        },
        // Row 2
    {
        date: "Second Semester",
        dateTime: "Level 100",
        student: [
          {
            id: 4,
            courseName: "Database Management",
            courseCode: "DCIT 210",
            score: "A",
            grade: "4.0",
          },
          {
            id: 5,
            courseName: "Database Management",
            courseCode: "DCIT 210",
            score: "A",
            grade: "4.0",
          },
          {
            id: 6,
            courseName: "Database Management",
            courseCode: "DCIT 210",
            score: "A",
            grade: "4.0",
          },
        ],
      },
      {
        date: "First Semester",
        dateTime: "Level 200",
        student: [
          {
            id: 1,
            courseName: "Web Design Development",
            courseCode: "DCIT 205",
            score: "E",
            grade: "1.0",
          },
          {
            id: 2,
            courseName: "Web Design Development",
            courseCode: "DCIT 205",
            score: "E",
            grade: "1.0",
          },
          {
            id: 3,
            courseName: "Web Design Development",
            courseCode: "DCIT 205",
            score: "E",
            grade: "1.0",
          },
        ],
      },
      // Row 2
  {
      date: "Second Semester",
      dateTime: "Level 200",
      student: [
        {
          id: 4,
          courseName: "Database Management",
          courseCode: "DCIT 210",
          score: "A",
          grade: "4.0",
        },
        {
          id: 5,
          courseName: "Database Management",
          courseCode: "DCIT 210",
          score: "A",
          grade: "4.0",
        },
        {
          id: 6,
          courseName: "Database Management",
          courseCode: "DCIT 210",
          score: "A",
          grade: "4.0",
        },
      ],
    },
      ];

    const filteredresult = result.filter((semester) =>
      semester.date.toLowerCase().includes(semesterFilter.toLowerCase())
    );
    

  return (
    <div>
    <Sidebar />
    <div className="p-4 sm:ml-64">
            
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-50">
                <div className=" flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700">Filter by Semester:</label>
                    <input
                    type="text"
                    value={semesterFilter}
                    onChange={(e) => setSemesterFilter(e.target.value)}
                    className="w-1/4 p-2 border rounded"
                    placeholder="Enter semester name"
                    />
                </div>
            <h1 className='font-bold text-right pr-10'>CGPA: 2.83</h1>
            {filteredresult.map((semester, index) => (
                <div key={index} className=" items-center mb-4 rounded">
                    
                        <div className='flex  items-center pb-4'>
                            <h2 className=' text-xl'>{semester.date}</h2>
                            <h3 className='text-yellow-800 mx-4'>{semester.dateTime}</h3>
                            </div>
                        
                        
                  <div className="flex">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" className="px-6 md:pr-96 py-3">
                                  Course Name 
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                  Course Code
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                    Score
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                     Grade
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {semester.student.map((result) => ( 
                              <tr key={result.id} className="bg-white border-b dark:bg-gray-200 dark:border-gray-100">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                                  {result.courseName}
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                  {result.courseCode}
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                  {result.score}
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                  {result.grade}
                                  </td>
                              </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>

                    
                </div>
                 ))}
            </div>
           
            </div>
    </div>
  )
}

export default GradeReport