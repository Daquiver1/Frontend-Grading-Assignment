import { Link } from "react-router-dom";
const Items = () => {
    return ( 
     <div className="flex justify-between p-5">
        <ul>
            <li>{'\u00a9'} 2023 Missing Grade Report System | All Rights Reserved</li>
            <li>For technical support please contact:</li>

            <li><span className="text-blue-700 hover:cursor-pointer hover:text-yellow-500 duration-75"><Link to="/">support@missinggradesystem.com</Link> </span>| (+233)549-467-625</li>
            <li>Follow us on social media:</li>

            <li className="text-blue-700 py-1 align-middle"> <span className="mr-1 align-middle ">
            <ion-icon name="logo-facebook"></ion-icon>
            </span>
            Facebook|  
             <span className="ml-1 mr-1 align-middle" >
            <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            LinkedIn | 
            <span className="ml-1 mr-1 pt-[6px]">
            <ion-icon name="logo-twitter"></ion-icon>
            </span>
            Twitter</li>
            
        </ul>
        <div className="p-1 ">
            <ul>
                <li>Address: LG 25 ,Legon,Accra</li>
                <li className="hover: text-blue-700 cursor-pointer">Privacy Policy| Terms of Service | Accessibility </li>
                <li>This system is designed and maintained by: <br /><span className="text-blue-700">Department of Computer Science|UG</span></li>
            </ul>
        </div>

     </div>
     );
}
 
export default Items;