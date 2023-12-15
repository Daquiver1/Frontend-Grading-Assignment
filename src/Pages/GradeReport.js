import SideBar from '../Components/SideBar';

import React, { useState } from 'react';

function GradeReport() {
    
  return (
    <div>
    <SideBar />
    <div className="p-4 sm:ml-64">
    <div>
      <div className='flex justify-between'>
      <h1 className='font-bold'>Grade Report</h1>
        <h2 className='my-4 pr-4'>CGPA:3.88</h2> 
      </div>
        
    </div>
      <div>

      <div className="flex">
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-blue-500">
              <tr>
                  <th scope="col" className="px-6 md:pr-96 py-3">
                      L100 Course
                  </th>
                  <th scope="col" className="px-6 pr-24 py-3">
                      Credit Hour
                  </th>
                  <th scope="col" className="px-6 pr-24 py-3">
                    Score
                  </th>
                  <th scope="col" className="px-6 pr-24 py-3">
                    GPA
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Web Development
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Web Development
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Software Engineering
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Digital Electronics
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Web Development
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Academic Writing
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>
              <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Programing 1
                  </th>
                  <td className="px-6 py-4  text-gray-500">
                      3
                  </td>
                  <td className="px-6 py-4  text-gray-500 ">
                      A
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                      12.0
                  </td>
              </tr>

              
          </tbody>
      </table>
  </div>

      </div>
            <div className="flex">
      
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase bg-blue-500">
                              <tr>
                                  <th scope="col" className="px-6 md:pr-96 py-3">
                                      L200 Course
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                      Credit Hour
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                    Score
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                    GPA
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Web Development
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Web Development
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Software Engineering
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Digital Electronics
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Web Development
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Academic Writing
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>
                              <tr className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      Programing 1
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      3
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      A
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      12.0
                                  </td>
                              </tr>

                              
                          </tbody>
                      </table>
                  </div>

                 

                  
   
      
      </div>
    </div>
  )
}

export default GradeReport