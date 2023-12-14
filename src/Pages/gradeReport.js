import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";
import MissingGradeForm from "../Components/missingGradeForm";

export default function GradeReport() {
    return(
<>

<div id="Parent">
    <div id="sidebarPositioning" >
        <Sidebar/>
    </div>

    <div id="sidebarContentPositioning">
        
        <MissingGradeForm/>
        <Footer/>    
    </div>

</div>
   

</>
    );    
}