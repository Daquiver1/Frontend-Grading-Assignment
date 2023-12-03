import React from "react";
import "./missingGrade.css"
function MissingGrade() {
    return (
        <div className="m-grade-page">
            <h1>Missing Grade</h1>
            <form action="/submit">
            <fieldset>
                        <label htmlFor="cname">
                            Course Name
                            <input type="text" name="cname" id="name" required/>
                        </label>
                        <label htmlFor="iname">
                            Instructor Name
                            <input type="text" name="iname" id="contact" required/>
                        </label>
                        <label htmlFor="exg">
                            Expected Grade
                            <select id="exg" name="exg" required>
                                <option value="">(Grade)</option>
                                <option value="1">A</option>
                                <option value="2">B+</option>
                                <option value="3">B</option>
                                <option value="4">B-</option>
                                <option value="5">C+</option>
                                <option value="6">C</option>
                                <option value="7">C-</option>
                            </select>
                        </label>
                        <label htmlFor="issue">
                            Explanation
                            <textarea placeholder="What is your reason..." required/>
                        </label>
                    </fieldset>
                    <input type="submit" id="submit"/>
            </form>
        </div>
    )
}

export default MissingGrade