import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return (
        <nav className="sticky flex justify-between md:grid grid-cols-[1fr,750px,1fr] items-center w-full h-15 py-5 px-8">
            <a href="/"><img className="w-[175px]" src="/img/grade-repo.png" alt="logo"/></a>
            <div className="hidden md:block p-[2px] border-2 border-ugBlue rounded-full">
                <ul className="flex font-bold text-ugBlue">
                    <Link to='/dashboard' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>DASHBOARD</li></Link>
                    <Link to='/grades' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>MY GRADES</li></Link>
                    <Link to='/missing-grades' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>REPORT GRADE</li></Link>
                    <Link to='/instructors' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>INSTRUCTORS</li></Link>
                    <Link to='/faq' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>HELP</li></Link>
                </ul>
            </div>
            <div className="ml-auto flex items-center">
                <Link to='/login'><button className="primary-button duration-150">LOGIN</button></Link>
                <span  onClick={()=>{document.getElementById('mobile-menu').style.display = 'block'}} className="block md:hidden ml-4 text-ugBlue"><FontAwesomeIcon className="w-[30px] h-[30px]" icon={faBars} /> </span>
            </div>
            <div id="mobile-menu" className="hidden fixed w-screen h-screen p-8 top-0 left-0 bg-ugBlue">
                <ul className="flex flex-col gap-10 justify-center items-center h-full w-full font-bold text-white">
                    <Link to='/dashboard' className="hover:font-bold text-2xl cursor-pointer duration-150"><li className="">DASHBOARD</li></Link>
                    <Link to='/grades' className="hover:font-bold  text-2xl cursor-pointer duration-150"><li>MY GRADES</li></Link>
                    <Link to='/missing-grades' className="hover:font-bold  text-2xl cursor-pointer duration-150"><li>REPORT GRADE</li></Link>
                    <Link to='/instructors' className="hover:font-bold text-2xl cursor-pointer duration-150"><li>INSTRUCTORS</li></Link>
                    <Link to='/faq' className="hover:font-bold text-2xl cursor-pointer duration-150"><li>HELP</li></Link>
                    <button className="bg-white rounded-full text-2xl text-ugBlue px-5 py-3" onClick={()=>{document.getElementById('mobile-menu').style.display = 'none'}}>CLOSE</button>
                </ul>
            </div>
        </nav>
    )
}