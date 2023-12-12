import React from "react";

const Landing_header = () => {
    return (
        <div className="flex mr-0 shadow-md">
            <img src="/Media_Files/unilogo.png" alt="University Logo" className=" w-52 h-auto mr-96 "></img>
            <div className="float-left ml-96">
            <nav className="mt-2 mr-0 ml-28">
                <ul className="flex justify-between">
                    <a href="login.js"><button className="p-2 w-[100 px] font-bold text-green-50 bg-purple-500 px-5 hover:shadow-lg mr-2 rounded-[50px]">Log Out</button></a>
                    <a href="help.js"><button className="p-2 font-bold bg-purple-500 text-green-50 px-5 rounded-[50px] hover:shadow-lg">Help</button></a>
                </ul>
            </nav>
            </div>
            
        </div>
    )
        
        
    
    
    
}

export default Landing_header