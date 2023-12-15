import React from "react";
import LandingFooter from "../Components/pagefooter";
import LandingHeader from "../Components/pageheader";

function Gradereport(){
    return (
        <div>
                 <LandingHeader/>
            <div>
                <p className="text-[23pt] text-[#191970] font-bold">Student Grade Report</p>
                
            </div>
            
            <div className="mb-[-100px] ml-[15px]">
            <LandingFooter/>
            </div>
        </div>
    )
}

export default Gradereport;