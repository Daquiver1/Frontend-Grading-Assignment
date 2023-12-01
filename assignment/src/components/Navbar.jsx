const  Nav = () => {
    let links = [
        {name:"Home",link:"/"},
        {name:"Login",link:"/"},
        {name:"Dashboard",link:"/"},
        {name:"Grade Report",link:"/"},
        {name:"Missing Grade Form",link:"/"},
        {name:"Instructor Contact",link:"/"},
        {name:"Help and Support",link:"/"},
    ]
    return ( 
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-sans text-blue-700">
                     <span className="text-3xl text-black mr-1 pt-2">
                     <ion-icon name="library-outline"></ion-icon>
                </span>
                    Welcome
                    </div>
                  <ul className="md:flex items-center">
                  {
                    links.map((link)=>(
                        <li key={link.name} className="md:ml-4 text-1xl">
                            <a href={link.link} className="text-blue-700 hover:text-yellow-600 duration-500" >{link.name}</a>
                        </li>
                    ) )
                  }
                    </ul>  
            </div>
        </div>
     );
}
 
export default Nav ;