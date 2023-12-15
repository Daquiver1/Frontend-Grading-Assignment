import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <>
        <footer className='footer-start'>
        <div class="footer-main">
        <div>
            <Link to = "/landingpage"><span class="formated">PRECEDENCE</span></Link><br />
            College of Basic And Applied Science <br />
            School of Physical And Mathematical Science <br />
            Opposite Mathematics Department <br />
            Phone: +233-501-382-035 <br />
            Email: dsc@ug.edu.gh
        </div>
        <div class="admin">
           <Link to = "/dashboard"><span class="formated">DASHBOARD</span></Link><br />
        Undergraduate 
        Graduates <br />
        International Students
    </div>
    <div>
       <Link to = "/contact"><span class="formated">CONTACT</span></Link><br />
        Head of Department <br />
        Department Secretary <br />
        Staff <br />
        Computer Science Students Association
    </div>
</div>
    <div class="copyright">
        COPYRIGHT &COPY;  2023 DCS | UG All rights resevered
        </div>
</footer>

        </>
    );
}


export default Footer;

