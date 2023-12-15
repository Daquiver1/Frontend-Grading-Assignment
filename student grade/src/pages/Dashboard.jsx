import React from "react";
import logo from '../assets/images/logo.png'
import account from '../assets/images/account.png'
import Footer from "../components/footer";
import Grades from "./Grades1";
import { NavLink } from "react-router-dom";

const DashboardPage = () => {
    return(
      <div className="h-full bg-gray-100%">
      <div class="min-h-full" style={{borderRadius:'30px'}}>
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-8 w-8" src={logo} alt="Your Company"/>
                </div>
                <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/dashboard" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Dashboard</NavLink>
                  <NavLink to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Home</NavLink>
                  <NavLink to="/missing-grade" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Missing Grade</NavLink>
                  <NavLink to="/grade-report" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Grade Report</NavLink>
                  <NavLink to="/help" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Help&Support</NavLink>
                  <NavLink to="/instructor" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClassName="text-white">Instructors</NavLink>
                </div>

                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </button>
                  <div class="relative ml-3">
                    <div>
                      <button type="button" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 rounded-full" src={account} alt=""/>
                      </button>
                    </div>
      
                    
                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <NavLink to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 text-center" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</NavLink><br/>
                  <NavLink to="/missing-grade" class="block px-4 py-2 text-sm text-gray-700 text-center" role="menuitem" tabindex="-1" id="user-menu-item-1">Missing Grade</NavLink><br />
                  <NavLink to="./home" class="block px-4 py-2 text-sm text-gray-700 text-center" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</NavLink>
                </div>

                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="md:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Missing Grade</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Grade Report</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Help</a>
            </div>
            <div class="border-t border-gray-700 pb-3 pt-4">
              <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium leading-none text-white">11299893</div>
                  <div class="text-sm font-medium leading-none text-gray-400">122334@example.com</div>
                </div>
                <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
              </div>
              <div class="mt-3 space-y-1 px-2">
                <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
                <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Missing Grade</a>
                <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
              </div>
            </div>
          </div>
        </nav>
      
        <header class="bg-white shadow">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
        <section>
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex items-center space-x-4">
            
            <div class="bg-white rounded-md p-6 shadow-md max-w-md">
              <h4 class="text-2xl font-semibold text-gray-800">Grade Point Average:</h4>
              <p class="text-4xl font-bold text-blue-500 mt-2">3.14</p>
              <div class="flex items-center mt-4">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-green-500 ml-2">5.2%</p>
              </div>
            </div>

            <div class="bg-white rounded-md p-6 shadow-md max-w-md">
              <h4 class="text-2xl font-semibold text-gray-800">Missing Grades</h4>
              <p class="text-4xl font-bold text-blue-500 mt-2">1</p>
              <div class="flex items-center mt-4">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-4 4m0 0l-4-4m4 4V6"></path>
                </svg>
                <p class="text-red-500 ml-2">-2.5%</p>
              </div>
            </div>

            <div class="bg-white rounded-md p-6 shadow-md max-w-md">
              <h3 class="text-2xl font-semibold text-gray-800">Courses Passed</h3>
              <p class="text-4xl font-bold text-blue-500 mt-2">8</p>
              <div class="flex items-center mt-4">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-green-500 ml-2">8.9%</p>
              </div>
            </div>

            <div class="bg-white rounded-md p-6 shadow-md max-w-md" style={{ maxWidth: '24rem' }}>
              <h3 class="text-2xl font-semibold text-gray-800">Attendance Rates:</h3>
              <p class="text-4xl font-bold text-blue-500 mt-2">30</p>
              <div class="flex items-center mt-4">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-4 4m0 0l-4-4m4 4V6"></path>
                </svg>
                <p class="text-red-500 ml-2">-2.5%</p>
              </div>
            </div>
          </div>
        </section>
        
          <section>
            <Grades />
          </section>
        </main>
      </div>
      <Footer />
      </div>
      
    )
}

export default DashboardPage