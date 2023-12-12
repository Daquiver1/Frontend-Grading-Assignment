import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero  from "./Hero";

const Help = () => {
    return (
        <div className="">
             {/*navbar*/}
             <header>
                <Navbar/>
            </header>
       <div className="w-full h-screen bg-white">
        <div className="p-4">
        <Hero/>
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