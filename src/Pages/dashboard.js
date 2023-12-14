import Sidebar from "../Components/sidebar"
import Footer from "../Components/footer"

export default function Dashboard() {
    return(
        <>
        <div>

        </div>
        
        <div id="Parent">
            <div id="sidebarPositioning" >
                <Sidebar/>
            </div>

                    <div id="sidebarContentPositioning">
                        <div class="container card text-bg-dark" id="signuppagebg" >
                        <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert">
                            <strong>Alert!</strong> You have <strong>1</strong> missing grade. Check Subject and fill <strong>Grade Report Form!</strong>.<strong> Thank You</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                
                        <h1 id="dashboardH2" >Your Grade Overview</h1>
                        <hr className='text-secondary '/>
                        <h2 id="dashboardH2" >Personal Information</h2>
                        <p id="dashboardp"><strong>Name:</strong> John Doe</p>
                        <p id="dashboardp"><strong>ID:</strong> 123456</p>
                        <p id="dashboardp"><strong>Major:</strong> Computer Science</p>

                        <h2 id="dashboardH2" >Current Semester</h2>
                        <p id="dashboardp"><strong>Semester:</strong> 2nd Semester 2023</p>

                        <table class="table table-secondary">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course</th>
                                <th scope="col">Name</th>
                                <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>CBAS 210</td>
                                <td>Academic Writing 2</td>
                                <td>A</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>DCIT 203</td>
                                <td>Digital and Logic System Design</td>
                                <td>Missing</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Math 223</td>
                                <td>Calculus II</td>
                                <td>B</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Stat 223</td>
                                <td>ELEMENTARY STATISTICAL METHODS</td>
                                <td>A</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>Stat 221</td>
                                <td>INTRODUCTORY PROBABILITY I </td>
                                <td>A</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>DCIT 205</td>
                                <td>MULTI MEDIA AND WEB DESIGN </td>
                                <td>A</td>
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>DCIT 201</td>
                                <td>Programing 1</td>
                                <td>A</td>
                                </tr>
                                
                            </tbody>
                            </table>

                        <h2 id="dashboardH2" >GPA</h2>
                        <p id="dashboardp"><strong>Semester GPA:</strong> 3.67</p>
                        <p id="dashboardp"><strong>Cumulative GPA:</strong> 3.67</p>

                        <h2 id="dashboardH2" >Academic Standing</h2>
                        <p id="dashboardp"><strong>Standing:</strong> Good Standing</p>

                        <h2 id="dashboardH2" >Advisor</h2>
                        <p id="dashboardp"><strong>Advisor Name:</strong> Mark Attah</p>
                        <p id="dashboardp"><strong>Advisor Email:</strong> mattah@staff.ug.gh</p>


                        </div>
                        
                        <Footer/>    
                    </div>
       
        </div>
           
        
        </>
    )    
}