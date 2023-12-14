import { useState } from "react";
import SideBar from "../components/naviagtion/SideBar";
import NavBar from "../components/naviagtion/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [isOpen, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen((prev) => !prev);
  };

  const handleOutSpaceClose = (el) => {
    if (!el.classList.contains("sideBar_container")) {
      return;
    }
    setOpen(false);
  };

  return (
    <div className=" h-[100vh] w-full flex flex-row ">
      <div
        className={`z-[99] sideBar_container ${!isOpen ? null : "active"} `}
        onClick={(e) => handleOutSpaceClose(e.target)}
      >
        <SideBar isOpen={isOpen} handleClick={() => setOpen(false)} />
      </div>
      <div className="content_  769px:pl-3 overflow-y-auto">
        <NavBar handleClick={() => handleNavbar()} />
        <div className="w-full py-2 min-h-full bg-slate-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
