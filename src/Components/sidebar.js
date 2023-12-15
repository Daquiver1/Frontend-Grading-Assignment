import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function 
() {
  return (
    <>
    <div className='container' id="sidebarDiv">
        <div className='row'>
            <div className='bg-success col-auto col-md-2.5 min-vh-100 d-flex justify-content-between flex-column'>
                <div>
                    <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3'>
                        <span className='ms-1 fs-4 d-none d-sm-inline'><h2> Missing Grades </h2> </span>
                    </a>
                    <hr className='text-secondary d-none d-sm-block'/>
                    <ul class="nav nav-pills nav-tabs flex-column ">
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="/Home" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-house'></i>
                                <span className='ms-3 d-none d-sm-inline'>Home</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-1" >
                            <a href="/Dashboard" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-speedometer2'></i>
                                <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                            </a>
                        </li>
                        
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="/GradeReport" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-table'></i>
                                <span className='ms-3 d-none d-sm-inline'>Grade Report</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="/MissingGrade" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-patch-question'></i>
                                <span className='ms-3 d-none d-sm-inline'>Missing Grade</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="/ContactUs" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-bi bi-person-lines-fill'></i>
                                <span className='ms-3 d-none d-sm-inline'>Contact</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="/HelpAndSupport" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-people'></i>
                                <span className='ms-3 d-none d-sm-inline'>Help and Support</span>
                            </a>
                        </li>
                            
                    </ul>
                </div>
                <div class="dropdown open">
                    <a
                        class="text-decoration-none text-white dropdown-toggle p-3"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <h4><i className='bi bi-person-circle'></i><span className='ms-3 d-none d-sm-inline'>Mandem</span></h4>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <a class="dropdown-item" href="#"><span className='d-sm-inline'>1</span>
                        <span className='d-none d-sm-block'> Profile </span></a>
                        <a class="dropdown-item" href="#"><span className='d-sm-inline'>2</span>
                        <span className='d-none d-sm-block'> Setting </span></a>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    
        
    </>
    
  )
}
