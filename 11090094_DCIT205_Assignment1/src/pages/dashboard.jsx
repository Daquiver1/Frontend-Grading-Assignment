import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";

export const Dashboard = () => {
  return (
    <div className="p-8">
      <Link to="/missing_grade_report">
        <div
          className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md mb-12 cursor-pointer"
          role="alert">
          <div className="flex items-center">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">ALERT!</p>
              <p className="text-sm">
                Some grades are missing! Click to report
              </p>
            </div>
          </div>
        </div>
      </Link>

      <header className="font-bold text-3xl mb-6">
        STUDENT'S CURRENT GRADES
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-h-[300px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course Title
              </th>
              <th scope="col" className="px-6 py-3">
                Student Grade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 201 - PROGRAMMING 1
              </td>
              <td className="px-6 py-4">A</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 203 - DIGITAL AND LOGIC SYSTEM DESIGN
              </td>
              <td className="px-6 py-4">N/A</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 205 - MULTI MEDIA AND WEB DESIGN
              </td>
              <td className="px-6 py-4">N/A</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 207 - COMPUTER ORGANIZATION & ARCHITECTURE
              </td>
              <td className="px-6 py-4">A</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 209 - E-BUSINESS ARCHITECTURES
              </td>
              <td className="px-6 py-4">A</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                CBAS 210 - ACADEMIC WRITING
              </td>
              <td className="px-6 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12"></div>

      <FooterComponent />
    </div>
  );
};
