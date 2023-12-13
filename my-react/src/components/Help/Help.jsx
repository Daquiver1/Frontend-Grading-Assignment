import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero  from "./Hero";
import Support from "./Support"
const Help = () => {
    return (
        <div className="">
             {/*navbar*/}
             <header>
                <Navbar/>
            </header>
       <div className="w-full h-250vh bg-white">
        <div className="p-4">
        <Hero/>
        <Support/>
        </div>
        </div> 
        

         {/*footer*/}
         <footer>
            <Footer/>
         </footer>
            
        </div>
    );

}

export default Help;