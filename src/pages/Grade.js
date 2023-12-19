import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar1 from "../component/Navbar1";
import Footer1 from "../component/Footer1";
import Gradecontent from "../component/Gradecontent";


const Grade = () => {
  return (
    <div
      className="text-[#232590] bg-fixed bg-cover bg-center h-full w-full"
      style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }}
    >
      <Navbar1 />

      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Gradecontent />
        </div>
      </div>

      <Footer1 />
    </div>
  );
};

export default Grade;
