import React from "react";
import { Link } from "react-router-dom";




const Content = () =>{
    return(
        <>
            <p className="Content">
                Click 
                    <Link to="/Pages/MissingGradeReport"> here </Link>
                to report your missing grade
            </p>
        </>
    )
}

const Grade = () =>{
    return (
        <>
           
                <div className="grade-table" >
                    <table>
                        <thead>DETAILED GRADES</thead>
                        <tr>
                            <th>COURSE</th>
                            <th>GRADE</th>
                            <th>DATE UPLOADED</th>
                        </tr>
                        <tr>
                            <td>DCIT201</td>
                            <td>A</td>
                            <td>22/10/24</td>
                        </tr>
                        <tr>    
                            <td>DCIT203</td>
                            <td>A</td>
                            <td>19/10/24</td>
                        </tr>
                        <tr>
                            <td>DCIT205</td>
                            <td>A</td>
                            <td>15/10/24</td>
                        </tr>
                        <tr>
                            <td>DCIT207</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr> 
                            <td>DCIT209</td>
                            <td>A</td>
                            <td>1/11/24</td>
                        </tr>
                        <tr>
                            <td>MATH223</td>
                            <td>A</td>
                            <td>15/11/24</td>

                        </tr>
                        <tr>
                            <td>UGRC210</td>
                            <td>A</td>
                            <td>22/12/24</td>

                        </tr>
                                                
                    </table>
                   
                </div>
                <Content />
        </>
    )
}


export default Grade;