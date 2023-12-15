/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
                                    <img alt="main-logo" className="img-fluid" src={logo}/>
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
                                        <li id="dropdown-li"> 
                                            <a className="dropdown" href="/help-and-support">
                                                Help and Support &nbsp;
                                                <FontAwesomeIcon icon={faCaretDown} />
                                                </a>
                                            <ul id="dropdown-ul">
                                                <li><a href="/help-and-support#faq">FAQ</a></li>
                                                <li><a href="/help-and-support#contact">Contact</a></li>
                                            </ul>
                                        </li>
                                        {showLogin && 
                                            <li className="mega-menu">
                                                <div className="text-center link-horizontal">
                                                    <a className="btn-login back-white text-uppercase border-not"
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