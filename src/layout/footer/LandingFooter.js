import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

function LandingFooter() {
    return(
        <Fragment>
             {/* <!--copyright section start--> */}
             <div className="event copyright flex">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="link-horizontal d-flex align-content-lg-center h-100">
                                <ul>
                                    <li>
                                        <a class="center-content" href="#">
                                            {/* <i class="fa fa-facebook"></i> */}
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            {/* <i class="fa fa-twitter"></i> */}
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            {/* <i class="fa fa-instagram"></i> */}
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="center-content" href="#">
                                            {/* <i class="fa fa-google"></i> */}
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p class="copyright-text text-end text-white">© 2023 Royalty. All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--copyright section end--> */}
        </Fragment>
    )
}

export default LandingFooter;