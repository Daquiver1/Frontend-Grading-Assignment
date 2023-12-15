
import React from 'react';
import LOGO from "../assets/u logo.jpg"
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';




const DashboardLayout = ({ title, children }) => {
    return (
        <>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-400">
                    <Link to="/login" className="flex items-center ps-2.5 mb-5">
                        <img
                            src={LOGO}
                            className="h-6 me-3 sm:h-7"
                            alt="UG Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">
                            Dashboard Page
                        </span>
                    </Link>
                    <ul className="space-y-2 font-medium">
                        {/* Add your list items here */}
                        <li>
                            <Link to="/dashboard" className="flex items-center space-x-2.5">
                                <span className="text-gray-600 ">
                                    <HiOutlineDocumentReport />
                                </span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gradereport" className="flex items-center space-x-2.5">
                                <span className="text-gray-600 ">
                                    <HiOutlineDocumentReport />
                                </span>
                                <span>Grade Report</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/missing" className="flex items-center space-x-2.5">
                                <span className="text-gray-600 ">
                                    <HiOutlineDocumentReport />
                                </span>
                                <span> Missing Grade Report</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center space-x-2.5">
                                <span className="text-gray-600 ">
                                    <MdLogout />
                                </span>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <h1>Dashboard /{title}</h1>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
};


export default DashboardLayout;
