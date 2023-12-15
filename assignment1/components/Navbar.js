import React from "react";
import Image from "next/image";
import logo2 from "../public/logo2.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white">
            <Image
              src={logo2}
              className="w-[10] h-[10]"
              width={60}
              height={60}
              alt="logo"
            />
          </div>

          <div className="space-x-4">
            <Link href="/grade" className="text-white hover:text-gray-300">
              Grade
            </Link>
            <Link href="/help" className="text-white hover:text-gray-300">
              Help
            </Link>
            <Link
              href="/login"
              className="text-black rounded-xl cursor-pointer bg-white p-3 "
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
