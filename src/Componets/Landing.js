import React from "react";
import blue from "../Project images/blue.jpg";

const Landing = () => {
  <link rel="stylesheet" href="/src/index.css"></link>;
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar - Visible on medium and larger screens */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar Header */}
            <div className="bg-black p-4 text-blue-700">
              <span className="text-xl font-semibold">GRADE POINT</span>
            </div>

            <nav className="flex-1 flex flex-col overflow-y-auto bg-black">
              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-indigo-600 rounded-lg focus:shadow-outline"
                  white="70"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <span class="ml-4"> Overview</span>
                </a>
              </ul>
              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span class="ml-4">Chat</span>
                </a>
              </ul>
              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="/instructors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span class="ml-4">Our Instructors</span>
                </a>
              </ul>
              <ul>
                {" "}
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="/about"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="ml-4">About</span>
                </a>
              </ul>{" "}
              <br></br>
              <ul>
                <p class="px-4 pt-4 font-medium text-white uppercase focus:shadow-outline   bg-black">
                  Shortcuts
                </p>
              </ul>
              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="/Report"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span class="ml-4"> Report Here</span>
              </a>
              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </svg>
                <span class="ml-4"> Dashboard</span>
              </a>
              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="/contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                <span class="ml-4">Help and Support</span>
              </a>
              <br></br>
              <br></br>
              {/* Sidebar Content */}
              <nav className="flex-1 flex flex-col overflow-y-auto bg-blue-700">
                <div class="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
                  <button className="text-white cursor-pointer hover:bg-black w-25 ">
                    LOG OUT
                  </button>
                </div>
                {/* ... (menu items and footer) */}
              </nav>
            </nav>

            <header className="bg-gray-800 p-4">
              <div className="absolute top-1 right-1">
                <a  href="/login"
                  className="bg-black text-white px-4 py-2 mr-2 rounded hover:bg-slate-600"
                  
                >
                  Login
                </a>
                <a 
                  className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
                  href="/signUp"
                >
                  Sign Up
                </a>
              </div>
            </header>

            <div className="absolute top-14 right-12  ">
              <div className="relative w-full h-full">
                <img src={blue} alt="Your Image" className="w-full h-auto " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-2xl font-bold right-8">
                    Knowledge is power, and Grade Point puts that power in your
                    hands. Take control of your academic journey, track your
                    progress, and reach your full potential with ease. <br></br>{" "}
                    <br></br>{" "}
                    <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 right-0">
                      {" "}
                      Get to know more{" "}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar - Hidden on medium and larger screens */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="p-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Mobile Sidebar Overlay */}
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div>

          {/* Mobile Sidebar Content */}
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white overflow-y-auto">
            {/* Mobile Sidebar Header */}
            <div className="bg-black p-4 text-blue-700">
              <span className="text-xl font-semibold">GRADE POINT</span>
            </div>

            <nav className="flex-1 flex flex-col overflow-y-auto bg-black">
              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-indigo-600 rounded-lg focus:shadow-outline"
                  white="70"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <span class="ml-4"> Overview</span>
                </a>
              </ul>

              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span class="ml-4">Chat</span>
                </a>
              </ul>

              <ul>
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span class="ml-4">User</span>
                </a>
              </ul>

              <ul>
                {" "}
                <a
                  class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="ml-4">Settings</span>
                </a>
              </ul>

              <ul>
                <p class="px-4 pt-4 font-medium text-white uppercase focus:shadow-outline   bg-black">
                  Shortcuts
                </p>
              </ul>

              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                <span class="ml-4"> Tasks</span>
              </a>

              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span class="ml-4"> Reports</span>
              </a>

              <a
                class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform bg-black border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                white="70"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </svg>
                <span class="ml-4"> Dashboard</span>
              </a>

              {/* Sidebar Content */}
              <nav className="flex-1 flex flex-col overflow-y-auto bg-blue-700">
                {/* ... (menu items and footer) */}
              </nav>
            </nav>

            {/* Mobile Sidebar Content */}
            <nav className="flex-1 flex flex-col overflow-y-auto bg-white">
              <nav className="flex-1 flex flex-col overflow-y-auto bg-blue-700">
                <div class="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
                  <div class="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
                    <button className="text-white cursor-pointer hover:bg-black w-25 ">
                      LOG OUT
                    </button>
                  </div>
                </div>
                {/* ... (menu items and footer) */}
              </nav>
              {/* ... (menu items and footer) */}
            </nav>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Add your page content here */}
      </div>
    </div>
  );
};

export default Landing;
