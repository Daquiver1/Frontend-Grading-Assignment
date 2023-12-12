import Footer from "../Footer"
import Navbar from "../Navbar"
import Herosection from "./Herosection"





const Homepage = () => {
    return (
        <div className="">
            {/*navbar*/}
            <header>
                <Navbar/>
            </header>
         <Herosection/>

         {/*footer*/}
         <footer>
            <Footer/>
         </footer>
        </div>
    );

}

export default Homepage;