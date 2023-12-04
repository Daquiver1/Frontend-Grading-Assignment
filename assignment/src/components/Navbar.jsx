import { useState } from "react";
import Button from "./button";
const  Nav = () => {
    let links = [
        {name:"Home",link:"/"},
        {name:"Dashboard",link:"/"},
        {name:"Grade Report",link:"/"},
        {name:"Missing Grade Form",link:"/"},
        {name:"Instructor Contact",link:"/"},
        {name:"Help and Support",link:"/"},
    ];
    let [open,setOpen]=useState(false);
    return ( 
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-3xl cursor-pointer flex items-center font-sans text-blue-700">
                     <span className="text-3xl text-black mr-1 pt-2">
                     <ion-icon name="library-outline"></ion-icon>
                </span>
                    Welcome
                    </div>
                    <div onClick={() => setOpen(!open)} className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open?'close':'grid-outline'}></ion-icon>  
                    </div>
                    
                  <ul className={`md:flex items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
                  {
                    links.map((link)=>(
                        <li key={link.name} className="md:ml-4 text-1xl md:my-0 my-6">
                            <a href={link.link} className="text-blue-700 hover:text-yellow-600 duration-500" >{link.name}</a>
                        </li>
                    ) )
                  }
                  <Button>Login</Button>
                    </ul>  
            </div>
        </div>
     );
}
 
export default Nav ;