import {useState} from 'react';

const MissingGrade = () => {
    const [email, setEmail] = useState("")
    const handleReport = () => {
        if(email !== ""){
            setEmail("")
            alert("Submitted")
        } else {
            alert("Please Provide your Email.")
        }
    }
    return (
        <>
            <div className="MissingGrade">
                <div className="missing-grade-list">
                    <span>Missing Grades Available</span>
                    <div className="missing">
                        <div>Office Productivity tools [DCIT103]</div>
                        <div>Critical Thinking [UGRC150]</div>
                    </div>
                </div>
                <div className="missing-grade-form">
                    <span className="select-lable">Choose missing grade to report.</span><br/>
                    <select name="missing grades" id="missing-grade">
                        <option value="DCIT103">Office Productivity tools [DCIT103]</option>
                        <option value="UGRC150">Critical Thinking [UGRC150]</option>
                    </select>
                    <span className="email-lable">Enter Email:</span>
                    <input type="text" value={email} onChange={(e)=> {
                        setEmail(e.target.value)
                    }} />
                    <div className="btn" onClick={handleReport}>
                        Report
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default MissingGrade;