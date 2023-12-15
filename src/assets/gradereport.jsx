import React, {useState, useEffect} from 'react';

const GradeReportPage = () => {
    const [allGrades, setAllGrades] = useState([]);
    const [filteredGrades, setFilteredGrades] =
    useState([]);
        const [selectedYear, setSelectedYear] = useState('');

        useEffect(() => {
            const fetchAllGrades = () =>{
                setTimeout(() => {
                    const fetchedGrades = [
                        {course: 'Programming', grade: 'A', year: '2023'},
                        {course: 'Algorithms', grade: 'C', year: '2023'},
                        {course: 'Hardware', grade: 'B', year: '2023'},
                        {course: 'Calculus', grade: 'null', year: '2023'},
                        {course: 'Intro to Computer Science', grade: 'A', year: '2023'},
                        {course: 'Discrete Mathematics', grade: 'C', year: '2023'},
                        {course: 'Circuit Design', grade: 'B', year: '2022'},
                        {course: 'E-Business', grade: 'B', year: '2022'},
                        {course: 'Computer Organization and Architecture', grade: 'B', year: '2022'},
                        {course: 'Statistics', grade: 'C', year: '2022'},
                        {course: 'Economics', grade: 'A', year: '2022'},
                        {course: 'Web Design', grade: 'A', year: '2022'},
                        {course: 'Critical Thinking', grade: 'A', year: '2022'},
                        {course: 'Academic Writing', grade: 'A', year: '2022'},
                        {course: 'African Studies', grade: 'B', year: '2022'},
                        {course: 'Software Evolution', grade: 'A', year: '2023'},
                        //add more
                    ];
                    setAllGrades(fetchedGrades);
                    setFilteredGrades(fetchedGrades);
               
                }, 1000);
            };
            fetchAllGrades();
        }, []);

        const handleYearFilterChange = (event) => {
            const selectedYear = event.target.value;
            setSelectedYear(selectedYear);

            const filtered = allGrades.filter((grade) => grade.year
            === selectedYear);
            setFilteredGrades(filtered);
        };

        return(
            <div className='dash'>
                <h2>Grade Report</h2>
                <div>
                    <label htmlFor = "yearFilter">Filter by Year:
                    </label>
                    <select id = "yearFilter" value = {selectedYear}
                    onChange = {handleYearFilterChange}>
                        <option value = "">All</option>
                        <option value = "2023">2023</option>
                        <option value = "2022">2022</option>
                    </select>
                </div>
                <h3>Detailed View of Courses and Grades:</h3>
                <table>
                    <thread>
                        <tr>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Year</th>
                        </tr>
                    </thread>
                    <tbody>
                        {filteredGrades.map((grade, index) =>(
                            <tr key = {index}>
                                <td>{grade.course}</td>
                                <td>{grade.grade}</td>
                                <td>{grade.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
                        };
                        export default GradeReportPage;