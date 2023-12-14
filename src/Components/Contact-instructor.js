import { useState } from 'react';

const ContactInstructor = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = () => {
        if(email !== "" && message !== ""){
            setEmail("")
            setMessage("")
            alert("Submitted")
        } else {
            alert("Please fill in the form.")
        }
    }
    return (
        <>
            <div className="ContactInstructor">
                <div className="instructor-list">
                    <span>Instructors Available: </span>
                    <div className="instructors">
                        <div>
                            <div>Mr. Mark Attah Mensah</div>
                            <div>mail@ug.edu.gh</div>
                        </div>
                        <div>
                            <div>Mr. Aziz</div>
                            <div>mail@ug.edu.gh</div>
                        </div>
                        <div>
                            <div>Mr. Sorli</div>
                            <div>mail@ug.edu.gh</div>
                        </div>
                    </div>
                </div>
                <div className="instructor-form">
                    <span className="select-lable">Choose Instructor to contact:</span><br/>
                    <select name="Instructors">
                        <option >Mr. Mark Attah Mensah</option>
                        <option >Mr. Aziz</option>
                        <option >Mr. Sorli</option>
                    </select>
                    <span className="email-lable">Enter Email:</span>
                    <input type="text" value={email} onChange={(e)=> {
                        setEmail(e.target.value)
                    }} />
                    <span className="textarea-lable">Enter Message:</span>
                    <textarea rows={10} value={message} onChange={(e)=> {
                        setMessage(e.target.value)
                    }}></textarea>
                    <div className="btn" onClick={handleSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ContactInstructor;