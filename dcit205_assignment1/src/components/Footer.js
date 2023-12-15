import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate();
    
    return ( 
        <div className="footer">
        
            <img src={"../images/output-onlinetools.png"} alt="University of Ghana Logo" width="186" height="60" />
            
            <div className="footer-links">

            <a  class="previous round" onClick={()=>navigate(-1)}> &#8249; Previous</a>
            <a  class="next round" onClick={()=> navigate(1)}>Next &#8250;</a>
            </div>
        <footer>
                <p >© 2023 University of Ghana. All rights reserved.</p>
            </footer>
        </div>
     );
}
 
export default Footer;