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
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  {GradesData[0].courseCode}
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
                  N/A
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Michael Soli</div>
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 205
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
                  N/A
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Michael Soli</div>
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 205
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
                  N/A
                </div>
              </div>{" "}
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Michael Soli</div>
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 205
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
                  N/A
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Elective Courses Grades</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Michael Soli</div>
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 205
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
                  N/A
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Mensah Sarbah</div>
                  <div className="text-gray-400 text-xs">5d</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 209
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
                  N/A
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Michael Soli</div>
                  <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  DCIT 205
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
                  N/A
                </div>
              </div>
              <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <div className="text-gray-400 text-xs">Dr. Eugene Adjei</div>
                  <div className="text-gray-400 text-xs">1w</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  MATH 225
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
                  N/A
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
