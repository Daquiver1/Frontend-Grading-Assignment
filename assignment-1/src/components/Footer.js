

export default function Footer(){

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="w-full flex flex-col gap-2 place-items-center text-ugBlue  border-t-2 border-t-gray-100">
            <img className="w-[200px] mt-8" src="/img/grade-repo.png" />
            <p className="mb-6">Copyright &copy; {year} Graderepo, University of Ghana</p>
            <ul className="flex gap-4 font-bold mb-8">
                <li className="hover:text-ugGold cursor-pointer duration-150">Grade Report</li>
                <li className="hover:text-ugGold cursor-pointer duration-150">Missing Grade Form</li>
                <li className="hover:text-ugGold cursor-pointer duration-150">Instructor Contacts</li>
                <li className="hover:text-ugGold cursor-pointer duration-150">Help & Support</li>
            </ul>
        </footer>
    )
}