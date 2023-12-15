import React from "react";
import "./homepage.css"
import Footer from "./footer";
import Header from "./header";
import Picture from "./teacher research.jpg"

export default function homepage(){
    return (
        <div>
            <Header/>
            <img src={Picture} className="main-pic" />    
            <h1> 
                WELCOME TO OUR OFFICIAL GRADING WEBSITE
            </h1>           
            <div className="page-info">
                <div className="introduction-div">
                    <h2>Introduction</h2>
                    <p>
                        Introducing our new grading system for websites! In today's digital age, having a well-designed and user-friendly website is crucial for success. Our grading system provides a comprehensive evaluation of a website's performance, usability, and overall quality.With our grading system, website owners and developers can gain valuable insights into the strengths and weaknesses of their online presence. It utilizes a robust set of criteria to assess various aspects of a website, including design aesthetics, navigation, responsiveness, content quality, and search engine optimization.Our grading system goes beyond simple numerical scores by offering actionable recommendations for improvement. It highlights specific areas where enhancements can be made, empowering website owners and developers to optimize their sites and deliver exceptional user experiences.

                    </p>
                </div>
                <div className="purpose-div">
                    <h2>Purpose</h2>
                    <p>
                    The purpose of our grading system for websites is to provide website owners and developers with a comprehensive assessment of their website's performance and quality. By evaluating various aspects such as design, usability, responsiveness, content quality, and search engine optimization.The grading system offers an objective evaluation of a website's strengths and weaknesses. It provides valuable feedback on areas that need improvement, enabling website owners and developers to enhance the user experience and overall quality of their website.The grading system allows website owners to benchmark their website against industry standards and best practices. It provides a comparative analysis, highlighting how the website fares against competitors or similar websites, thereby identifying areas for differentiation and improvement.The grading system encourages a culture of continuous improvement by providing a clear roadmap for enhancing the website's performance and quality. It empowers website owners and developers to make data-driven decisions and prioritize areas for improvement, ensuring their website remains competitive and up-to-date with evolving industry standards.
                    </p>
                </div>
                <div className="grading-div">
                    <h2>Grading System</h2>
                    <p>
                    Grades in a grading system for a website provide a standardized way to evaluate and measure the performance and quality of websites. They offer a concise and comparative representation of how well a website meets certain criteria and industry standards.Grades in a grading system enable website owners, developers, and evaluators to assess the overall performance of a website. They provide a clear indication of how well the website fares in different areas such as design, usability, responsiveness, content quality, and search engine optimization.Grades allow for benchmarking and comparison against industry standards and best practices. Website owners can compare their website's grade with competitors or similar websites to gain insights into their relative performance and identify areas for improvement.Grades help website owners set goals for improving their website's performance. By tracking their website's grades over time, they can monitor progress and evaluate the effectiveness of their optimization efforts.Grades provide a simple and understandable way to communicate the evaluation results to stakeholders. They offer a quick snapshot of the website's performance, allowing website owners to easily share the evaluation outcomes with clients, team members, or potential customers.
                    </p>

                </div>
            </div>
            <br />
            <Footer/>
        </div>
        
    )
}