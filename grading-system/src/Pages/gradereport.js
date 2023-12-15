import React from "react";
import SideBar from "../Component/sidebar";

function GradeReport() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h1>Grade Report</h1>

          <h2>LEVEL 100 1st Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 201
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 203
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 205
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 207
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 209
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    CBAS 201
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 100 2nd Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 201
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 203
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 205
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 207
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 209
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    CBAS 201
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 200 1st Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 201
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 203
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 205
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 207
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 209
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    CBAS 201
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 200 2nd Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 202
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 204
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 206
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 208
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 212
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    UGRC 220
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 300 1st Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 301
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 303
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 305
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 207
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 313
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 317
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 300 2nd Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 302
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 304
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 308
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 312
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 318
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 314
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 400 1st Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 400
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 401
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 409
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 413
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 415
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    CBAS 419
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h2>LEVEL 400 2nd Semester</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 400
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">75%</td>
                  <td class="px-6 py-4">2.7</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    DCIT 402
                  </th>
                  <td class="px-6 py-4">B+</td>
                  <td class="px-6 py-4">78%</td>
                  <td class="px-6 py-4">2.85</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 418
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">85%</td>
                  <td class="px-6 py-4">3.9</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 428
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">83%</td>
                  <td class="px-6 py-4">3.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 404
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">73%</td>
                  <td class="px-6 py-4">2.6</td>
                </tr>

                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    DCIT 406
                  </th>
                  <td class="px-6 py-4">A</td>
                  <td class="px-6 py-4">84%</td>
                  <td class="px-6 py-4">3.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradeReport;
