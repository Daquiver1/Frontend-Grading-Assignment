import { Link } from "react-router-dom"


export default function Footer(){

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="w-full flex flex-col gap-2 place-items-center text-ugBlue  border-t-2 border-t-gray-100">
            <img className="w-[200px] mt-8" src="/img/grade-repo.png"  alt="GradeRepo Logo"/>
            <p className="mb-6">Copyright &copy; {year} Graderepo, University of Ghana</p>
            <ul className="flex flex-wrap justify-center gap-4 font-bold mb-8">
                <Link to="/grades" className="hover:text-ugGold cursor-pointer duration-150"><li>My Grades</li></Link>
                <Link to="/missing-grades" className="hover:text-ugGold cursor-pointer duration-150"><li>Missing Grade Form</li></Link>
                <Link to="/instructors" className="hover:text-ugGold cursor-pointer duration-150"><li>Instructor Contacts</li></Link>
                <Link to="/faq" className="hover:text-ugGold cursor-pointer duration-150"><li>Help & Support</li></Link>
            </ul>
        </footer>
    )
}