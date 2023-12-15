import { useState } from "react";
import { MdCastForEducation } from "react-icons/md";
import MissingGradeForm from "./MissingGradeForm";
import HelpAndSupport from "./HelpAndSupport";

function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill"},
    { title: "Grade Report Form", src: "form" , gap: true},
    { title: "Missing Grade Form ", src: "form2" },
    { title: "Instructor Contact ", src: "contact" },
    { title: "Help and Support ", src: "faq", gap: true },
    { title: "Profile", src: "User", gap: false }
  ];

  return (
    <div className="flex">
      <nav className='w-full items-center flex text-3xl font-bold text-[#00df94]  top-0 h-[60px]  fixed left-0 right-0  z-20   justify-end pr-[5%] py-[20px] bg-dark-purple'>
        <h1 className='flex'>
          <MdCastForEducation className='mr-3 flex self-center' />Grade Report Form
        </h1>
          </nav>



      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-[600px] p-5  pt-8 relative duration-300 mt-[40px] `}
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
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>



      
      <div className="h-screen flex-1  mt-[60px]">
        {/* <MissingGradeForm /> */}
        <HelpAndSupport />
      </div>
    </div>
  );
};

export default Navbar;