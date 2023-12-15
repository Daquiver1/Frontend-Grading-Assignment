/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LandingFooter = () => {
    return(
        <Fragment>
             <div className="event copyright flex mt-03">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="link-horizontal d-flex align-content-lg-center h-100">
                                <ul>
                                    <li>
                                        <a className="center-content" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="center-content" href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="center-content" href="#">
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="center-content" href="#">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="copyright-text text-end text-white">© {new Date().getFullYear()}{" "} Royalty. All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LandingFooter;