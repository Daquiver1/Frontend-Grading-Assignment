import React from 'react';
import './styles.css';

function footer(){
    return(
        <footer>
     <div className="footContainer">
        <div className=" footyMargin">
            <div className="footContainer-col" >
                <div class="footContainer-col1" >
                    <h3 >Links</h3>
                    <ul class="footContainer-colList">
                        <li ><a href="">SAKAI</a></li>
                        <li><a href="">MISWEB</a></li>
                        <li><a href="">STS</a></li>
                        <li><a href="">UG WEBSITE</a></li>
                    </ul>
                </div>
            </div>
            <div class="footContainer-col">
                <div class="footContainer-col1">
                    <h3>ESSENTIALS</h3>
                    <ul class="footContainer-colList">
                    <li><a href="">HOMEPAGE</a></li>
                    <li><a href="">LOGIN</a></li>
                        <li><a href="">HELP & SUPPORT</a></li>
                        <li><a href="">DASHBOARD</a></li>
                        <li><a href="">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
     </div>
     <div class="footyMargin">
        <div class="footContainer-col1">
            <div>
                <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" />
            </div>
        </div>    
     </div>
     </div>

    </footer>


    )
}
export default footer;