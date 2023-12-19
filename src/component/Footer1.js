import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer1 = () => {
  return (
    <div>
      <div className="flex-1 md:flex bg-fixed gap-[8rem] justify-center ">
        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-[#232590] p-2 ">
            GRADE<span className="text-[#cfa460]">SLEUTH</span>
          </h1>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-[#232590] p-2 md:border-b border-[#cfa460] ">
            Resources
          </h1>
          <ul>
            <li className="flex gap-2 p-2">Documentation</li>
            <li className="flex gap-2 p-2">Tutorial</li>
            <li className="flex gap-2 p-2">Support</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-[#232590] p-2 md:border-b border-[#cfa460]">
            Support
          </h1>
          <ul>
            <li className="flex gap-2 p-2">Help Center</li>
            <li className="flex gap-2 p-2">Privacy Policy</li>
            <li className="flex gap-2 p-2">Condition</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-[1.5rem] cursor-pointer text-[#232590] p-2 md:border-b border-[#cfa460]">
            Contact Us
          </h1>
          <ul>
            <li className="flex gap-2 p-2">
              <IoCallOutline size={26} />
              055-125-8689{" "}
            </li>
            <li className="flex gap-2 p-2">
              <FaMapMarkerAlt size={26} />
              Accra-Ghana
            </li>
            <li className="flex gap-2 p-2">University Of Ghana</li>
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
          @Copyright 2023.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer1;
