import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return(
        <div className="footer">
            <footer>
                <div className="row">
                    <div className="content">
                        <h3>About us</h3>
                        <p>University of Ghana, Legon Campus <br /> Department of Computer Science, <br /> opposite the Department of Mathematics</p>
                    </div>
                    <div className="content">
                        <h3>Our Services</h3>
                        <p>Software updates <br /> System updates <br /> Web development</p>
                    </div>
                    <div className="content">
                        <h3>Follow us</h3>
                        <p><FacebookIcon />Facebook <br /><InstagramIcon />Instagram <br /><TwitterIcon /> Twitter</p>
                    </div>
                    <div className="content">
                        <h3>Contact us</h3>
                        <p><CallIcon />+244 542 672 990 <br /><EmailIcon /> dcs@ug.du.gh</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;