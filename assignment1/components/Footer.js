import React from "react";
import Image from "next/image";
import Img from "../public/logo.jpg";

function Footer() {
  return (
    <>
      <div className="flex justify-between m-5 p-5 bg-slate-600 text-white">
        <div>
          <Image
            src={Img}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            className="lg:h-[30vh] lg:w-[30vw] md:flex lg:flex"
          />
          <p className=" text-center m-3 "> Result Checker</p>
        </div>
        <div>
          <div className="flex-col justify-between">
            <div className="m-3">
              <a href="#">About</a>
            </div>
            <div className="m-3">
              <a href="#">FAQ</a>
            </div>
            <div className="m-3">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Footer;
