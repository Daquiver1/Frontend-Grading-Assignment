import { Link } from "react-router-dom";


export default function Header(){
    return (
        <nav className="sticky grid grid-cols-[1fr,750px,1fr] items-center w-full h-15 py-5 px-8">
            <a href="/"><img className="w-[175px]" src="/img/grade-repo.png" alt="logo"/></a>
            <div className="p-[2px] border-2 border-ugBlue rounded-full">
                <ul className="flex font-bold text-ugBlue">
                    <Link to='/dashboard' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>DASHBOARD</li></Link>
                    <Link to='/grades' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>MY GRADES</li></Link>
                    <Link to='/missing-grades' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>REPORT GRADE</li></Link>
                    <Link to='/instructors' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>INSTRUCTORS</li></Link>
                    <Link to='/faq' className="w-[12rem] h-full rounded-full text-center p-2 hover:bg-ugBlue hover:text-white cursor-pointer duration-150"><li>HELP</li></Link>
                </ul>
            </div>
            <Link className=" ml-auto " to='/login'><button className="primary-button duration-150">LOGIN</button></Link>
        </nav>
    )
}