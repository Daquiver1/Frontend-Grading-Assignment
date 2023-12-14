import Sidebar from "../Components/sidebar"
import Footer from "../Components/footer"

export default function ContactUs() {
    return(
        <>

            <div id="Parent">
                <div id="sidebarPositioning" >
                    <Sidebar/>
                </div>

                <div id="sidebarContentPositioning">
                    <h2 id="dashboardH2" >Lecturers With their respective Contacts</h2>
                    <table class="table table-secondary">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lecturer</th>
                            <th scope="col">Contact</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark Attah</td>
                            <td>02078222228</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Mr. Soli</td>
                            <td>0208140089</td>
                            
                            </tr>      
                        </tbody>
                    </table>

                    <Footer/>    
                </div>

            </div>
            

        </> 
    )    
}