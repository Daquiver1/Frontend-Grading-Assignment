import { Fragment } from "react";
import CaptivatingSpeakers from '../../assets/images/CaptivatingSpeakers.png';
import pic1 from '../../assets/images/1.jpg';


const AboutSection = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
}


export default AboutSection;