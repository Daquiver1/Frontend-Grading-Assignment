import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dashboard.css'
//import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from './SideBar';
import Home from './Home';

const Dashboard = () => {
    return(
        <>
            <div className='container-fluid bg-secondary min-vh-100 sidebarContainer'>
                <div className='row'>
                    <div className='col-2 bg-white vh-100'>
                    <SideBar />
                    </div>
                    <div className='col-10 '>
                        <Home />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;