import React from "react";
import Navbar1 from "../component/Navbar1";
import Sidebar from "../component/Sidebar";
import Footer1 from "../component/Footer1";
import Content3 from "../component/Content3";

const Faqs = () => {
  return (
    <div
      className="text-[#232590] bg-fixed bg-cover bg-center h-full w-full"
      style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }}
    >
      <Navbar1 />

      <div className="flex">
        <Sidebar />
       
          <Content3 />
       
      </div>

      <Footer1 />
    </div>
  );
};

export default Faqs;
