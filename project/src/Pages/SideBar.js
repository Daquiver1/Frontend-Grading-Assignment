import React from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



const SideBar = () => {
    return(
        <div className='bg-white sidebar p-2'>
            <div className='m-2'>
                <i className='bi bi-bootsrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-2'><b>Welcome</b></span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span className='fs-5'>Dashboard</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span className='fs-5'>Home</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-table fs-5 me-3'></i>
                    <span className='fs-5'>Grade Records</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span className='fs-5' >Report Missing Grade</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span className='fs-5'>Contact your Instructor</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span className='fs-5'>Logout</span>
                </a>
            </div>
        </div>
    )
}
export default SideBar;