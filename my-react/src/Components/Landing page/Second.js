import image2 from '../images/screen.jpg';

const Second = () => {
    return ( 
        <div className="w-full flex md:flex-row flex-col mt-12 md:mt-0 ">
            <div className="md:w-2/4 flex md:flex-row flex-col  md:justify-center md:items-center ">
                <div className="d flex justify-center md:justify-none">
                    <img className='md:w-[16rem] w-4/5' src={image2} alt="" />
                </div>
            </div>

            <div className="md:w-2/4">

                <div className="text md:w-[70%] p-12 space-y-4 md:mt-8 md:ml-8">
                    <p> <span className="font-semibold">Effortless Tracking:</span> Easily input your course details and let our system do the rest.We'll keep a watchful eye on your grades, so you don't have to.</p>

                    <p>
                        <span  className="font-semibold">Instant Notification:</span>
                        Receive real-time updates when a grade is posted or if anything seems amiss.No more surprises or missed deadlines.
                    </p>
                    <p>
                        <span  className="font-semibold">
                            User-Friendly Interface:
                        </span>
                        Our intuitive design ensures that navigating the system is a breeze,even for the tech novices among us.
                    </p>

                    <p>
                        <span  className="font-semibold">Secure and Confidential:</span>
                        Your academic data is precious, and we treat it as such. Our system prioritizes your privacy,using state-of-the-art security measures.
                    </p>

                    <p>
                        Ready to take control of your academic destiny?
                        Sign up now and bid farewell to stress of missing grades.Your peace of mind is just a click away!
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Second;