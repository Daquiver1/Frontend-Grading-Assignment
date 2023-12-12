const MissingGrade = () => {
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
                    <span>Choose missing grade to report.</span><br/>
                    <select name="missing grades" id="missing-grade">
                        <option value="DCIT103">Office Productivity tools [DCIT103]</option>
                        <option value="UGRC150">Critical Thinking [UGRC150]</option>
                    </select>
                </div>
            </div>
        </>
    );
}
 
export default MissingGrade;