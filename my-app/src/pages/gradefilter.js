import React, { useState, useEffect } from "react";


function FilterbySemester() {
    const [selectedSemester, setSelectedSemester] = useState('All Semesters');
    const data = [
        "All Semesters",
        "First Semester",
        "Second Semester",
    ];

    const coursesBySemester = {
        "All Semesters": ["DCIT_101 Introduction to Computer Science ", "DCIT_103 Office Productivity Tools", "MATH_121 Algebra and Trigonometry ", "MATH_123 Vectors and Geometry", "STAT_111 Introduction to Statistics and Probability I ", "UGRC_150 Critical Thinking and Practical Reasoning ", "DCIT_104 Programming Fundamentals", "DCIT_102 Computer Hardware Fundamentals", "MATH_122 Calculus I",  "MATH_126 Algebra and Geometry", "STAT_112 Introduction to Statistics and Probability II", "UGRC_110 Academic Writing I"],
        "First Semester": ["DCIT_101 Introduction to Computer Science ", "DCIT_103 Office Productivity Tools", "MATH_121 Algebra and Trigonometry ", "MATH_123 Vectors and Geometry", "STAT_111 Introduction to Statistics and Probability I ", "UGRC_150 Critical Thinking and Practical Reasoning "],
        "Second Semester": ["DCIT_104 Programming Fundamentals ", "DCIT_102 Computer Hardware Fundamentals", "MATH_122 Calculus I ",  "MATH_126 Algebra and Geometry", "STAT_112 Introduction to Statistics and Probability II ", "UGRC_110 Academic Writing I "],
    };

    const handleChange = (e) => {
        setSelectedSemester(e.target.value);
    };

    useEffect(() => {
        setSelectedSemester('All Semesters');
    }, []);

    const GPA = 3.75; // Replace with your actual GPA calculation logic

    return (
        <div className="bg-transparent text-Charcoal font-extrabold min-h-screen">
            <h1 className="text-4xl font-bold mb-8 px-60 py-6">ACADEMIC RECORD</h1>
            <div className="container px-8 py-8">
                <label htmlFor="semester">Filter by Semester: </label>
                <select
                    id="semester"
                    onChange={handleChange}
                    value={selectedSemester}
                >
                    {data.map((op) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </select>

                

                <table className="table-auto w-full border-separate border-spacing-0">
                    <thead>
                        <tr className=" ">
                            <th className="border-t border-gray-800 px-4 py-8 ">
                            ACADEMIC YEAR: 2022/2023
                        </th>
                        <th className="border-t border-gray-800 px-4 py-2">
                            {selectedSemester}
                        </th>
                        <th className="border-t border-gray-800 px-4 py-2">
                            CCT: {coursesBySemester[selectedSemester]?.length || 0}
                        </th>
                       
                    </tr>
                    <tr className="-pr- 12">
                        <th className='border-t border-b border-gray-800 px-4 py-2 -pr- 20'>Code</th>
                        <th className=" border-t border-b border-gray-800 px-4 py-2 -pr- 20">Course Title</th>
                        <th className=" border-t border-b border-gray-800 px-4 py-2 -pr- 20">Credit</th>
                        <th className=" border-t border-b border-gray-800 px-4 py-2 -pr- 20">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {coursesBySemester[selectedSemester]?.map((course, index) => (
                         <tr key={index}>
                         <td className=''>{course.split(' ')[0]}</td>
                         <td className="pr-12">{course.substring(course.indexOf(" ") + 1)}</td>
                         <td className="pr-12">3</td> 
                         <td className="pr-12">A</td> 
                         <td className="pr-12">{/*calculateGPT(course)*/}</td> 
                     </tr>
                     

                    ))}
                    {/* ... (Additional table body rows) */}
                </tbody>
                <tr> 
                    <th className="border-t border-gray-800 px-2 py-2"/>
                    <th className="border-t border-gray-800 px-2 py-2"/>
                    <th className="border-t border-gray-800 px-2 py-2"/>
                    <th className="border-t border-gray-800 px-2 py-2"/>
                    <th className="border-t border-gray-800 px-2 py-2"/> 
                    
                </tr>
            </table>
        </div>
    </div>
);
}

export default FilterbySemester;