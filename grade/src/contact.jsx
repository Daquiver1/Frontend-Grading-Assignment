import React from "react";
import "./contact.css"
import Footer from "./footer";
import Header from "./header";
import Tutor from "./tutor.jpg"
import Soli from "./Soli.jpeg"
import Mark from "./Mark.jpeg"

export default function Contact(){
    return(
        <div>
            <Header/>
            <img src={Tutor} className="main-pic"  />
            <div className="body">
                <h1>
                    OVERVIEW OF INSTRUSTORS
                </h1>
                <h3>
                    Do you want to contact your instructors?
                </h3>
                <div className="tutor">
                    <div>
                        <h3>Name: MICHEAL SOLI</h3>
                        <img src={Soli} className="pic"/>
                    </div>
                    <div>
                        <h3> Course: Web Development</h3>
                        <p>
                        Web development refers to the process of building and maintaining websites or web applications. It involves a combination of skills, technologies, and tools to create and manage the structure, design, functionality, and performance of web content. Web development can be broadly categorized into two main components: front-end development and back-end development.
                        </p>
                    </div>
                    <div>
                        <h3> Contact</h3>
                        <p>Soli243@gmail.com</p>
                        <p>0236463578</p>
                    </div>
                </div>
                <div className="tutor">
                    <div>
                        <h3>Name: MARK ATTA</h3>
                        <img src={Mark} className="pic" />
                    </div>
                    <div>
                        <h3>Course: Software Development</h3>
                        <p>
                        Software development is the process of designing, creating, testing, deploying, and maintaining software applications or systems. It involves a systematic approach to building software to meet specific needs, whether for personal use, business purposes, or as part of a larger IT infrastructure. Software development encompasses various methodologies, programming languages, tools, and practices.
                        </p>
                    </div>
                    <div>
                        <h3> Contact</h3>
                        <p>Atamark34@gmail.com</p>
                        <p>0203463263</p>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}