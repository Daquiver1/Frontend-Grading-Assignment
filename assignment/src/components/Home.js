import { Link } from "react-router-dom";
const Home = () => {
    
    return ( 
        <>
        <div> 
        <h1 className="pt-[80px] text-center font-sans text-4xl font-bold text-blue-700">MISSING GRADE REPORT SYSTEM</h1>
        <p className="md:flex flex  p-[40px] pl-5 font-sans text-xl text-left">
            Welcome to the Missing Grade Report System, we understand the importance of stating on top of your academic progress and know how stressful having a missing grade can be a source of stress and uncertainty. <br/> That's why we created a simple and efficient platform to help you report and submit missing grades and ensure your academic journey is smooth.

        </p>
        <h2 className="font-sans  text-4xl pl-5 text-center font-bold py-1">How It Works</h2>
        <ul className="  p-[85px] pl-5 pt-0 font-sans text-xl text-center">
            <li className="font-bold py-3 text-blue-700 text-center">Login:</li> Login into the page by entering your student ID as your Username and your pin as the password. 
            <li className="font-bold py-3 text-blue-700 text-center">Report/Add:</li> Go to Dashboard to check missing grades, update lost grades or report missing grades to the lecturer.
            <li className="font-bold py-3 text-blue-700 text-center">Submit: </li>Submit updated changes to the lecturer to have the necessary changes made to  your grade. <br />For further enquiries you can visit the <Link to="/instructor contact" className="text-blue-700 hover:text-yellow-500">Instructor Contact</Link> page or the <Link to="/help and support" className="text-blue-700 hover:text-yellow-500">Help and Support </Link> page to have your concerns addressed.
        </ul>
        </div>
        <div>
        <h2 className="font-sans  text-4xl pl-5 text-center font-bold py-4">Login and Setup Your Account Today</h2> 
        <p className="font-sans text-xl pl-10 pb-20" >
            Don't let missing grades be a source of stress. Login to MGRS today and experience a seamless,empowered,and informed academic journey.Your success is our top priority.
        </p>
        </div>
        </>
     );
}
 
export default Home;