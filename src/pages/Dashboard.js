import React from "react";
import Sidebar from "../component/Sidebar";
import Content1 from "../component/Content1";
import Navbar1 from "../component/Navbar1";
import Footer1 from "../component/Footer1";

const Dasboard = () => {
  return (
    <div
      className="text-[#232590] bg-cover bg-fixed h-full bg-center w-full"
      style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }}
    >
      <Navbar1 />

      <div className="flex">
        <Sidebar />
        
          <Content1 />
        
      </div>

      <Footer1 />
    </div>
  );
};

export default Dasboard;
