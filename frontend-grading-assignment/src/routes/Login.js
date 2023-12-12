import React, { useState, useRef, useEffect } from "react";
import "../components/Login/Login.css";
import LoginImage from "../assets/3.jpg";
import { Link } from "react-router-dom";

function Login({ onSignIn }) {
  // const [userId, setUserId] = useState("");
  // const [password, setPassword] = useState("");
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Replace this with your actual login logic
  //   // For simplicity, assuming predefined values
  //   if (userId === "user123" && password === "password123") {
  //     // Successful login, invoke the onSignIn callback with user information
  //     onSignIn({ userId, password });
  //   } else {
  //     // Display an error message for incorrect credentials
  //     alert("Invalid user ID or password");
  //   }

  return (
    <>
      <>
        {/* component */}
        <section className="login-container  flex flex-col md:flex-row h-screen items-center">
          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to AcademiaWave!
              </h1>
              <form className="mt-6">
                <div>
                  <label className="block text-gray-700">User Id</label>
                  <input
                    type=""
                    name=""
                    id=""
                    placeholder="Enter Student id"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus=""
                    autoComplete=""
                    required=""
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required=""
                  />
                </div>
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Link to="/home">
                  <button
                    type="submit  "
                    className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                  >
                    Log In
                  </button>
                </Link>
              </form>
              <hr className="my-6 border-gray-300 w-full" />
              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4">Log in with Student Mail</span>
                </div>
              </button>
              <p className="mt-8">
                Need an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Enroll Now
                </a>
              </p>
            </div>
          </div>
          <div className="login-img bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src={LoginImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </>
    </>
  );
}

export default Login;
