import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer1 from "./component/Footer1";

function App() {
  return (
     
        <div className="text-[#232590] bg-fixed  bg-cover bg-center h-full w-full" style={{ backgroundImage: 'url("/layered-waves-haikei.svg")' }}>
        
        <Navbar />
       
        <div className="w-full xl:max-w[1250px] mx-auto py-4"> 
          <Hero/>
      
        </div>
    
        <div>
        <Footer1/>
    
        </div>
     
    
    
       
    
      </div>
 

  );
}

export default App;
