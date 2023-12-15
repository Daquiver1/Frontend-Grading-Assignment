import React from "react";

const Landing = () => {
    return(
        <footer className="bg-[#4c4c4e] w-[1350px] mt-4 p-3 -ml-9 text-[13pt] text-white">
           <div className="flex">
            <div>
                <img src="/Media_Files/unilogo-footer.png"/>
            </div>
            <div className="ml-3 mt-0">
                <p className="font-bold text-[14pt]">
                    Location:
                </p>
                <p>
                    University of Ghana, Legon<br/>
                    Opposite the Mathematics department,<br/>
                    Adjacent to the RIPS building.
                </p>
            </div>
            <div className="ml-[150px] mt-0">
                <p className="font-bold text-[14pt]">
                    Contact Us;
                </p>
                <p>
                    &#128222;: +233 501 382 035<br/>
                    &#128222;: +233 559 145 698 <br/>
                    &#x2709;: <a href="mailto:dcs@ug.edu.gh">&nbsp;&nbsp;dcs@ug.edu.gh</a>
                </p>
            </div>
            <div>
            <div className="ml-[150px] mt-0">
                <p className="font-bold text-[14pt]">
                    Follow Us:
                </p>
                <div className="flex">
                    <a href="https://www.facebook.com/dcsug/"><img className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]"src="/Media_Files/facebook-logo.png" alt="Facebook"/></a><br/>
                    <a href="https://twitter.com/dcs_ug"><img className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]" src="/Media_Files/x-logo.png" alt="X"/></a><br/>
                    <a href="https://www.instagram.com/compssa_ug/"><img className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]" src="/Media_Files/instagram-logo1.jpg" alt="Instagram"/></a><br/>
                </div>
            </div>
            </div>
            </div>
        </footer>

    )
}

export default Landing;