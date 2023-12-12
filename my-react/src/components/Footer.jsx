import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">UGGT</h1>
        <p className="py-4">contact us for help with tracking of reports</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
        <div className="">
          <h2>+233 25 364 3547 / +233 59 573 4637</h2>
        </div>
        <div>
          <h2>uggragetraker@gmail.com</h2>
        </div>
        <div>
          <h2>GW-8945-9678</h2>
        </div>
        <div>
          <h2>@uggragetraker on all Social Media</h2>
        </div>
      </div>
    </div>
  );
};
            
export default Footer;
