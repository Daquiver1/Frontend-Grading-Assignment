import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";

export const Login = () => {
  const [studentID, setStudentID] = useState("");
  const [studentPin, setStudentPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (studentID.length === 8 && studentPin.length === 4) {
      setErrorMessage("");
      console.log("Authentication successful. Redirecting to dashboard...");
    } else {
      setErrorMessage(
        "Student ID should have 8 digits and Student PIN should have 4 digits."
      );
    }
  };

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
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-gray-400">
            <label htmlFor="studentPin">Student Pin</label>
            <input
              id="studentPin"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              value={studentPin}
              onChange={(e) => setStudentPin(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>

          <Link
            to={
              studentID.length === 8 && studentPin.length === 4
                ? "/dashboard"
                : "#"
            }>
            <button
              type="button"
              onClick={handleLogin}
              className={`w-full my-5 py-2 px-7 ${
                errorMessage ? "bg-gray-500" : "bg-teal-500 hover:bg-teal-600"
              } text-white font-semibold rounded-lg focus:outline-none`}
              disabled={errorMessage !== ""}>
              {errorMessage ? "Invalid Login" : "Login"}
            </button>
          </Link>
        </form>
      </div>
      <FooterComponent />
    </>
  );
};
