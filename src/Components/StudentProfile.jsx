import React, {props} from "react"
import profile from './profile.png'
function StudentProfile(props){
    return(
        <div className="student-about">
                <div className="profile-pic">
                    <img src={profile} alt="profile pic" />  
                </div>
                <div className="credi">
                    <p>Student Name: {props.name}</p>
                    <p>ID: {props.id}</p>
                    <p>Program: {props.program}</p>
                    <p>Level: {props.level}</p>
                </div>
            </div>
    )
}
export default StudentProfile