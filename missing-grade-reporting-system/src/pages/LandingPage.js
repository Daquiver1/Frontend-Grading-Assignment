import {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsSearch } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import LandingPagebg from '../images/bg-landing.jpg'



const Landing = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative`}>
        <div className="inline-flex">
          <AiFillBook
            className={`bg-orange-500 text-6xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1
            style={{ fontSize: "1.5rem" }}
            className={`text-black origin-left font-bold text-5xl duration-300 ${!open && "scale-0"}`}>
            UG GRADE REPORT SYSTEM
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>

          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}>
          </input>
        </div>

        <Link to="/">
          <div className="inline-flex">
            <IoHome
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>
              LANDING PAGE{" "}
            </h1>
          </div>
        </Link>

        <Link to="/Login">
          <div className="inline-flex mt-4">
            <CgLogIn
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              LOGIN PAGE
            </h1>
          </div>
        </Link>

        <Link to="/Dashboard">
          <div className="inline-flex mt-4">
            <MdOutlineDashboard
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              DASHBOARD{" "}
            </h1>
          </div>
        </Link>

        <Link to="/GradeReport">
          <div className="inline-flex mt-4">
            <AiFillFund
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              GRADE REPORT{" "}
            </h1>
          </div>
        </Link>

        <Link to="/MissingGradeForm">
          <div className="inline-flex mt-4">
            <FaWpforms
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              MISSING GRADE FORM{" "}
            </h1>
          </div>
        </Link>

        <Link to="/InstructorContact">
          <div className="inline-flex mt-4">
            <MdPermContactCalendar
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              INSTRUCTOR CONTACT{" "}
            </h1>
          </div>
        </Link>

        <Link to="/HelpAndSupport">
          <div className="inline-flex mt-4">
            <MdLiveHelp
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
              {" "}
              HELP AND SUPPORT{" "}
            </h1>
          </div>
        </Link>

        <BsChevronLeft
          className={`bg-gray-300 text-black text-3xl rounded-full absolute -right-3.5 top-9 cursor-pointer z-10 ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="flex-1">
        <div
          className="bg-cover bg-no-repeat h-screen relative" style={{ backgroundImage: `url(${LandingPagebg})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white font-bold text-5xl mb-4">
                UG Grade System
              </h1>
              <p className="text-white text-2xl mb-8">Explore academic excellence with the UG Grade System – your one-stop platform for tracking grades, managing coursework, and gaining valuable insights. Elevate your educational journey effortlessly!</p>
              <Link to="/Login">
              <button className="bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
}

export default Landing;