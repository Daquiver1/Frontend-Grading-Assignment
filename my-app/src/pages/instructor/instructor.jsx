import React from "react";
import "./instructor.css"

function Instructor() {
    return (
        <div className="instructor-page">
            <h1>Instructor Page</h1>

            <div className="course-container">
                <div id="course1" className="course">
                    <h4 className="course">Course: DCIT 201</h4>
                    <p id="name">Instructor: Paul Nii-Tackie</p>
                    <p>Office: Computer Science Department</p>
                    <p>Office Hours: Mondays, 12pm - 5pm</p>
                    <p>Email: paul@ug.edu.gh</p>
                    <p>Phone: XXXXXXXXXXX</p>
                </div>
                <div id="course2" className="course">
                    <h4 className="course">Course: DCIT 203</h4>
                    <p id="name">Instructor: Dwumfour Abdullai Abdul-Aziz</p>
                    <p>Office: Room CS5, Comp Sci. dept., RIPS building.</p>
                    <p>Office Hours: Tuesdays, 10am - 5pm</p>
                    <p>Email: adwumfour@ug.edu.gh</p>
                    <p>Phone: XXXXXXXXXXX</p>
                </div>
                <div id="course3" className="course">
                    <h4 className="course">Course: DCIT 205</h4>
                    <p id="name">Instructor: Michael Sorli</p>
                    <p>Office: Computer Science Department</p>
                    <p>Office Hours: Fridays, 10am - 5pm</p>
                    <p>Email: msorli@ug.edu.gh</p>
                    <p>Phone: XXXXXXXXXXX</p>
                </div>
                <div id="course4" className="course">
                    <h4 className="course">Course: DCIT 207</h4>
                    <p id="name">Instructor: Samuel Winful</p>
                    <p>Office: Computer Science Department</p>
                    <p>Office Hours: Mondays, 12pm - 5pm</p>
                    <p>Email: swinful@ug.edu.gh</p>
                    <p>Phone: XXXXXXXXXXX</p>
                </div>
                <div id="course5" className="course">
                    <h4 className="course">Course: UGRC 210</h4>
                    <p id="name">Instructor: Seth Nii Moi Allotey</p>
                    <p>Office: English Department</p>
                    <p>Office Hours: Mondays, 12pm - 5pm</p>
                    <p>Email: sethallotey@ug.edu.gh</p>
                    <p>Phone: XXXXXXXXXXX</p>
                </div>
            </div>

            <form action="" id="message-form">
            <h3>Send a Message</h3>
            <fieldset>
                <label htmlFor="name">
                    Instructor Name
                    <select id="name" name="name" required>
                        <option value="">(Choose instructor)</option>
                        <option value="1">Paul Nii-Tackie</option>
                        <option value="2">Dwumfour Abdullai Abdul-Aziz</option>
                        <option value="3">Michael Sorli</option>
                        <option value="4">Samuel Winful</option>
                        <option value="5">Seth Nii Moi Allotey</option>
                    </select>
                </label>
                <label htmlFor="email">
                    Email
                    <select id="name" name="name" required>
                        <option value="">(Choose instructor email)</option>
                        <option value="1">paul@ug.edu.gh</option>
                        <option value="2">adwumfour@ug.edu.gh</option>
                        <option value="3">msorli@ug.edu.gh</option>
                        <option value="4">swinful@ug.edu.gh</option>
                        <option value="5">sethallotey@ug.edu.gh</option>
                    </select>
                </label>
                <label htmlFor="message">
                    Message
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Enter message..." required></textarea>
                </label>
            </fieldset>

            <input type="submit" name="submit" id="submit" />
            </form>

        </div>
    )
}

export default Instructor