// Landing Page
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';

const DashboardLayout = ({ title, children }) => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='p-4 w-[80vw]'>
                <div className='bg-teal-200'>{title}</div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;  