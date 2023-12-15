import { Fragment } from "react";

const SupportSection = () => {
    return (
        <Fragment>
            <section className="event subscribe subscribe-3 set-relative">
                <div className="circle">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="title title3">
                                <div className="main-title">
                                    <h2><span>Sup</span>port</h2>
                                </div>
                                <div className="sub-title">
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
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                            <div className="subscribe">
                                <div className="center-content">
                                    <div className="form-group">
                                        <div className="flex">
                                            <input className="form-control text-capitalize" name="email"  placeholder="Please Enter Your Email Address" type="email"/>
                                            <div className="button-primary">
                                                <button className=" btn btn-default primary-btn text-white text-capitalize"
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
        </Fragment>
    );
}


export default SupportSection;