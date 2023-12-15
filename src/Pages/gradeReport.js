import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";
import GradeReportPageBody from "../Components/GradeReportPageBody";

export default function GradeReport() {
    return(
<>

<div id="Parent">
    <div id="sidebarPositioning" >
        <Sidebar/>
    </div>

    <div id="sidebarContentPositioning">      
            <div class="container card text-bg-success" id="generalpgbg" >
                <GradeReportPageBody/>
                  
            </div>
            <Footer/> 
    </div>

</div>
   

</>
    );    
}