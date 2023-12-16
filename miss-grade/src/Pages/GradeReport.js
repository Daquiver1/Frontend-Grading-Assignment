import SideBar from '../Components/SideBar';

import React, { useState } from 'react';

function GradeReport() {
    
  return (
    <div>
    <SideBar />
    <div className="p-4 sm:ml-64">
    <div>
      <div className='flex justify-between'>
      <h1 className='font-bold text-2xl pb-4'>Grade Details ----- CGPA:4.00</h1>
      <div class="flex items-center">
  <input
    type="text"
    placeholder="Search..."
    class="border border-gray-300 p-2 rounded-l focus:outline-none"
  />
  <button
    type="button"
    class="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-700 focus:outline-none"
  >
    Search
  </button>
</div>

       
      </div>
        
    </div>
      <div>

      <div className="flex">
      
      <table className="w-full text-sm text-left rtl:text-right border mb-12 text-gray-500">
          <thead className="text-xs text-gray-100 uppercase bg-blue-600">
              <tr>
                  <th scope="col" className="px-6 md:pr-96 py-3">
                  L100 First Semester
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
          <tbody className=' '>
              <tr className="bg-white bg-blue-100 border-b">
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
              
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              

              
          </tbody>
      </table>
  </div>

      </div>
      <div className="flex">
      
      <table className="w-full text-sm text-left rtl:text-right border mb-12 text-gray-500">
          <thead className="text-xs text-gray-100 uppercase bg-blue-600">
              <tr>
                  <th scope="col" className="px-6 md:pr-96 py-3">
                      L100 Second Semester
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
          <tbody className=' '>
              <tr className="bg-white bg-blue-100 border-b">
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
              
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              

              
          </tbody>
      </table>
  </div>

           <div className="flex">
      
      <table className="w-full text-sm text-left rtl:text-right border mb-12 text-gray-500">
          <thead className="text-xs text-gray-100 uppercase bg-blue-600">
              <tr>
                  <th scope="col" className="px-6 md:pr-96 py-3">
                      L100 Second Semester
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
          <tbody className=' '>
              <tr className="bg-white bg-blue-100 border-b">
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
              
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              <tr className="bg-white bg-blue-100 border-b">
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
              

              
          </tbody>
      </table>
  </div>      

                  
   
      
      </div>
    </div>
  )
}

export default GradeReport