import Footer from "../Components/footer";
import Sidebar from "../Components/sidebar";

export default function HelpAndSupport() {
    return(
      <>

      <div id="Parent">
          <div id="sidebarPositioning" >
              <Sidebar/>
          </div>

          <div id="sidebarContentPositioning">
              

              <Footer/>    
          </div>

      </div>
  
      </> 
    ) ;   
}