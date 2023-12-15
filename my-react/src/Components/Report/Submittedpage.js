import image from '../images/check.png';
import { NavLink } from 'react-router-dom';

const Submittedpage = () => {
    return ( <div className="">
        <div className="z-[10rem] pt-24 flex items-center justify-center  w-screen h-screen ">
           <div className="">
           <div className="image w-[20rem] md:w-full">
                <img src={image} alt="" />
            </div>
            <div className="flex items-center justify-center pt-8">
                <h2 className='text-2xl capitalize'>Form submitted successfully.</h2>
            </div>
            <div className="capitalize flex items-center justify-center py-3 rounded-xl mt-4 bg-[#f39c12] w-[7rem] mx-auto">
                <NavLink to={'/'}>Back to home</NavLink>
            </div>
           </div>
        </div>
    </div> );
}
 
export default Submittedpage;