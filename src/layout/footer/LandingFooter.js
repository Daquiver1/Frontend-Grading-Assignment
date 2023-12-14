/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LandingFooter = () => {
    return(
        <Fragment>
             <div className="event copyright flex mt-03">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="link-horizontal d-flex align-content-lg-center h-100">
                                <ul>
                                    <li>
                                        <a class="center-content" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p class="copyright-text text-end text-white">© {new Date().getFullYear()}{" "} Royalty. All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LandingFooter;