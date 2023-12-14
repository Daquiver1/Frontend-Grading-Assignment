import { Fragment } from "react";

const SupportSection = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
}


export default SupportSection;