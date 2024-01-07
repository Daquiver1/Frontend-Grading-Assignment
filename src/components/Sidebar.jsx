import { useState, useEffect } from "react";
import { MdCastForEducation } from "react-icons/md";
import LogIn from './LogIn';
import Navbar from './Navbar';
import HelpAndSupport from './HelpAndSupport'
import InstructorContact from "./InstructorContact";
import MissingGradeForm from "./MissingGradeForm";
import GradeReport from "./GradeReport";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

function SideBar() {
  const [open, setOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth)
  const Menus = [
    { title: "Dashboard", href: "/Dashboard" , src: "Chart_fill"},
    { title: "Grade Report Form", href: "/GradeReport", src: "form" , gap: true},
    { title: "Missing Grade Form ", href: "/MissingGradeForm", src: "form2" },
    { title: "Instructor Contact ", href: "InstructorContact", src: "contact" },
    { title: "Help and Support ", href: "/HelpAndSupport" ,src: "faq", gap: true },
  ];

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])
  
  return (
    <div>
    <div className={window.innerWidth > 750 && `flex`}>
      <BrowserRouter>
      {window.innerWidth < 750 ? <div> <Navbar/></div> : 
      <nav className='w-full items-center flex text-3xl font-bold text-[#00df94]  top-0 h-[60px] fixed left-0 right-0  z-20 justify-end pr-[5%] py-[20px] bg-dark-purple '>
        <h1 className='flex'>
          <MdCastForEducation className='mr-3 flex self-center' />Grade Report Form
        </h1>
      </nav> }



      {window.innerWidth > 800 && 
      <div> 
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-[750px] p-5  pt-8 relative duration-300 mt-[40px] `}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Grade Form
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <NavLink
                key={index}
                to={Menu.href}
                className={({isActive}) => {
                  return `flex   p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  }`  +
                  (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ' : 'bg-gray-900 text-white bg-light-white rounded-md');
                }}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </NavLink>
            ))}
          </ul>
        </div>
        
      </div>}
      



      
      <div className="md:h-[730px] self-center md:mt-[60px] w-full m-auto">
        <Routes>
          <Route path='/helpAndSupport' element={<HelpAndSupport />}></Route>
          <Route path='/HelpAndSupport' element={<HelpAndSupport />}></Route>
          <Route path='/MissingGradeForm' element={<MissingGradeForm />}></Route>
          <Route path='/GradeReport' element={<GradeReport />}></Route>
          <Route path='/InstructorContact' element={<InstructorContact />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/LandingPage' element={<LandingPage />}></Route>
        </Routes>
      
      </div>
      </BrowserRouter>
      

    </div>
    </div>
  );
};

export default SideBar;