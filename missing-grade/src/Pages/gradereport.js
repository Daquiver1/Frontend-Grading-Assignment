import React from 'react'
import SideBar from '../Components/sidebar'

function GradeReport() {
  return (
    <div>
    <SideBar />
    <div className="p-4 sm:ml-64">
            
            <div className="p-4 border-2 border-gray-200  rounded-lg">
            <h1>Grade Report</h1>
            

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Course name
                </th>
                <th scope="col" class="px-6 py-3">
                    Grade
                </th>
                <th scope="col" class="px-6 py-3">
                    Score
                </th>
                <th scope="col" class="px-6 py-3">
                    GPA
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    DCIT 201
                </th>
                <td class="px-6 py-4">
                    B+
                </td>
                <td class="px-6 py-4">
                    75%
                </td>
                <td class="px-6 py-4">
                  2.7
                </td>
                
            </tr>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    DCIT 203
                </th>
                <td class="px-6 py-4">
                    B+
                </td>
                <td class="px-6 py-4">
                    78%
                </td>
                <td class="px-6 py-4">
                   2.85
                </td>
               
            </tr>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 205
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                   85%
                </td>
                <td class="px-6 py-4">
                   3.9
                </td>
              
            </tr>


            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 207
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                    83%
                </td>
                <td class="px-6 py-4">
                    3.6
                </td>
              
            </tr>

            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 209
                </th>
                <td class="px-6 py-4">
                    B
                </td>
                <td class="px-6 py-4">
                    73%
                </td>
                <td class="px-6 py-4">
                   2.6
                </td>
              
            </tr>

            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    CBAS 201
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                   84%
                </td>
                <td class="px-6 py-4">
                    3.8
                </td>
              
            </tr>
        </tbody>
    </table>
</div>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Course name
                </th>
                <th scope="col" class="px-6 py-3">
                    Grade
                </th>
                <th scope="col" class="px-6 py-3">
                    Score
                </th>
                <th scope="col" class="px-6 py-3">
                    GPA
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    DCIT 304
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                    85%
                </td>
                <td class="px-6 py-4">
                  3.5
                </td>
                
            </tr>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    DCIT 303
                </th>
                <td class="px-6 py-4">
                    B
                </td>
                <td class="px-6 py-4">
                    72%
                </td>
                <td class="px-6 py-4">
                   2.55
                </td>
               
            </tr>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 305
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                   85%
                </td>
                <td class="px-6 py-4">
                   3.9
                </td>
              
            </tr>


            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 307
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                    83%
                </td>
                <td class="px-6 py-4">
                    3.6
                </td>
              
            </tr>

            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    DCIT 309
                </th>
                <td class="px-6 py-4">
                    C
                </td>
                <td class="px-6 py-4">
                    60%
                </td>
                <td class="px-6 py-4">
                   2.2
                </td>
              
            </tr>

            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Aca 301
                </th>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                   84%
                </td>
                <td class="px-6 py-4">
                    3.8
                </td>
              
            </tr>
        </tbody>
    </table>
</div>

    </div>
</div>
   
    </div>
  )
}

export default GradeReport