// Landing Page
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';

const DashboardLayout = ({ title, children }) => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='p-4 w-[80vw]'>
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                    <div className="mr-6">
                        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                        <h2 className="text-gray-600 ml-0.5">{title}</h2>
                    </div>
                    {/* <div className="flex flex-wrap items-start justify-end -mb-3">
                        <button className="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Manage dashboard
                        </button>
                        <button className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Create new dashboard
                        </button>
                    </div> */}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;  