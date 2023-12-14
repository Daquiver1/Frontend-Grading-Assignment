import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex-1 md:flex bg-fixed gap-[8rem] justify-center pt-3 ">
        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-gray-800 ml-[-8rem] pt-1">
            GradeTracker
          </h1>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-gray-700 p-2 md:border-b border-[#cfa460] ">
            Resources
          </h1>
          <ul>
            <li className="flex gap-2 p-1">Documentation</li>
            <li className="flex gap-2 p-1">Tutorial</li>
            <li className="flex gap-2 p-1">Support</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-gray-700 p-2 md:border-b border-[#cfa460]">
            Support
          </h1>
          <ul>
            <li className="flex gap-2 p-1">Help Center</li>
            <li className="flex gap-2 p-1">Privacy Policy</li>
            <li className="flex gap-2 p-1">Condition</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-gray-700 p-2 md:border-b border-[#cfa460]">
            Contact Us
          </h1>
          <ul>
            <li className="flex gap-2 p-1">
              <IoCallOutline size={26} />
              055-125-8689{" "}
            </li>
            <li className="flex gap-2 p-1">
              <FaMapMarkerAlt size={26} />
              Accra-Ghana
            </li>
            <li className="flex gap-2 p-1">University Of Ghana</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center  bg-grey">
        <ul className="flex justify-center m-2 p-2 gap-[3rem]">
          <li>
            <FaLinkedin size={30} fill="blue" />
          </li>
          <li>
            <BsTwitterX size={30} className="bg-transparent  items-center " />
          </li>
          <li>
            <FaYoutube
              size={30}
              fill="red"
              className="bg-transparent rounded-full items-center "
            />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-semibold">
          @Copyright 2023. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer