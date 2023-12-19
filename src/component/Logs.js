import React from "react";
import { Link } from "react-router-dom";

const Logs = () => {
  return (
    <div className="mt-[5rem]">
      <div className="flex items-center justify-center h-screen">
        <div className="p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 justify-center items-center text-center">
            Login
          </h2>

          <form>
            <div className="flex justify-center items-center">
              <img
                src={require("./836.png")}
                alt=""
                className=" w-70 h-60 mb-4  rounded-3xl"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                required
                id="username"
                name="username"
                className="w-full bg-transparent border rounded  border-indigo-500 "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                required
                id="password"
                name="password"
                className="w-full bg-transparent border rounded  border-indigo-500  "
              />
            </div>

            <div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  required
                  className="w-full font-bold text-[1rem] py-2 px-4 bg-gradient-to-tr from-[#232590] to-[#CCCCCC] text-white rounded-full"
                >
                  Log In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logs;
