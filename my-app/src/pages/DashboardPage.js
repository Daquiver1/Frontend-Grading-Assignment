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
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import DashboardPagebg from '../images/bg-dashboard.jpg'



const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative`}
      >
        <div className="inline-flex">
          <AiFillBook
            className={`bg-orange-500 text-6xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate=[360deg]"
            } `}
          />
          <h1
            style={{ fontSize: "1.5rem" }}
            className={`text-black origin-left font-bold text-5xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            UG GRADE REPORT SYSTEM
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          ></input>
        </div>

        <Link to="/">
          <div className="inline-flex">
            <IoHome
              className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${
                open && "rotate=[360deg]"
              } `}
            />
            <h1
              className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${
                !open && "scale-0"
              }`}
            >
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
          className={`bg-gray-300 text-black text-3xl rounded-full absolute -right-3.5 top-9 cursor-pointer ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="p-7 flex">
        <div className="bg-gray-100 min-h-screen ">
          <div className="bg-white p-2 flex">
            <h1 className=" flex-1 text-xl font-bold">Student Dashboard</h1>
            <div className={`flex items-center rounded-md -mt-4 bg-Thistle] bg-lavender-grey ${!open ? "px-2.5" : "px-4"} py-2`}>
            <BsSearch className={`text-gray-500 bg-gray-100 text-2xl rounded-lg md:text-3xl mt-2 float-left cursor-pointer ${open && "mr-2"}`} />


            <input
              type={"search"}
              placeholder="search"
              className={`text-base bg-gray-100 w-80 -ml-2 pr-2 mt-2 text-gray-500 rounded-lg focus:outline-none p-1 ${!open && "hidden"}`}>
          </input>
        </div>
          </div>
          <div className="bg-Thistle rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-lg font-bold">
                    Priscilla Osei
                  </h2>
                  <p className="text-gray-600">BSc. Computer Science</p>
                </div>
                <div className="flex ml-80 pl-60 mt-3">
                  <IoNotificationsSharp className="rounded-full text-4xl cursor-pointer mr-12" />
                  <BiSolidMessageDetail className="rounded-full text-4xl cursor-pointer mr-12" />
                  <IoSettings className="rounded-full text-4xl cursor-pointer mr-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Account Balance</h3>
                <p className="text-gray-700">GH₵2000</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Hall of Residence</h3>
                <p className="text-gray-700">Legon Hall</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Position held</h3>
                <p className="text-gray-700">Common Floor Member</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
  <h2 className="text-xl font-bold">Activity</h2>
    <Calendar/>
  {/* Add your activity component here */}
</div>

        </div>
      </div>
    </div>
  );

}

export default Dashboard;