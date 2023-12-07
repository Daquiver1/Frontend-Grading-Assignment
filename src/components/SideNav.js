import { NavLink } from "react-router-dom";
import undraw_rocket from '../assets/icons/undraw_rocket.svg';
import { useContext } from "react";
import { StudentContext } from "../StudentContext";

const SideNar = () => {

    const { student, setStudent } = useContext(StudentContext);

    const isLogin = student.studentId !== "" ? true : false;

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">UG STUDENT REPORT SYS</div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0"/>

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Student Info
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#">
                <i className="fa fa-home"></i>
                <NavLink to="/">Home</NavLink>
            </a>
        </li>

        { isLogin ? (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-fw fa-table"></i>
                            <NavLink to="/grades">Grades Report</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-exclamation-triangle"></i>
                            <NavLink to="/report">Report Missing Grade</NavLink>
                        </a>
                    </li>
                </>
            ) : (
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-sign-in-alt"></i>
                        <NavLink to="/login">Login</NavLink>
                    </a>
                </li>
            )
        }

        {/* instructor Contact Page and Help and Support Page*/}

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Contact and Support
        </div>

        <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fa fa-phone"></i>
                <NavLink to="/contact">Contact Instructor</NavLink>
            </a>

            <a className="nav-link" href="#">
                <i className="fa fa-question-circle"></i>
                <NavLink to="/help">Help and Support</NavLink>
            </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src={undraw_rocket} alt="..."/>
            <p className="text-center mb-2"><strong>UG STUDENT REPORT Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>
    </ul>
    );
    }

export default SideNar;