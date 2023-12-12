import { useState } from 'react';
import {
    FaCaretDown,
} from 'react-icons/fa';
     
export const Leftpanel = () =>{
    const[showlist, setshowList] = useState(true);
    const Toggle = () =>{
        return(
            <div className='leftlinks'>
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Grade Report</a></li>
                <li><a href="#">Report</a></li>
                <li><a href="#">Instructor </a></li>
                <li><a href="#">Help and support</a></li>
            </ul>
        </div>
        )
    }
    const Form = () => {
        return (
            <div className='leftform'>
               <textarea name="" id="" cols="30" rows="20" placeholder='what would to like in addition to the home page?'></textarea>
            </div>
        )
    }
    return(
        <div className='leftpanel'>
            <div className='navbtn'  onClick={() => setshowList(!showlist)}>Navigation <FaCaretDown /></div>
           {showlist ? <Toggle /> :<Form />}
        </div>
    )
}