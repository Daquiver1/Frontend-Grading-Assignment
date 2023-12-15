import Button from "./Button";

function InstructorComp(props){
    return(
        <div className= "icontent">
            <p><span>Instructor Name:</span>{props.iname}</p>
            <p><span>Course Name:</span>{props.cname}</p>
            <p><span>Contact Email:</span> {props.email}</p>
            <Button name="emailBut" elname="Send Email"/>
        </div>

    );
}
export default InstructorComp;