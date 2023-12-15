import Nav from './Nav';
import {useState} from 'react';

const Grades = () => {
    const [grade, setGrade] = useState([
        {id: 1, semester: "First", year: "2023", course: "DCIT 201" , grade: "A" },
        {id: 2, semester: "Second", year: "2022", course: "DCIT 203" , grade: "A" },
        {id: 3, semester: "First", year: "2023", course: "DCIT 205" , grade: "A" },
        {id: 4, semester: "Second", year: "2022", course: "DCIT 207" , grade: "A" },
        {id: 5, semester: "First", year: "2022", course: "MATH 223" , grade: "A" },
        {id: 6, semester: "First", year: "2023", course: "CBAS 210" , grade: "A" }
    ]);

    const semesters = ["First", "Second"];
    const years = [2022, 2023];

    const [selectedSemester, setSelectedSemester] = useState("First");
    const [selectedYear, setSelectedYear] = useState(2023);

    const filteredGrades = grade.filter(
        (grade) => grade.semester === selectedSemester && grade.year === selectedYear
    );

    return (
        <main className="grades-body">
            <Nav />
            <div className="filter-container">
                <label className="filter-label">Filter By Semester:</label>
                <select>
                    className="filter-select"
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                `{'>'}`
                {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                        {semester}
                    </option>
                    ))}
                </select>

                <label className="filter-label">Filter By Semester:</label>
                <select>
                    className="filter-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                `{'>'}`
                {years.map((year) => (
                    <option key={year} value={semesters}>
                        {year}
                    </option>
                    ))}
                </select>

            </div>

            <table className='grades-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Semester</th>
                        <th>Year</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredGrades.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.id}</td>
                            <td>{entry.semester}</td>
                            <td>{entry.year}</td>
                            <td>{entry.course}</td>
                            <td>{entry.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Grades