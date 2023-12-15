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
                    
                    <div class="container card text-bg-success" id="generalpgbg">
                        <div className="container" id="signinborder">
                        <h2 id="dashboardH2" >Lecturers With Their Respective Contacts</h2>
                        
                            <div>
                                <table class="table table-secondary " >
                                <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Lecturer</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact</th>

                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Mr.Mark Attah</td>
                                        <td>mattah@staff.ug.edu.gh</td>
                                        <td>02078222228</td>
                                        
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>Mr. Tetteh Agbo Soli</td>
                                        <td>tasoli@staff.ug.edu.gh</td>
                                        <td>0208140089</td>
                                        
                                        </tr>      
                                    </tbody>
                                </table>
                            </div>
                        

                    
                    <h2 id="dashboardH2" >Email a Lecturer</h2>
                    
                            <div class="d-grid gap-2 col-5">
                                <label for="inputPassword2" class="visually-visible">Email</label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="eg. ma**@staff.ug.edu.gh"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Reason</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="eg. Type your text here"></textarea>
                            </div>
                            <div class="mb-3">
                                <a className="btn btn-primary" id="submit-btn" href="/Dashboard" role="button">Send</a>
                            </div>
                        </div>

                    </div>
                                                

                    <Footer/>    
                </div>

            </div>
            

        </> 
    )    
}