const MissingGrade = () => {
    return (
        <>
            <div class="MissingGrade">
                <form id="missingGradeForm">
                    <label for="courseName">Course Name:</label>
                    <input type="text" id="courseName" name="courseName" required/>

                    <label for="instructorName">Instructor Name:</label>
                    <input type="text" id="instructorName" name="instructorName" required/>

                    <label for="expectedGrade">Expected Grade:</label>
                    <input type="text" id="expectedGrade" name="expectedGrade" required/>

                    <label for="explanation">Explanation:</label>
                    <textarea id="explanation" name="explanation" rows="4" required></textarea>

                    <button type="button" onclick="submitForm()">Submit</button>
                </form>
                <div id="confirmationMessage"></div>
            </div>
        </>
    );
}
 
export default MissingGrade;