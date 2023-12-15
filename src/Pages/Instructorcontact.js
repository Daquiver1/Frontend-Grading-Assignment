import React from "react";
import Landing_header from "../Components/pageheader";
import Landing_footer from "../Components/pagefooter";

function Instructorcontact(){
    const buttonify1=() =>{
        alert('Email sent Successfully!');
};
    return (
            <div>
                <Landing_header/>
                <p className="text-[30pt] font-bold text-[#232355]">Instructor Contact Page.</p>
                <p className="text-[15pt]">                        
                    Whether you have questions, need clarifications, or seek guidance on resolving missing grade concerns,our Instructor Contact Page is your direct link to communicate with our dedicated teaching staff regarding any missing grades in your academic profile.
                </p>
                <p className="text-[30pt] font-bold text-[#191970] ml-[500px]">The Instructors.</p>
                <div className="mt-[20px] text-[15pt] text-[#242222]">
                    <div className="flex shadow-lg bg-[#f3e5e5] ">
                        <div className="grid">
                            <img className="w-[285px] h-[270px] " src="../Media_Files/drjamal.jpg"/>
                        </div>
                        <div className="grid ml-[75px]">
                            <p className="text-[17pt]">Dr. Jamal Deen Abdulai</p>
                            <p>Specialization: Wireless networks<br/></p>
                            <p>Courses Instructed: <br/> DCIT 275 <br/> DCIT 345 <br/> DCIT 467
                                </p>
                            
                        </div>
                        <div className="grid ml-[135px]">
                            <p className="text-[17pt]">Contact Details</p>
                            <a href="mailto:jdabdulai@gmail.com"><p>&#x2709;: jdabdulai@gmail.com</p></a>
                            <p>&#128222;: +233 4655567845</p>
                            <p>&#128222;: +233 456766855</p>
                            <p>&#x1F4CD;: Chemistry department LT1</p>
                        </div>
                    </div>
                    <div className="flex mt-[15px] shadow-xl">
                        <div className="grid"><img className="w-[285px] h-[270px]" src="../Media_Files/ebenezeransong.jpg"/></div>
                        <div className=" ml-[55px] grid">                      
                            <p className="text-[17pt]">Dr. Edward Danso Ansong<br/></p>
                            <p>Specialization: Application security<br/></p>
                            <p>Courses Instructed:<br/>
                                DCIT 235<br/>
                                DCIT 325<br/>
                                DCIT 410
                            </p>
                        </div>
                        <div className="grid ml-[133px]">
                            <p className="text-[17pt]">Contact Details</p>
                            <a href="mailto:edward.danso@vvu.edu.gh"><p>&#x2709;: edward.danso@vvu.edu.gh</p></a>
                                <p>&#128222;: +233 556784545</p>
                                <p>&#128222;: +233 356785532</p>
                                <p>&#x1F4CD;: Math Deparment Rm 15</p>
                        </div>
                    </div>
                    <div className="flex mt-[15px] bg-[#f3e5e5] shadow-xl">
                        <div className="grid"><img className="w-[285px] h-[270px]" src="../Media_Files/ebenezerowusu.jpg"/></div>
                        <div className="grid ml-[45px]">
                            <p className="text-[17pt]">Dr. Ebenezer Owusu<br/></p>
                            <p>Specialization: Computer Vision<br/></p>
                            <p>Courses Instructed:<br/>
                                DCIT 215<br/>
                                DCIT 335<br/>
                                DCIT 420<br/>
                            </p>
                        </div>
                        <div className="grid ml-[160px]">
                        <p className="text-[17pt] ">Contact Details</p>
                                <a href = "mailto:eowusu@ug.edu.gh"><p>&#x2709;: eowusu@ug.edu.gh</p></a>
                                <p>&#128222;: +233 556784532</p>
                                <p>&#128222;: +233 356785521</p>
                                <p>&#x1F4CD;: Chemistry department LT2</p>
                        </div>
                    </div>
                <hr/>
                <hr/>
                    <div className="flex shadow-xl mt-[15px]">
                        <div className="grid"><img className="w-[285px] h-[270px]" src="../Media_Files/juliusludu.jpg"/></div>
                        <div className="grid ml-[45px]">
                            <p className="text-[17pt]">Mr Julius Ludu</p>
                            <p>Specialization Data Analysis</p>
                            <p>Courses Instructed:<br/>
                                DCIT 265<br/>
                                DCIT 355<br/>
                                DCIT 480<br/>
                                </p>
                        </div>
                        <div className="grid ml-[179px]">
                        <p className="text-[17pt]">Contact Details</p>
                            <a href="mailto:jludu@ug.edu.gh"><p className="mt-[25px]">&#x2709;: jludu@ug.edu.gh</p></a>.
                                <p>&#128222;: +233 556784599</p>
                                <p>&#128222;: +233 356785599</p>
                                <p>&#x1F4CD;: Chemistry department LT3</p>
                        </div>
                    </div>
                    <div className="flex shadow-xl bg-[#f3e5e5] mt-[15px]">
                        <div className="grid"><img className="w-[285px] h-[270px]" src="../Media_Files/markatta.jpeg"/></div>
                        <div className="grid ml-[45px]">
                        <p className="text-17pt">Mr. Mark Atta Mensah</p>
                            <p>Specialization: Artificial Intelligence</p>
                            <p>Courses Instructed:<br/>
                                DCIT 275<br/>
                                DCIT 325<br/>
                            DCIT 410<br/>
                            </p>
                        </div>
                        <div className="grid ml-[109px]">
                        <p className="text-[17pt]">Contact Details</p>
                                <a href="mailto:mamensah@ug.edu.gh"><p>&#x2709;: mamensah@ug.edu.gh</p></a>
                                <p>&#128222;: +233 556784565</p>
                                <p>&#128222;: +233 356785325</p>
                                <p>&#x1F4CD;: Chemistry department LT8</p>
                        </div>
                    </div>
                    <div className="flex shdow-xl mt-[15px]">
                        <div className="grid"><img className="w-[285px] h-[270px]" src="../Media_Files/michsoli.webp"/></div>
                        <div className="grid ml-[45px]">
                            <p className="text-[17pt]">Dr. Michael Agbo Soli</p>
                            <p>Specialization:Software Engineering</p>
                            <p>Courses Instructed:<br/>
                                DCIT 205<br/>
                                DCIT 315<br/>
                                DCIT 464<br/>
                                </p>
                            </div>
                        <div className="grid ml-[99px]">
                        <p className="17pt">Contact Details</p>
                        <p>
                            <a href = "mailto:masoli@ug.edu.gh">&#x2709;: masoli@ug.edu.gh</a><br/></p>
                                <p>&#128222;: +233 557867845<br/></p>
                                <p>&#128222;: +233 356787855<br/></p>
                                <p>&#x1F4CD;: Chemistry department LT10<br/></p>
                
                        </div>
                    </div>
                </div>
                <div className="bg-[#f1f1f5] p-2 ml-[350px] shadow-xl mt-[35px] w-[660px] h-[500px]">
                <form className="grid ml-[45px] mb-[100px] mt-[15px]">
                    <p className="text-[19pt] ml-[133px] font-bold text-[#191970]">Instructor Email Form</p>
                    <div className="mt-[3px]">
                        <label className="text-[15pt]" for="Course name">Instructor Email:</label>
                        <input type="text" className="ml-[30px] w-[300px] border-[2px]" placeholder='Enter Instructor Email....' />
                    </div>
                    <div>
                        <label className="text-[15pt] ml-[5px] mt-[3px]" for="Course name">Email Title:</label>
                        <input type="text"  className="ml-[73px] w-[300px] border-[2px]" placeholder="Email Title..." />
                    </div>
                    <div className="grid mt-[10px]">
                        <label className="text-[15pt]" for="Course name">Content:</label>
                        <textarea cols="10" rows="10" className="w-[550px] mt-1 border-[4px]" placeholder='Enter the content of the email.......' />
                    </div>
                
                <button id="sendbutton" onClick={buttonify1} className= "font-semibold text-green-50 bg-[#346754] rounded-xl ml-[210px] mt-[10px] w-[150px]">Send</button>
                </form>
                <div className="ml-[-336px] mb-[-15px]">
                    <Landing_footer/>
                </div>
            </div> 
            </div>
    )
}

export default Instructorcontact;