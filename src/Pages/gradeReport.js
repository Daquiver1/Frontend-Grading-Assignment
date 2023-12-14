import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";

export default function GradeReport() {
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
    );    
}