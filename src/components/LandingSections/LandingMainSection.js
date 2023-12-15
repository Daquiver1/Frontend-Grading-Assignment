/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import imageDown from '../../assets/images/image-down.png';


const LandingMainSection = () => {
    return (
        <Fragment>
            <section className="event header" id="home">
                <div className="header3 bg">
                    <div className="event-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                    <div className="center-text">
                                        <div className="text-center w-100">
                                            <div className="h1-margin">
                                                <h1>Missing Grade Report System
                                                </h1>
                                            </div>
                                            <div className="wedding-time">
                                                <div className="row">
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">A</span><span
                                                                            className="days gradient-text">80 - 100</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">B</span><span
                                                                            className="days gradient-text">70 - 79</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">C</span><span
                                                                            className="days gradient-text">60 - 69</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">D</span><span
                                                                            className="days gradient-text">50 - 59</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">E</span><span
                                                                            className="days gradient-text">40 - 49</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-6">
                                                        <div className="event-content wedding-content">
                                                            <div className="count">
                                                                <div className="counter-container">
                                                                    <h2 className="text-white text-end">
                                                                        <span className="days-text">F</span><span
                                                                            className="days gradient-text">0 - 39</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="set-border-left"></div>
                                                                <div className="set-border-bottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="text-center link-horizontal">
                                                <a className="btn-login back-white text-uppercase border-not" href="/login">Login
                                                    Here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="set-bottom set-abs">
                        <a className="center-content down" href="#">
                            <img alt="" className="scroll-down" src={imageDown}/>
                        </a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default LandingMainSection;