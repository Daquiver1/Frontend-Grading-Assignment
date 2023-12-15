import { useState } from "react";
import Form from "./Form";
import Submittedpage from "./Submittedpage";

const Submission = () => {
    let [submit,setSubmit]=useState(false);

   

    return ( 
        <div className="">
            { submit?
             <Submittedpage/> : 
            <Form Submits={setSubmit}/>}
        </div>
     );
}
 
export default Submission;