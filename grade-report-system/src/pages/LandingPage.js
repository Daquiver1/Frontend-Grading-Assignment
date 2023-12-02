import React,{useState} from 'react'
import { Link } from "react-router-dom";
import niceImage from '../assets/nice.png';
import { MdOutlineArrowForwardIos, MdCopyright } from "react-icons/md";


const navigation = [
    { name: 'Home', href:"/index" },
    { name: 'Instructor Contact Page', href: '#' },
    { name: 'Help and Support Page', href: '#' },
    { name: 'Company', href: '#' },
  ]

const LandingPage = () => {

    return (
        <div className="bg-[#e0f2fe]">
            <header className="absolute inset-x-0 top-0 z-50 ">
                <nav className="flex items-center justify-between p-6 lg:px-8 h-[80px] bg-[#C0C0C0] fixed w-full" aria-label="Global" >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                            className="h-[100px] w-auto"
                            src={require("../assets/uglogo.png")}
                            alt=""
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default LandingPage
