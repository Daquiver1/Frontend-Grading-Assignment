import React from "react";


const Grade = () =>{
    return (
        <>
            <div className="gradedetail">
                <div className="grade-table">
                    <table>
                        <thead>DETAILED GRADES</thead>
                        <tr>
                            <th>COURSE</th>
                            <td>DCIT201</td>
                            <td>DCIT203</td>
                            <td>DCIT205</td>
                            <td>DCIT207</td>
                            <td>DCIT209</td>
                            <td>MATH223</td>
                            <td>UGRC210</td>
                        </tr>
                        <tr>
                            <th>GRADE</th>
                            <td>A</td>
                            <td>A</td>
                            <td>A</td>
                            <td>N/A</td>
                            <td>A</td>
                            <td>A</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <th>DATE UPLOADED</th>
                            <td>22/10/24</td>
                            <td>19/10/24</td>
                            <td>15/10/24</td>
                            <td>N/A</td>
                            <td>1/11/24</td>
                            <td>15/11/24</td>
                            <td>22/12/24</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}


export default Grade;