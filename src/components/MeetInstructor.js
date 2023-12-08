const MeetInstructor = () => {
    return (
        <>
            <div class="InstructorContact">
            <h2>Instructors List</h2>
            <ul class="instructors-list">
                <li class="instructor">
                    <strong>Enock </strong>
                    <p>Email: enock@gmail.com</p>
                </li>
                <li class="instructor">
                    <strong>Queenson</strong>
                    <p>Email: queenson@gmail.com</p>
                </li>
            </ul>
            <div class="email-simulation">
                <h3>Send Simulated Email</h3>
                <label for="selectedInstructor">Select Instructor:</label>
                <select id="selectedInstructor">
                    <option value="instructor1@example.com">Enock</option>
                    <option value="instructor2@example.com">Queenson</option>
                </select>

                <label for="emailContent">Email Content:</label>
                <textarea id="emailContent" rows="4" placeholder="Type your message here..."></textarea>

                <button type="button" onclick="simulateEmail()">Send Email</button>
            </div>
            </div>
        </>
    );
}
 
export default MeetInstructor;