import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";
import MissingGradeFormBody from "../Components/missingGradeFormBody";

export default function MissingGradeform() {
    return(
<>

<div id="Parent">
    <div id="sidebarPositioning" >
        <Sidebar/>
    </div>

    <div id="sidebarContentPositioning">
        
        <MissingGradeFormBody/>
        <Footer/>    
    </div>

</div>
   

</>
    );    
}