const Home = () => {
    
    return ( 
        <div> 
        <p className="md:flex flex  p-[85px] pl-5 font-sans text-xl text-left">
            Welcome to the Missing Grade Report System, we understand the importance of stating on top of your academic progress and know how stressful having a missing grade can be a source of stress and uncertainty. <br/> That's why we created a simple and efficient platform to help you report and submit missing grades and ensure your academic journey is smooth.

        </p>
        <h2 className="font-sans  text-4xl pl-5 text-center font-bold py-4">How It Works</h2>
        <ul className="  p-[85px] pl-5 pt-0 font-sans text-xl text-center">
            <li className="font-bold py-2 text-blue-700">Login:</li> Login into the page by entering your student ID as your Username and your pin as the password. 
            <li className="font-bold py-2 text-blue-700">Report/Add:</li> Go to Dashboard to check missing grades, update lost grades or report missing grades to the lecturer.
            <li className="font-bold py-2 text-blue-700">Submit: </li>Submit updated changes to the lecturer to have the necessary changes made to  your grade. <br />For further enquiries you can visit the <a className="text-blue-700"href="\">Instructor Contact</a> page or the <a className="text-blue-700 hover:" href="\">Help and Support </a> page to have your concerns addressed.
        </ul>
        </div>
     );
}
 
export default Home;