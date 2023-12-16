import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar'

const courses = [
  { id: 1, courseName: 'Introduction to computer science', grade: 'A', semester: 'Level 100 First semester' },
  { id: 2, courseName: 'Office productivity tools', grade: 'B', semester: 'Level 100 First semester' },
  { id: 3, courseName: 'Math for It Professionals', grade: 'C', semester: 'Level 100 First semester' },
  { id: 4, courseName: 'Critical Thinking', grade: 'A', semester: 'Level 100 First semester' },
  { id: 5, courseName: 'Introduction to Economics I', grade: 'B', semester: 'Level 100 First semester' },
  { id: 6, courseName: 'Statistics and Probability I', grade: 'C', semester: 'Level 100 First semester' },
  { id: 7, courseName: 'Academic Writing', grade: 'A', semester: 'Level 100 Second semester' },
  { id: 8, courseName: 'Logic and Circuit design', grade: 'B', semester: 'Level 100 Second semester' },
  { id: 9, courseName: 'Statistics and probability II', grade: 'C', semester: 'Level 100 Second semester' },
  { id: 10, courseName: 'Introduction to Econs II', grade: 'A', semester: 'Level 100 Second semester' },
  { id: 11, courseName: 'Programming Fundamentals', grade: 'B', semester: 'Level 100 Second semester' },
  { id: 12, courseName: 'Calculus I', grade: 'C', semester: 'Level 100 Second semester' },
 
 
  // ... add more courses
 ];

function Gradereport() {
  const [selectedSemester, setSelectedSemester] = useState('All');

 const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
 };

 const filteredCourses = selectedSemester === 'All' ? courses : courses.filter((course) => course.semester === selectedSemester);

 
  return (
    <div>
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class="flex p-4  ">
          {/**your */}
          <div className="App min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <select
          className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          <option value="All">All</option>
          <option value="Spring 2021">Level 100</option>
          <option value="Fall 2021">Level 200</option>
          <option value="Spring 2022">Level 100</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                 <tr>
                 <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Course Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     
                    </th>
                 </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                 {filteredCourses.map((course) => ( 
                  <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.courseName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.grade}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.semester}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
         
   
          </div>
        </div>
      </div>
  );
}

export default Gradereport