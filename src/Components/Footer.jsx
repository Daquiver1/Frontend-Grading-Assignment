import { FaExternalLinkAlt } from 'react-icons/fa';
export const Footer = () => {
    const quicklinks = [
    {id: 1 ,  link : 'University of Ghana info'},
    {id: 2 ,  link : 'University of Ghana links'},
    {id: 3 ,  link : 'OSAP'},
    {id: 4 ,  link : 'OSCA'},
    {id: 5 ,  link : 'Regional Fairs and information sessions'},
    {id: 6 ,  link : 'Undergraduate application'},
    ]
return(
    <div className="footer">
        <div className="footerbox">
            <h3>Getting help</h3>
            <p><a href="#">Contact us</a></p>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br />
            <h4>Copyright © 2019-{new Date().getFullYear()} | All Rights Reserved</h4>
        </div>
        <div className="footerbox">
        <h3>More Information</h3>
        <p><a href="">About this website</a></p>
        <p><a href="">Privacy statement</a></p>
        <p><a href="">Sitemap</a></p>
        </div>
        <div className="footerbox">
            <h3>Quick links</h3>
           {quicklinks.map((item) => {
            return <p key={item.id}><a href="#" target="_blank" rel="noopener noreferrer">{item.link}
             <FaExternalLinkAlt /></a></p>
           }) }
              
        </div>
 

    </div>
)
}