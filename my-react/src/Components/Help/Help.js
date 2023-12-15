import Footer from "../Footer";
import Navbar from "../Navbar";
import Second from "./Second";
import Topsection from "./Topsection";

const Help = () => {
    return (  
        <div className="">
                  {/* navbar */}
            <header>
        <Navbar/>
      </header>

            <Topsection/>
            <Second/>

            <footer>
          <Footer/>
        </footer>
        </div>
    );
}
 
export default Help;