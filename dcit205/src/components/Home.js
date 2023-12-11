import React from 'react'
import "./Home.css";
import system from '../Assets/system.jpg';
import loginpic from '../Assets/loginpic.png';
import bg from '../Assets/bg.jpg';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Missing Grade Report System</h1>
            <p>Welcome to Our Website</p>
            <a href="#learn-more">Learn More</a>
        </header>
        <div>
            <Navbar />
        </div>
        <section className="head">
            <div className="container">
                <div className='head-content'>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to our Missing Grade Reporting System, designed with students in mind to provide a seamless experience for tracking and reporting grades that may not be accurately recorded in their academic profiles. We understand the importance of having an efficient and transparent system to manage grades, and our platform aims to simplify the process for students.
                        Embarking on your academic journey is an exciting and challenging endeavor, and here at our institution, we recognize the significance of accurate and transparent academic records. In the pursuit of academic excellence, we understand that students rely on a reliable and efficient system to track and manage their grades. As such, we are proud to introduce our innovative Missing Grade Reporting System, a platform crafted with the sole purpose of empowering students to take control of their academic narratives.
                        At the heart of our system is a commitment to student success and well-being. We recognize that discrepancies in academic records can create unnecessary stress for students. The Missing Grade Reporting System is a proactive solution designed to alleviate these concerns and provide a streamlined process for addressing missing or inaccurately recorded grades.
                        We believe in fostering a collaborative and supportive educational environment, and the Missing Grade Reporting System exemplifies this commitment. By offering a user-friendly interface and a range of features tailored to meet the needs of our diverse student body, we aim to enhance the overall academic experience.
                        In an age where technology plays a pivotal role in education, our platform leverages the latest advancements to provide a seamless and interactive user experience. Whether you're a freshman navigating your first semester or a senior preparing to graduate, our system is designed to cater to the unique needs of each student, ensuring that everyone can make the most of their academic journey.
                        As we continue to strive for excellence in education, the Missing Grade Reporting System stands as a testament to our dedication to student success, transparency, and continuous improvement. We invite you to explore the various features of the system and take advantage of the tools provided to enhance your academic experience. Together, we can create a more informed and empowered student body, contributing to a thriving educational community. Welcome to a new era of  academic record management—welcome to the Missing Grade Reporting System.
                    </p>
                    <div >
                        <img className="head-image" src={ system } alt=""  />
                    </div>
                </div>
            </div>
        </section>
        <div className="contain">
            <section className='login'>
                <div>
                    <img className="login-image" src={ loginpic } alt=""  />
                </div>
                <div className="login-content">     
                    <h2>Login To Track And Report Missing Grade</h2>
                    <p>
                        Explore our platform and experience the difference.
                        Welcome to the gateway of your academic journey! The login page is your secure entry point into the Missing Grade Reporting System, designed to ensure the confidentiality and integrity of your academic information. Here, students can confidently input their unique credentials - their Student ID and PIN - to gain access to a personalized and protected space. Our authentication process, while a simulation for security purposes, mirrors the importance we place on safeguarding your academic records. Behind this digital door lies a comprehensive dashboard where you can view your current grades, receive alerts for any missing grades, and engage with the robust features designed to enhance your academic experience. Step into the realm of your educational progress by logging in and unlocking the tools that empower you on your academic journey
                        <br></br><br></br>Click The Link Below To Login
                    </p>
                    <a href="./loginform.js"><button>Login</button></a>
                </div>
          
             </section>
        </div>
        <section>
            <div className="feature">
                <h2>Fill Out Forms</h2>
                <p>
                    As you navigate through the Missing Grade Reporting System, our user-friendly interface ensures a seamless and efficient experience when filling out forms. Whether reporting a missing grade or reaching out for support, our forms are intuitively designed to capture the necessary details while minimizing complexity. The Missing Grade Form page provides a structured layout, prompting you to input essential information such as the course name, instructor details, expected grade, and an explanation field. Your input is vital to initiate the process of addressing any missing grades promptly. Likewise, on the Help and Support Page, our contact form simplifies the process of reaching out for technical assistance. We value your feedback and inquiries, and our forms are crafted to ensure a streamlined and secure interaction, facilitating effective communication between you and our support team. Your participation in completing these forms contributes to the continuous improvement of our system and enhances the overall user experience. <br></br><br></br>
                    Click Below To Fill Form            
                </p>
                <a href='./Forms.js'><button>Forms</button></a>
            </div>
            <div>
                <img className="forms-image" src={ bg } alt=""  />
            </div>
        </section>

        <section id="learn-more">
            <h2>Learn More About Us</h2>
            <p>
                Discover the heart and mission behind our Missing Grade Reporting System by delving into the intricacies of who we are and what drives us. At the core of our initiative is a commitment to student success, transparency, and academic excellence. Learn more about the dedicated team behind the development of this system, their passion for empowering students, and the innovative solutions we bring to the realm of academic support. Explore our values, goals, and the collaborative spirit that propels us forward. By getting to know us better, you'll gain insights into the foundations of our commitment to fostering a positive and efficient environment for students to track and report their academic progress. Join us on this journey to enhance the educational experience and create a more connected and informed academic community
            </p>
            <a href="#contact-us">Contact Us</a>
        </section>

        <section id="contact-us">
       
            <h2>Contact Us</h2>
            <p>
                The Instructor Contact page lists instructors along with their contact details. <br></br>To enhance communication, a simulated email feature allows students to compose messages to their instructors.<br></br> This function is a mock-up, providing a secure environment for users to practice the communication process.
            </p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
     
        <footer>
            <p>&copy; 2023 Our Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Home
