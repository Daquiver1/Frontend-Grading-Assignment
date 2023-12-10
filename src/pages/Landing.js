/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import imageDown from '../assets/images/image-down.png';
import pic1 from '../assets/images/1.jpg';
import CaptivatingSpeakers from '../assets/images/CaptivatingSpeakers.png';
import LandingHeader from "../layout/header/LandingHeader";
import LandingFooter from '../layout/footer/LandingFooter';


function Landing(){
    return (
        <Fragment>
            
            <div className="loader-wrapper">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <LandingHeader showLogin={true}/>


            {/* <!-- header Start--> */}
            <section class="event header" id="home">
                <div class="header3 bg">
                    <div class="event-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                    <div class="center-text">
                                        <div class="text-center w-100">
                                            <div class="h1-margin">
                                                <h1>Missing Grade Report System
                                                </h1>
                                            </div>
                                            <div class="wedding-time">
                                                <div class="row">
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">A</span><span
                                                                            class="days gradient-text">80 - 100</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">B</span><span
                                                                            class="days gradient-text">70 - 79</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">C</span><span
                                                                            class="days gradient-text">60 - 69</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">D</span><span
                                                                            class="days gradient-text">50 - 59</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">E</span><span
                                                                            class="days gradient-text">40 - 49</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 col-6">
                                                        <div class="event-content wedding-content">
                                                            <div class="count">
                                                                <div class="counter-container">
                                                                    <h2 class="text-white text-end">
                                                                        <span class="days-text">F</span><span
                                                                            class="days gradient-text">0 - 39</span>
                                                                    </h2>
                                                                </div>
                                                                <div class="set-border-left"></div>
                                                                <div class="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="text-center link-horizontal">
                                                <a class=" btn btn-default back-white text-uppercase border-not" href="/login">Login
                                                    Here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="set-bottom set-abs">
                        <a class="center-content down" href="#">
                            <img alt="" class="scroll-down" src={imageDown}/>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- header end--> */}


            {/* <!--subscribe section start--> */}
            <section className="event subscribe subscribe-3 set-relative">
                <div class="circle">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="title title3">
                                <div class="main-title">
                                    <h2><span>Sup</span>port</h2>
                                </div>
                                <div class="sub-title">
                                    <p>For resolution of missing grades,
                                        <span>
                                            select 'Contact Me' below.
                                        </span>
                                        Enter necessary information,
                                        <span>
                                            and our support team will
                                        </span> swiftly address your query.
                                        <span>Thank you for reaching out!</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                            <div class="subscribe">
                                <div class="center-content">
                                    <div class="form-group">
                                        <div class="flex">
                                            <input class="form-control text-capitalize" name="email"  placeholder="Please Enter Your Email Address" type="email"/>
                                            <div class="button-primary">
                                                <button class=" btn btn-default primary-btn text-white text-capitalize"
                                                    type="submit">
                                                    contact me
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--subscribe section end--> */}


            {/* <!-- about section Start--> */}
            <section className="event about bg bg-img bg-about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="title title3">
                                <div class="main-title">
                                    <h2 class=" text-white">About System</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1 col-md-6">
                            <div class="text-end">
                                <div class="announcer-img">
                                    <img alt="" className="img-fluid" src={pic1}/>
                                    <img alt="" className="img-fluid" src={pic1}/>
                                    <img alt="" className="img-fluid" data-tilt data-tilt-max="3" data-tilt-perspective="500"
                                        data-tilt-speed="400" src={CaptivatingSpeakers}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 offset-xl-1 col-lg-7 col-md-6">
                            <div class="abouts center-text">
                                <div class="format">
                                    <div class="format-small-text">
                                        <h6 class="text-white borders-before text-uppercase"><span>System function</span></h6>
                                    </div>
                                    <div class="format-head-text">
                                        <h3 class="about-font-header text-white">Missing Grades Report System</h3>
                                    </div>
                                    <div class="format-sub-text">
                                        <p class="about-para">
                                            Welcome to our responsive education portal! We prioritize student success by offering a secure and intuitive system. 
                                            Navigate seamlessly through our landing page for an overview.
                                            Our login ensures a safe experience, with simulated authentication for added security. 
                                        </p>
                                        <p class="about-para">
                                            The dashboard provides a snapshot of your grades and alerts for missing ones.
                                            Dive into detailed grade reports and easily report missing grades through our user-friendly form. 
                                            Connect with instructors via the dedicated page and explore our help and support section for FAQs and simulated technical support. 
                                            Join us on a journey of academic excellence!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section end--> */}


           <LandingFooter/>


        </Fragment>
    );
}

export default Landing;