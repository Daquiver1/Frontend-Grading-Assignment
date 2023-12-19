import React from "react";

import Footer1 from "../component/Footer1";
import Navbar1 from "../component/Navbar1";
import Gradereportfrom from "../component/Gradereportfrom";
import backgroundImage from "./layered-waves-haikei.svg";
import Sidebar from "../component/Sidebar";

const Gradeform = () => {
  return (
    <div
      className="text-[#232590] bg-fixed h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar1 />
      <div className="flex">
        <Sidebar />

        <Gradereportfrom />
      </div>

      <Footer1 />
    </div>
  );
};

export default Gradeform;
