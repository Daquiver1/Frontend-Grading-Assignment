import React from "react";
import "./sidebar.css"
import Logo from '../asserts/ghana-logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideBar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <img src={Logo} className="logo"/>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">UserProfile</p>
                    <li>
                        <AccountCircleIcon />
                        <span>Profile</span>
                    </li>
                    <p className="title">REPORT</p>
                    <li>
                        <NotificationsNoneOutlinedIcon />
                        <span>Alerts and Notifications</span>
                    </li>
                    <li>
                        <ReportGmailerrorredOutlinedIcon />
                        <span>Report Missing Grade</span>
                    </li>
                    <p className="title">SETTINGS</p>
                    <li>
                        <SettingsSharpIcon />
                        <span>Settings</span>
                    </li>
                    <p className="title">LOGOUT</p>
                    <li>
                        <ExitToAppIcon />
                        <span>LogOut</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default SideBar;