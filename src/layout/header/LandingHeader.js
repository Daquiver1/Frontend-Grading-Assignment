/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import logo from '../../assets/images/logo/main-logo-1.png';


const LandingHeader = ({showLogin}) => {
    return (
        <Fragment>
            <header className="event loding-header nav-abs custom-scroll nav-lg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav>
                                <a className="d-inline-block m-r-auto" href="/">
                                    <img alt="" className="img-fluid" src={logo}/>
                                </a>
                                <div className="responsive-btn">
                                    <a className="toggle-nav" href="#">
                                        <i className="fa fa-bars text-white"></i>
                                    </a>
                                </div>
                                <div className="navbar m-l-auto" id="togglebtn">
                                    <div className="responsive-btn">
                                        <a className="btn-back" href="#">
                                            <h5>back</h5>
                                        </a>
                                    </div>
                                    <ul className="main-menu">
                                        <li>
                                            <a href="/">home</a>
                                        </li>
                                        <li>
                                            <a class="dropdown" href="/help-and-support">Help and Support</a>
                                            <ul>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="collection.html">Contact</a></li>
                                            </ul>
                                        </li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        {showLogin && 
                                            <li className="mega-menu">
                                                <div className="text-center link-horizontal">
                                                    <a className=" btn btn-default back-white text-uppercase border-not"
                                                        href="/login">Login</a>
                                                </div>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}


export default LandingHeader;