import React from "react";
import img1 from "../assets/yah.jpg";
export const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={img1} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form>
          <h2>LOGIN</h2>
          <div>
            <label>Student ID</label>
            <input type="text" />
          </div>
          <div>
            <label>Student Pin</label>
            <input type="password" />
          </div>
          <button>GET STARTED</button>
        </form>
      </div>
    </div>
  );
};
