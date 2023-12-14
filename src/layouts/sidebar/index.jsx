import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../../logo.png"; 

import {
  faHome,
  faUser,
  faDatabase,
  faListAlt,
  faCog,
  faMessage,
  faInfo,
  faChartBar,
  faDashboard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src={logoImage} width={45} alt="" />
          <span className={`text-xl whitespace-pre ${!open ? "hidden" : ""}`}>
            Missing Grades
          </span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/login"} className="link">
                <FontAwesomeIcon
                  icon={faLock}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} className="link">
                <FontAwesomeIcon
                  icon={faDashboard}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/grade-report"} className="link">
                <FontAwesomeIcon
                  icon={faListAlt}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>Grade Report</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/missing-grade-form"} className="link">
                <FontAwesomeIcon
                  icon={faChartBar}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>
                  Missing Grade Form
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/instructor-contact"} className="link">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>
                  Instructor Contact
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/help-and-support"} className="link">
                <FontAwesomeIcon
                  icon={faMessage}
                  size="lg"
                  className="min-w-max"
                />
                <span className={!open ? "hidden" : ""}>Help and Support</span>
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Copyright © 2023</p>
                  <small>All rights reserved</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Thelsare
                </p>
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu color="white" size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
