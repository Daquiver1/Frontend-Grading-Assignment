import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar1 from "../component/Navbar1";
import Connten2 from "../component/Connten2";
import Footer1 from "../component/Footer1";

const Profile = () => {
  return (
    <div
      className="text-[#232590] bg-cover bg-center h-full  w-full"
      style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }}
    >
      <Navbar1 />

      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Connten2 />
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Profile;
