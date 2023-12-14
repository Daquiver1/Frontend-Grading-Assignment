import React from "react";

export const Login = () => {
  return (
    <div className="h-screen w-full">
      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px]  mx-auto mt-40 py-20 px-10 rounded-lg">
          <h2 className="text-4xl text-white font-bold text-center">LOGIN</h2>
          <div className="flex flex-col text-gray-400 py-4 ">
            <label>Student ID</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400">
            <label>Student Pin</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
