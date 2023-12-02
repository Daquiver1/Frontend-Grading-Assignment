import React,{useState} from 'react'
import { Link } from "react-router-dom";
import niceImage from '../assets/nice.png';
import { MdOutlineArrowForwardIos, MdCopyright } from "react-icons/md";


const navigation = [
    { name: 'Home', href:"/index" },
    { name: 'Instructor Contact', href: '/contact' },
    { name: 'Help and Support', href: '/support' },
    { name: 'Grade Report', href: '/report' },
  ]

const LandingPage = () => {

    return (
        <div className="bg-[#e0f2fe]">
            <header className="absolute inset-x-0 top-0 z-50 ">
                <nav className="flex items-center justify-between p-6 lg:px-8 h-[80px] bg-[#e0f2fe] fixed w-full" aria-label="Global" >
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
            <div className="relative px-6 pt-0 lg:px-8" >
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next release of results.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        If you are a prospective student, not registered at this institution, please select the following option:
                    </h1>
                    <img src={require("../assets/nice.png")} className="h-full" />
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Apply, Register, Change personal information, get academic and other information and make payments.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <footer className='bg-[#000435]'>
                <div className="sm:w-[80%] sm:my-0 sm:mx-auto sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:h-[55%] sm:border-b-2 sm:border-b-white sm:flex sm:flex-row sm:justify-center sm:pt-24 sm:pl-0 pl-3 flex flex-col pt-16">
                <div className="h-auto sm:ml-12 sm:mt-0 mt-6 sm:pt-0 pt-5">
                    <span className="text-white sm:ml-3 mb-5 sm:text-lg font-bold sm:mb-9 text-lg">
                        University of Ghana
                    </span>
                    <div className="sm:flex sm:flex-col sm:leading-relaxed sm:mt-3">
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        About Us
                    </span>
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        Blog
                    </span>
                    </div>
                </div>
                <div className="sm:h-auto sm:ml-12 sm:pt-0 pt-5">
                    <span className="text-white sm:ml-3 mb-5 text-lg font-bold">Legal</span>
                    <div className="sm:flex sm:flex-col sm:leading-relaxed sm:mt-3">
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        Privacy Policy
                    </span>
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        Terms & Conditions
                    </span>
                    </div>
                </div>
                <div className="sm:h-auto sm:ml-12 sm:pt-0 pt-5">
                    <span className="text-white sm:ml-3 mb-5 text-lg font-bold">Support</span>
                    <div className="sm:flex sm:flex-col sm:leading-relaxed sm:mt-3">
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        Contact Us
                    </span>
                    <span className="text-white flex items-center">
                        <MdOutlineArrowForwardIos className="mr-1" />
                        FAQs
                    </span>
                    </div>
                </div>
                </div>
                <div className="sm:display-none sm:border-none border-2 w-[80%] my-0 mx-auto mt-12 rounded">
                </div>

                <div className="flex flex-col items-center">
                <div className="flex justify-center my-7">
                    <img
                    src={require("../assets/twitterblack.png")}
                    alt=""
                    className="w-7 ml-5"
                    />
                    <img
                    src={require("../assets/Google.png")}
                    alt=""
                    className="w-7 ml-5"
                    />
                    <img
                    src={require("../assets/Apple Logo.png")}
                    alt=""
                    className="w-7 ml-5"
                    />
                </div>
                <div className="flex items-center">
                    <MdCopyright className="text-black bg-white rounded-full mr-2" />
                    <span className="text-white">
                    2023 UG|Report.All rights reserved
                    </span>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
