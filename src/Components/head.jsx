import Header from "./Header"
import image1 from './pic1.jpeg'
import image2 from './pic2.jpeg'
import image3 from './pic3.jpeg'
import image4 from './pic4.jpeg'
function Head(){

    return(
        <>
        <div className='welcome-message'>
           <div className="welcome-text"> 
                <h1>WELCOME</h1>
                <p>Welcome to our website for finding missing grades! We understand the importance of keeping track of academic progress, and we're here to assist you in locating any missing grades in a quick and convenient manner. Whether you're a student or an educator, our platform aims to simplify the process of identifying and rectifying any missing or incomplete grades. With our user-friendly interface, you can easily search for missing grades, ensuring that all necessary information is accounted for and no progress is overlooked. Begin today and experience the ease and efficiency of our grade-finding tool. Happy searching! <br /> <br /> <button type="button" class="btn btn-dark">Get Started</button></p>
            </div> 
        
            <div className='welcome-images'>
                <p>Hurry! Sign in to get started</p>
                <img src={image1} alt='image'className='image1'></img>
                
            </div>
        </div>
            <div className="content-1">
                <img src={image2} alt="image" />
                <div className="content-1-txt">
                    <h2>Streamlined Grade Tracking</h2>
                    <p>Our website is designed to streamline the process of tracking and managing grades. We provide a user-friendly interface that allows students, teachers, or administrators to easily access and search for missing grades</p>
                </div>
                

            </div>
            <div className="welcome-message" id="welcome-2">
                <div className="welcome-text" id="text">
                    <h2>Customizable Search Options</h2>
                    <p>Our platform offers customizable search options to cater to different needs. Users can search for missing grades based on various criteria, such as specific courses, assignments, dates, or student IDs. This flexibility ensures that you can narrow down your search and locate missing grades efficiently.</p>
                </div>
                <div className="welcome-images">
                    <img src={image3} alt="image" className="image1" id="image1"/>
                </div>
            </div>
            <div className="content-1" id="content">
                <img src={image4} alt="image" />
                <div className="content-1-txt">
                    <h2>Collaboration and Communication</h2>
                    <p>Our platform encourages collaboration and communication between students, teachers, and administrators. Users can leave notes, comments, or messages related to missing grades, fostering a transparent and efficient workflow.</p>
                </div>

            </div>
        </>
    )
}
export default Head