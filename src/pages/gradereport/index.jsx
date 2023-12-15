
import React, { useState } from 'react';
import DashboardLayout from '../../layout';

const GradeReport = () => {
    const [selectedYear, setSelectedYear] = useState('2023');


    const gradeData = [
        { course: 'Programming Fundamentals', grade: 'A', year: '2023', semester: '1' },
        { course: 'Economics', grade: 'B', year: '2023', semester: '1' },
        { course: 'Programming 2', grade: 'A-', year: '2023', semester: '2' },
        { course: 'Multimedia', grade: 'B+', year: '2023', semester: '2' },
        { course: 'Economics 2', grade: 'A', year: '2023', semester: '2' },
        { course: 'Introduction to Computer Science', grade: 'A+', year: '2023', semester: '2' },

    ];

    // Filter courses by year and semester
    const filteredCourses = gradeData.filter(
        (course) => course.year === selectedYear
    );

    return (
        <DashboardLayout title={"Grade Report"}>
            <div className="bg-gray-100 min-h-screen p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-center">Grade Report</h1>

                    {/* Filter by year dropdown */}
                    <div className="mb-6">
                        <label htmlFor="selectYear" className="block text-sm font-medium text-gray-600">
                            Filter by Year:
                        </label>
                        <select
                            id="selectYear"
                            name="selectYear"
                            className="mt-1 p-2 border rounded-md"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            {/* Add more years as needed */}
                        </select>
                    </div>

                    {/* Grade table */}
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border-b">Course</th>
                                <th className="py-2 px-4 border-b">Grade</th>
                                <th className="py-2 px-4 border-b">Year</th>
                                <th className="py-2 px-4 border-b">Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map((course, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{course.course}</td>
                                    <td className="py-2 px-4 border-b">{course.grade}</td>
                                    <td className="py-2 px-4 border-b">{course.year}</td>
                                    <td className="py-2 px-4 border-b">{course.semester}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default GradeReport;
