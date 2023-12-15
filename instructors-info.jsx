import "./instructors-info-styles.css"
import Header from "./ms-header";
import Footer from "./ms-footer";

function Instructors(){
  return(
    <div>
      <Header />
      <div className="t-styles">
      <h1 className="h-info">Instructors Information</h1>
      <table>
      <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>E-mail</th>
        <th>Credit Hours</th>
        <th>Course</th>
        <th>Office-hours</th>
        <th>Lecture-time</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Paul Nii Takyie</td>
          <td>pnt@ug.edu.gh</td>
          <td>3</td>
          <td>DCIT 201</td>
          <td>none</td>
          <td>Mondays, 1:30pm - 3:30pm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dwumfour Aziz</td>
          <td>adwumfour@ug.edu.gh</td>
          <td>3</td>
          <td>DCIT 203</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michaael Agbo Tettey Soli</td>
          <td>msoli@ug.edu.gh</td>
          <td>3</td>
          <td>DCIT 205</td>
          <td>Mondays 2:30-4:30</td>
          <td>Mondays 7:30-9:20</td>
        </tr>
        <tr>
          <td>4</td>
          <td>DCOP Samuel Winful </td>
          <td>anyanfo@gmail.com </td>
          <td>3</td>
          <td>DCIT 207</td>
          <td>none</td>
          <td>Thursday, 730 am to 9.20 am </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Kenneth Dadedzi</td>
          <td>jkansong@ug.edu.gh</td>
          <td>3</td>
          <td>MATH 223</td>
          <td>Room12, Math Department</td>
          <td>Mondays, 11:30am - 1:30pm</td>
        </tr>
        <tr>
          <td>6</td>
          <td>P. Boakye-Sekyerehene</td>
          <td>pboakye-sekyerehene@ug.edu.gh</td>
          <td>3</td>
          <td>CBAS 210</td>
          <td>Contact via Email</td>
          <td>Contact via Email</td>
        </tr>
      </tbody>
    </table>
    </div>
    <Footer />
    </div>
    
  );
}
export default Instructors;