import { Component } from "react";
import { Link } from "react-router-dom";
import { GradesData } from "./GradesData";
import "./GradeStyles.css";

class Grades extends Component {
  render() {
    return (
      <>
        <hr className="my-10" />

        <div className="grade-container grid grid-cols-2 gap-x-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Core Courses Grades</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[0].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[0].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[0].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg> */}
                  {GradesData[0].grade}
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {" "}
                    {GradesData[1].instructor}
                  </div>

                  <div className="text-gray-400 text-xs">
                    {GradesData[1].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[1].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg> */}
                  {GradesData[1].grade}
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[2].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[2].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[2].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {GradesData[2].grade}
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[3].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[3].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[3].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {GradesData[3].grade}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Elective Courses Grades</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[4].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[4].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[4].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg> */}
                  {GradesData[4].grade}
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[5].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[5].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[5].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {GradesData[5].grade}
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[6].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[6].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[6].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg> */}
                  {GradesData[6].grade}
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">
                    {GradesData[7].instructor}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {GradesData[7].timeUploaded}
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[7].courseCode}
                </a>
                <div className="text-sm text-gray-600">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-gray-800 inline align-middle mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg> */}
                  {GradesData[7].grade}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10" />
      </>
    );
  }
}

export default Grades;
