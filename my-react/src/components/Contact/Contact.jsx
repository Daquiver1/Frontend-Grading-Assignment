import Footer from "../Footer";
import Navbar from "../Navbar";


const Contact = () => {
    return (
        <div className="">
            
             {/*navbar*/}
             <header>
                <Navbar/>
            </header>
       <div className="w-full h-screen bg-white">
        <div className="p-4">
        
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