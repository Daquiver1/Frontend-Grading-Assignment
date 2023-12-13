// Detailed view of all courses and respective grades.
// Option to filter by semester/academic year.

const GradesReport = () => {
    return (
        <div className="grades-container">
            <h2>Grades</h2>
            {/* Detailed view of all courses and respective grades. */}

            <table className="grades-table">
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>Course 1</td>
                    <td>90%</td>
                </tr>
                <tr>
                    <td>Course 2</td>
                    <td>80%</td>
                </tr>
                <tr>
                    <td>Course 3</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <td>Course 4</td>
                    <td>60%</td>
                </tr>
            </table>

            {/* Option to filter by semester/academic year. */}

            <div className="grades-filter">
                <label htmlFor="grades-filter">Filter by:</label>
                <select name="grades-filter" id="grades-filter">
                    <option value="all">All</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>

                <button>Filter</button>
            </div>
        </div>
    )
}

export default GradesReport;