import React from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as ReactBootStrap from "react-bootstrap";




const SideBar = () => {
    return(
        <div className='bg-white sidebar p-2 SideNav'>
            <div className='m-2'>
                <i className='bi bi-bootsrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-2'><b>Welcome</b></span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span className='fs-5'>Dashboard</span>
            
                <ReactBootStrap.Nav.Link href="/Pages/Dashboard"><a className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span className='fs-5'>Home</span>
                </a></ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/Pages/GradeReport">   <a className='list-group-item py-2'>
                    <i className='bi bi-table fs-5 me-3'></i>
                    <span className='fs-5'>Grade Records</span>
                </a> </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/Pages/MissingGrade">  <a className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span className='fs-5' >Report Missing Grade</span>
                </a> </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/Pages/ContactInstructor"><a className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span className='fs-5'>Contact your Instructor</span>
                </a> </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/Pages/Login"> <a className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span className='fs-5'>Logout</span>
                </a></ReactBootStrap.Nav.Link>
            </div>
        </div>
    )
}
export default SideBar;