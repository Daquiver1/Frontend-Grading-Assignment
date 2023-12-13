import SideBar from "../components/naviagtion/SideBar";
import NavBar from "../components/naviagtion/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className=" h-[100vh] w-full flex flex-row ">
      <div className="sideBar_container">
        <SideBar  />
      </div>
      <div className="content_  769px:pl-3 overflow-y-auto">
        <NavBar />
       <div className="w-full py-2 ">
        <Outlet />
       </div>
      </div>
    </div>
  );
}

export default Dashboard;
