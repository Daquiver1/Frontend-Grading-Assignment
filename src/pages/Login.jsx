import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (studentId === "19273702" && pin === "12345") {
      setLoginSuccess(true);
      setLoginError(false);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      setLoginSuccess(false);
      setLoginError(true);
    }
  };

  return (
    <div className="container mx-auto mt-8 text-white">
      <h2 className="text-4xl font-bold mb-4">Login</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="studentId" className="block text-sm font-medium text-white-700">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            className="mt-1 p-2 w-full border rounded-md text-black"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pin" className="block text-sm font-medium text-white-700">
            PIN
          </label>
          <input
            type="password"
            id="pin"
            name="pin"
            className="mt-1 p-2 w-full border rounded-md text-black"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {loginError && (
        <div className="mt-2 text-red-600 text-center">
          Invalid login credentials. Please try again.
        </div>
      )}

      {loginSuccess && (
        <div className="mt-4 text-green-600 text-center">
          Login successful! Redirecting to the dashboard...
        </div>
      )}


      <div className="mt-8 text-white text-center">
        <p>Use the following dummy login details:</p>
        <p>Student ID: <span className="font-bold text-green-500">19273702</span></p>
        <p>PIN: <span className="font-bold text-red-500">12345</span></p>
      </div>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />   <br /> 
      <footer className="text-white py-4 text-center">
        
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default Login;
