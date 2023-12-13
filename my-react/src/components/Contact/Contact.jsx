import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";

const Contact = () => {
    return (
        <div className="">
            
             {/*navbar*/}
             <header>
                <Navbar/>
            </header>
       <div className="w-full h-screen bg-white">
        <div className="p-4">
        <p className="text-[#00df9a] font-bold p-2">
        Click On Instructor's Name to view Contact details.
        </p>
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

export default Contact;