import "./Contact.css";
import img2 from "./images/contact.jpg";
import Footer from "./Component/Footer";

function Contact() {
  return (
    <>
      <div className="body">
        <div className="details">
          <ul>
            <h1> Get In Touch With Us</h1>
            <p className="sub">College of Basic & Applied Sciences</p>
            <li>cbasadmissions@ug.edu.gh </li>
            <li> P. O. Box LG 1195 Legon</li>
            <li>020 645 0182</li>
          </ul>
          <div className="detail">
            <ul>
              <h1> Also Contact Us:</h1>
              <li>+233 501 382 035</li>
              <li>+233 559 145 698</li>
              <li>dcs@ug.edu.gh</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <img className="img" src={img2} alt="pic" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
