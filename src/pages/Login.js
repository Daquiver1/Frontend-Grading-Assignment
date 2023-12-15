import React from "react";
import backgroundImage from "./layered-waves-haikei.svg";
import Navbar from "../component/Navbar";
import Footer1 from "../component/Footer1";
import Logs from "../component/Logs";

const Login = () => {
  return (
    <div
      className="text-[#232590] h-full w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div>
        <Logs/>
      </div>
   
      <Footer1 />
    </div>
  );
};

export default Login;
