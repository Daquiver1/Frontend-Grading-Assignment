/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import imageDown from '../../assets/images/image-down.png';


const LandingMainSection = () => {
    return (
        <Fragment>
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
                                                <a class="btn-login back-white text-uppercase border-not" href="/login">Login
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
        </Fragment>
    );
}


export default LandingMainSection;