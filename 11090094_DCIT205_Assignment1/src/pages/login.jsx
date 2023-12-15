import React from "react";
import FooterComponent from "../components/FooterComponent";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto mt-40 py-20 px-10 rounded-lg">
          <h2 className="text-4xl text-white font-bold text-center">LOGIN</h2>

          <div className="flex flex-col text-gray-400 py-4">
            <label htmlFor="studentID">Student ID</label>
            <input
              id="studentID"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400">
            <label htmlFor="studentPin">Student Pin</label>
            <input
              id="studentPin"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <Link to="/dashboard">
            <button className="w-full my-5 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg focus:outline-none">
              Login
            </button>
          </Link>
        </form>
      </div>
      <FooterComponent />
    </>
  );
};
