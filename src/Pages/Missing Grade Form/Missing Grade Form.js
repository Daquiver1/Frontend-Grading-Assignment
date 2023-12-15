import React from 'react'
import ".//Missing Grade Report.css"


const MissingGradeReport= () => {
  return <div class="container">
    <h1>FILL THIS</h1>
    
    <div className="contact-box">
      <div className="contact-left">
        <h3>send your request</h3>
        <form>
          <div className="input-row">
           <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="John Smith"></input>
           </div>
           <div className="input-group">
            <label>ID number</label>
            <input type="text" placeholder="11333159"></input>
           </div>
          </div>
          <div className="input-row">
           <div className="input-group">
            <label>Email</label>
            <input type="text" placeholder="johnsmith@st.ug.edu.gh"></input>
           </div>
           <div className="input-group">
            <label>subject</label>
            <input type="text" placeholder="course"></input>
           </div>
          </div>

          <label>Message</label>
          <textarea rows={5} placeholder="Your Message"></textarea>

          <button type="submit">Send</button>

        </form>
      </div>
      <div className="contact-right">
        <h3>Reach us</h3>
        <table>
          <tr>
            <td>Email</td>
            <td>dcs@ug.edu.gh</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+233501382035</td>
            <td>+233559145698</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>University OF Ghana, Legon Campus
Opposite Mathematics Department

</td>
          </tr>
        </table>
      </div>
    </div>
  </div>;
};
export default MissingGradeReport;
