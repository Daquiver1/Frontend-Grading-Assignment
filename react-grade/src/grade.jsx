import React from "react";
import Footer from "./footer";
import Header from "./header";
import"./grade.css"
import Picture from "./grades.jpg"


export default function Grade(){
    return(
        <div>
            <Header/>
            <img src={Picture} className="Grade-pic" />
            <div className="content">
                <h1>
                    GRADES
                </h1>
                <div className="student-details">
                    <div>
                        <p>
                            STUDENT NAME : FRANCIS DONKOR
                        </p>
                        <p>
                            STUDENT ID : 11332199
                        </p>
                    </div>
                    <div>
                        <p>
                            COURSE : INFORMATION TECHNOLOGY
                        </p>
                        <p>
                            LEVEL : 400
                        </p>
                    </div>
                </div>
                <div className="level-100-200">
                    <div >
                        <button class="button">
                            level 100
                        </button>
                        <div className="level">
                            <div>
                                <p>Critical Thinking and Practical Reasoning </p>
                                <p>	Introduction to Computer Science</p>
                                <p>Office Productivity Tools</p>
                                <p>	Computer Hardware Fund. and Circuits</p>
                                <p>Mathematics for IT Professionals</p>
                                <p>Academic Writing I</p>
                                <p>Introduction to Economics I</p>
                                <p>Introduction to Economics II</p>
                            </div>
                            <div>
                                <p>A</p>
                                <p>	B</p>
                                <p>A</p>
                                <p>	C</p>
                                <p>B+</p>
                                <p>A</p>
                                <p>B</p>
                                <p>C</p>
                            </div>
                        </div>
                    
                    </div>
                    <div>
                    
                        <p>
                            <button class="button"> level 200</button>
                        </p>
                        <div className="level">
                            <div>
                                <p>Digital and Logic Systems Design</p>
                                <p>Programming I</p>
                                <p>Multi Media and Web Design</p>
                                <p>Mobile Application Development</p>
                                <p>	Internship</p>
                                <p>Software Engineering</p>
                            </div>
                            <div>
                                <p>D</p>
                                <p>A</p>
                                <p>B+</p>
                                <p>A</p>
                                <p>	A</p>
                                <p>B+</p>
                            </div>
                    </div>
                        
                    </div>
                </div>
                <div className="level-300-400">
                    <div>
                        <p>
                            <button class="button"> level 300</button>
                        </p>
                        <div className="level">
                            <div>
                                <p>	IT Project Management</p>
                                <p>Principles of 3D Environment</p>
                                <p>Human Computer Interaction</p>
                                <p>	Data Structures and Algorithms II</p>
                                <p>	Programming II</p>
                                <p>Game Engine Architecture</p>
                                <p>	Database Management Administration</p>
                            </div>
                            <div>
                                <p>A</p>
                                <p>A</p>
                                <p>B</p>
                                <p>	D</p>
                                <p>	D+</p>
                                <p>A</p>
                                <p>	B</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        
                        <p>
                            <button class="button"> level 400</button>
                        </p>
                        <div className="level">
                            <div>
                                <p>Wireless Systems and Networks</p>
                                <p>	Compilers</p>
                                <p>	Data Mining and Warehousing</p>
                                <p>Information Visualization</p>
                                <p>	Project</p>
                                <p>Advanced Databases</p>
                                <p>	Computer Vision</p>
                            </div>
                            <div>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>N/A</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
           
            <br/>
            <Footer/>
        
        </div>
        

    )
}