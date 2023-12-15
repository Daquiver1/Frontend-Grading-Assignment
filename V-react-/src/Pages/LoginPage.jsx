/* eslint-disable no-unused-vars */
// LoginP.jsx
import React from 'react';

function LoginP() {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="border-2 border-gray-800 bg-gray-800 w-96 text-white rounded-lg p-8 shadow-lg">
        <form action="" className="relative">
          <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
          
          <div className="input-box mb-6 relative">
            {/* User Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <input
              type="text"
              placeholder="Username@example.com"
              className="w-full h-full bg-transparent border-white outline-none border-2 border-white rounded-full px-10 text-white"
              required
            />
          </div>

          <div className="input-box mb-6 relative">
            {/* Password Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent border-white outline-none border-2 border-white rounded-full px-10 text-white pr-10"
              required
            />
          </div>

          <div className="flex justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="text-white mr-1" /> Remember me
            </label>
            <a href="/" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-azure border-none outline-none rounded-full  shadow-md cursor-pointer text-xl font-semibold text-white-800 active:bg-white active:text-gray-600"
          >
            Login
          </button>

          <div className="text-sm text-center mt-6">
            <p>
              Dont have an account? <a href="/" className="text-white hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginP;

