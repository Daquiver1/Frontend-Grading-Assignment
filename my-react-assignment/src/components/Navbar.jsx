import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/grading icon.png"
//  const DesktopMenus = [
// {
//     name: "Home",
//     href: "#",
// },
// {
//     name: "About",
//     href: "#",
// },
// {
//     name: "Course Grade",
//     href: "#",
// },
// {
//     name: "Login",
//     href: "#",
// }
// ]
const Navbar = () => {
return <header className='bg-gray-300/80 shadow-lg'>
<div className="container">
    <nav className='flex justify-between items-center'> 
<a href="#" className='text-gray-800 font-bold text-3xl'>
    <img src={logo}alt="logo" className='h-10 inline mr-1' />
    GradeUp
</a>
{/* {Desktop menu} */}
<div className='hidden sm:block'>
        <ul className='flex justify-center items-center gap-4'>
    <li><a href="/home" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Home</a></li> 
    <li><a href="/dashboard" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Dashboard</a></li> 
    <li><a href="/gradereport" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Grade Report</a></li>
    <li><a href="/missinggrade" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Missing Grade</a></li>  
    <li><a href="/instructorcontact" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Instructor Contact</a></li>  
    <li><a href="/login" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Login</a></li>  
    <li><a href="helpsupport" className='text-black hover:text-blue-700 px-4 py-4 inline-block-select none font-semibold'>Help and Support</a></li>  
    </ul>
</div>
    </nav>
</div>
</header>
};

export default Navbar;