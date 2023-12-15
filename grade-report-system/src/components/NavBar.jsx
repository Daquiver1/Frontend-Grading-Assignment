
import {useState} from 'react'
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const reducedContent =
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-rich-black transition">
                <ul className="text-center tet-xl p-20">
                <Link to="Home">
                        <li className = "my-4 py-4 border-b border-rich-black hover:bg-rich-black hover:rounded ">Home</li>
                    </Link>
                    <Link to="Login">
                        <li className = "my-4 py-4 border-b border-rich-black hover:bg-rich-black hover:rounded ">Login</li>
                    </Link>

                    <Link to="Dashboard">
                        <li className = "my-4 py-4 border-b border-rich-black hover:bg-rich-black hover:rounded">Dashboard</li>
                    </Link>

                    <Link to="Grade-report">
                        <li className = "my-4 py-4 border-b border-rich-black hover:bg-rich-black hover:rounded">Grade Report</li>
                    </Link>

                    <Link to="Help">
                        <li className = "my-4 py-4 border-b border-rich-black hover:bg-rich-black hover:rounded">Help</li>
                    </Link>
                </ul> 
            </div>
        </>

    return (
        <nav>
            <div className="bg-rich-black w-full h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 absolute top-0">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>

                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal ">

                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy = {true} smooth = {true} to="./Login">
                                <li className = "hover:text-honolulu-blue transition   hover:border-b-2 border-honolulu-blue  cursor-pointer">Login</li>
                            </Link>

                            <Link spy = {true} smooth = {true} to="Dashboard">
                                <li className = "hover:text-honolulu-blue transition  hover:border-b-2 border-honolulu-blue  cursor-pointer">Dashboard</li>
                            </Link>

                            <Link spy = {true} smooth = {true} to="Grade-report">
                                <li className = "hover:text-honolulu-blue transition hover:border-b-2 border-honolulu-blue  cursor-pointer">Grade Report</li>
                            </Link>

                            <Link spy = {true} smooth = {true} to="Help">
                                <li className = "hover:text-honolulu-blue transition hover:border-b-2 border-honolulu-blue  cursor-pointer">Help</li>
                            </Link>
                        </ul>
                    </div>

                </div>
                <div>
                    {click && reducedContent}
                </div>

                <button className = "block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>


        </nav>

    );
}

export default NavBar