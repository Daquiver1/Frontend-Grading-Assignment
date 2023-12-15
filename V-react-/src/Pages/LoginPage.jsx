/* eslint-disable no-unused-vars */
// LoginP.jsx
import React from 'react';


function LoginP() {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="border-2 border-gray-800 bg-gray-800 w-96 text-white rounded-lg p-8 shadow-lg">
        <form action="">
          <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
          <div className="input-box mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full bg-transparent border-white outline-none border-2 border-white rounded-full px-5 text-white"
              required
            />
          </div>

          <div className="input-box mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent border-white outline-none border-2 border-white rounded-full px-5 text-white"
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
            className="w-full h-12 bg-azure border-none outline-none rounded-full shadow-md cursor-pointer text-xl font-semibold text-white-800"
          >
            login
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
