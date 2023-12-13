import Footer from "../Footer";
import Navbar from "../Navbar";

const Dashboard = () => {
    return (
        <div className="">
             {/*navbar*/}
             <header>
                <Navbar/>
            </header>
       <div className="w-full h-screen bg-white">
        
        </div>
        {/*footer*/}
        <footer>
            <Footer/>
         </footer>
            
        </div>
    );

}

export default Dashboard;