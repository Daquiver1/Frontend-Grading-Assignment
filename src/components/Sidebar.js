import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "LandingPage", to: "/", src: "logo.png"},
    { title: "Login", to: "/pages/LoginPage" },
    { title: "Dashboard", to: "/pages/DashboardPage", gap: true },
    { title: "Grade Report", to: "/pages/GradeReportPage" },
    { title: "Missing Grade", to: "/pages/MissingGradeForm" },
    { title: "Instructor Contact", to: "/pages/InstructorContactPage" },
    { title: "Help and Support", to: "/pages/HelpAndSupportPage", gap: true },
  ];

  return (
    <div className={`flex ${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
      <img
        src="../assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="Control Icon"
      />
      <div className="flex gap-x-4 items-center">
        <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} alt="Logo" />
        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
          UG Grades System
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
          >
            <Link to={menu.to}>
              <img src={`./src/assets/${menu.src}`} alt={menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
