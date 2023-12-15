import "./ms-footer-styles.css";

function Footer(){
  return(
    <footer>
      <h1 className="enquiries">for more enquiries</h1>
      <div className="foot">
        <div className="footer">
          <h3>contact us</h3>
          <p>+233 555 735 524</p>
          <p>send us e-mail</p>
          <p>yongmoni78@gmail.com</p>
        </div>
        <div className="footer">
          <h3>location</h3>
          <p>Univesity Of Ghana</p>
          <p>Department Of Computer Science</p>
          <p>Opposite Mathematics Department</p>
          <p>10 minutes drive from the main entrance</p>
        </div>
        <div className="footer">
          <h3>Helpful Links</h3>
          <ul>
            <a href=""><p>FAQs</p></a>
            <a href=""><p>Privacy Policy</p></a>
            <a href=""><p>Terms of Service</p></a>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <p>&copy; 2023 Missing Grades Report</p>
      </div>
    </footer>
    
  );
}

export default Footer;
