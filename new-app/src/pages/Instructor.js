import grade from './grade.jpg';
import sender from './sender.png'
const Instructor = ( ) =>{
    return(
        <>
        <h2 style={{color:"#BD9C6C"}}>Instructors</h2>
        <br></br>
        <table style={{borderSpacing:"5px",borderColor:"#BD9C6C", borderWidth:"2px"}}>
            <tr>
                <th>Instructor Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>Patrick Agbo Sey</td>
                <td>patricksey@staff.ug.edu.gh</td>
                <td>+233-530-453-944</td>
                <td>Academic Writing II</td>
            </tr>
            <tr>
                <td>Nancy Myles</td>
                <td>Nancymyles@staff.ug.edu.gh</td>
                <td>+233-245-453-544</td>
                <td>Critical Thinking</td>
            </tr>
            <tr>
                <td>Solomon Aboagye</td>
                <td>soloaboagye@staff.ug.edu.gh</td>
                <td>+233-544-453-944</td>
                <td>Mathematics for IT Professionals</td>
            </tr>
            <tr>
                <td>Aziz Abdullah Dwamfuor</td>
                <td>Azizdwamfuor@staff.ug.edu.gh</td>
                <td>+233-215-453-544</td>
                <td>Digitl &amp; Logic system</td>
            </tr>
            <tr>
                <td>Soli Michael</td>
                <td>soliagbo@staff.ug.edu.gh</td>
                <td>+233-530-453-944</td>
                <td>Multimedia &amp; Web Design</td>
            </tr>
            <tr>
                <td>Paul Nii Tackie</td>
                <td>Paultackie@staff.ug.edu.gh</td>
                <td>+233-245-453-544</td>
                <td>Programming 1</td>
            </tr>
            <tr>
                <td>Mark Attah</td>
                <td>markattah@staff.ug.edu.gh</td>
                <td>+233-544-453-944</td>
                <td>Office Productivity Tools</td>
            </tr>
            <tr>
                <td>Ferdinand Katsriku</td>
                <td>fkatsriku@staff.ug.edu.gh</td>
                <td>+233-215-453-544</td>
                <td>Introduction to Computer Science</td>
            </tr>

        </table>
        <div>
            <h5>Send complains to instructor here</h5>
            <div>
                <img src={grade} alt="grade examples"style={{width:"100px"}}></img>
            </div>
            <div  >
                complains:<label ><input type='textbox' placeholder='complains'></input></label>
                
                <label>
             Send to:
                    <select name="selectedmail">
                        <option value="soli">soliagbo@staff.ug.edu.gh</option>
                        <option value="attah">markattah@staff.ug.edu.gh</option>
                        <option value="nii">Paultackie@staff.ug.edu.gh</option>
                        <option value="ferdinand">fkatsriku@staff.ug.edu.gh</option>
                        <option value="patrick">patricksey@staff.ug.edu.gh</option>
                        <option value="solo">soloaboagye@staff.ug.edu.gh</option>
                        <option value="nancy">Nancymyles@staff.ug.edu.gh</option>
                        <option value="aziz">Azizdwamfuor@staff.ug.edu.gh</option>
                    </select>
                </label>
                <button><img src={sender} style={{width:"10px"}} alt="sendbutton"></img></button>
            <hr />
            </div>
        </div>
        </>
    )

}
export default Instructor